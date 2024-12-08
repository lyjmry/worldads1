import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  ClockIcon,
  DocumentCheckIcon,
  LanguageIcon,
  MapPinIcon,
  ArrowPathIcon,
  FlagIcon
} from '@heroicons/react/24/outline';
import ReviewDetailModal from './components/ReviewDetailModal';

const mockContents = [
  {
    id: 'AD001',
    title: '新年促销活动',
    description: '庆祝新年特惠活动，多重优惠等你来',
    type: 'ad',
    language: '中文',
    region: '中国大陆',
    submittedAt: '2024-01-20 15:30',
    priority: 'high',
    status: 'pending'
  },
  {
    id: 'AD002',
    title: 'Summer Sale Campaign',
    description: 'Get amazing discounts this summer',
    type: 'ad',
    language: 'English',
    region: 'United States',
    submittedAt: '2024-01-20 14:45',
    priority: 'normal',
    status: 'pending'
  }
];

const regions = [
  { id: 'cn', name: '中国大陆', languages: ['中文'] },
  { id: 'hk', name: '中国香港', languages: ['中文', 'English'] },
  { id: 'us', name: '美国', languages: ['English', 'Spanish'] },
  { id: 'jp', name: '日本', languages: ['日本語'] }
];

export default function ReviewerManagement() {
  const [contents] = useState(mockContents);
  const [selectedContent, setSelectedContent] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('all');

  const handleReview = (content) => {
    setSelectedContent(content);
    setIsDetailModalOpen(true);
  };

  return (
    <div className="space-y-8">
      {/* 数据统计 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card"
        >
          <div className="flex items-center mb-2">
            <ClockIcon className="w-5 h-5 text-purple-500 mr-2" />
            <h3 className="text-gray-400">待审核</h3>
          </div>
          <p className="text-2xl font-bold text-white">24</p>
          <p className="text-sm text-yellow-400 mt-1">需要处理</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card"
        >
          <div className="flex items-center mb-2">
            <DocumentCheckIcon className="w-5 h-5 text-blue-500 mr-2" />
            <h3 className="text-gray-400">今日已审核</h3>
          </div>
          <p className="text-2xl font-bold text-white">156</p>
          <p className="text-sm text-green-400 mt-1">+12.5%</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card"
        >
          <div className="flex items-center mb-2">
            <LanguageIcon className="w-5 h-5 text-green-500 mr-2" />
            <h3 className="text-gray-400">语言覆盖</h3>
          </div>
          <p className="text-2xl font-bold text-white">8</p>
          <p className="text-sm text-green-400 mt-1">种语言</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card"
        >
          <div className="flex items-center mb-2">
            <MapPinIcon className="w-5 h-5 text-yellow-500 mr-2" />
            <h3 className="text-gray-400">地区覆盖</h3>
          </div>
          <p className="text-2xl font-bold text-white">12</p>
          <p className="text-sm text-green-400 mt-1">个地区</p>
        </motion.div>
      </div>

      {/* 审核队列 */}
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold gradient-text">审核队列</h2>
            <p className="text-gray-400 mt-1">按优先级排序</p>
          </div>
          <div className="flex space-x-4">
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
            >
              <option value="all">全部地区</option>
              {regions.map(region => (
                <option key={region.id} value={region.id}>{region.name}</option>
              ))}
            </select>
            <button className="text-purple-400 hover:text-purple-300 text-sm flex items-center">
              <ArrowPathIcon className="w-4 h-4 mr-1" />
              刷新队列
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {contents.map(content => (
            <motion.div
              key={content.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {content.title}
                  </h3>
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="text-sm text-gray-400">ID: {content.id}</span>
                    <span className="text-sm text-gray-400">语言: {content.language}</span>
                    <span className="text-sm text-gray-400">地区: {content.region}</span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      content.priority === 'high' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {content.priority === 'high' ? '高优先级' : '普通优先级'}
                    </span>
                  </div>
                  <p className="text-gray-400">{content.description}</p>
                </div>
                <button
                  onClick={() => handleReview(content)}
                  className="hero-button"
                >
                  开始审核
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 审核规则 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-semibold gradient-text mb-6">审核规则</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-gray-800/50">
              <div className="flex items-center mb-2">
                <ShieldCheckIcon className="w-5 h-5 text-purple-500 mr-2" />
                <h3 className="text-white font-medium">法律合规</h3>
              </div>
              <p className="text-gray-400 text-sm">确保内容符合当地法律法规，包括但不限于广告法、消费者保护法等。</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-800/50">
              <div className="flex items-center mb-2">
                <FlagIcon className="w-5 h-5 text-blue-500 mr-2" />
                <h3 className="text-white font-medium">文化尊重</h3>
              </div>
              <p className="text-gray-400 text-sm">尊重不同地区的文化传统和宗教信仰，避免文化冲突。</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold gradient-text mb-6">语言区域</h2>
          <div className="space-y-4">
            {regions.map(region => (
              <div key={region.id} className="p-4 rounded-lg bg-gray-800/50">
                <h3 className="text-white font-medium mb-2">{region.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {region.languages.map(lang => (
                    <span
                      key={lang}
                      className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-400"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 审核详情模态框 */}
      <ReviewDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        content={selectedContent}
      />
    </div>
  );
}
