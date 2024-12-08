import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CurrencyDollarIcon,
  ChartBarIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  PlusIcon,
  ArrowPathIcon,
  PauseCircleIcon,
  PlayCircleIcon
} from '@heroicons/react/24/outline';
import CreateAdModal from './components/CreateAdModal';
import AdDetailModal from './components/AdDetailModal';

const mockAds = [
  {
    id: 1,
    name: '新年促销活动',
    type: 'personal',
    typeName: '个人用户',
    status: '进行中',
    budget: '5000',
    spent: '2580',
    startDate: '2024-01-15',
    endDate: '2024-02-15',
    performance: {
      impressions: '125.6K',
      clicks: '3.2K',
      ctr: '2.55%',
      conversions: '156'
    }
  },
  {
    id: 2,
    name: '商场大屏广告',
    type: 'device',
    typeName: '广告屏',
    status: '已暂停',
    budget: '8000',
    spent: '3650',
    startDate: '2024-01-10',
    endDate: '2024-02-10',
    performance: {
      impressions: '89.3K',
      clicks: '2.1K',
      ctr: '2.35%',
      conversions: '98'
    }
  }
];

export default function AdvertiserManagement() {
  const [ads] = useState(mockAds);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null);

  const handleViewDetails = (ad) => {
    setSelectedAd(ad);
    setIsDetailModalOpen(true);
  };

  const handleToggleAdStatus = (adId) => {
    console.log('切换广告状态:', adId);
    // TODO: 实现广告状态切换功能
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
            <RocketLaunchIcon className="w-5 h-5 text-purple-500 mr-2" />
            <h3 className="text-gray-400">活跃广告</h3>
          </div>
          <p className="text-2xl font-bold text-white">12</p>
          <p className="text-sm text-green-400 mt-1">+2 新增</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card"
        >
          <div className="flex items-center mb-2">
            <ChartBarIcon className="w-5 h-5 text-blue-500 mr-2" />
            <h3 className="text-gray-400">总展示量</h3>
          </div>
          <p className="text-2xl font-bold text-white">214.9K</p>
          <p className="text-sm text-green-400 mt-1">+12.5%</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card"
        >
          <div className="flex items-center mb-2">
            <UserGroupIcon className="w-5 h-5 text-green-500 mr-2" />
            <h3 className="text-gray-400">覆盖用户</h3>
          </div>
          <p className="text-2xl font-bold text-white">45.2K</p>
          <p className="text-sm text-green-400 mt-1">+8.3%</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card"
        >
          <div className="flex items-center mb-2">
            <CurrencyDollarIcon className="w-5 h-5 text-yellow-500 mr-2" />
            <h3 className="text-gray-400">总支出</h3>
          </div>
          <p className="text-2xl font-bold text-white">￥6,230</p>
          <p className="text-sm text-green-400 mt-1">预算充足</p>
        </motion.div>
      </div>

      {/* 广告管理 */}
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold gradient-text">我的广告</h2>
          <div className="flex space-x-4">
            <button className="text-purple-400 hover:text-purple-300 text-sm">
              批量管理
            </button>
            <button 
              className="hero-button flex items-center"
              onClick={() => setIsCreateModalOpen(true)}
            >
              <PlusIcon className="w-5 h-5 mr-1" />
              创建广告
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {ads.map((ad, index) => (
            <motion.div
              key={ad.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {ad.name}
                  </h3>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-400">
                      类型：{ad.typeName}
                    </span>
                    <span className="text-sm text-gray-400">
                      预算：￥{ad.budget}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      ad.status === '进行中' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {ad.status}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400 mb-1">已消费</p>
                  <p className="text-lg font-semibold text-white">￥{ad.spent}</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 p-4 rounded-lg bg-gray-900/50">
                <div>
                  <p className="text-sm text-gray-400 mb-1">展示次数</p>
                  <p className="text-lg font-semibold text-white">{ad.performance.impressions}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">点击次数</p>
                  <p className="text-lg font-semibold text-white">{ad.performance.clicks}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">点击率</p>
                  <p className="text-lg font-semibold text-white">{ad.performance.ctr}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">转化次数</p>
                  <p className="text-lg font-semibold text-white">{ad.performance.conversions}</p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-400">
                  投放时间：{ad.startDate} 至 {ad.endDate}
                </span>
                <div className="space-x-4">
                  <button 
                    className="text-purple-400 hover:text-purple-300 text-sm"
                    onClick={() => handleViewDetails(ad)}
                  >
                    查看详情
                  </button>
                  <button className="text-purple-400 hover:text-purple-300 text-sm">
                    编辑广告
                  </button>
                  <button 
                    className="text-purple-400 hover:text-purple-300 text-sm flex items-center"
                    onClick={() => handleToggleAdStatus(ad.id)}
                  >
                    {ad.status === '进行中' ? (
                      <>
                        <PauseCircleIcon className="w-4 h-4 mr-1" />
                        暂停投放
                      </>
                    ) : (
                      <>
                        <PlayCircleIcon className="w-4 h-4 mr-1" />
                        恢复投放
                      </>
                    )}
                  </button>
                  <button className="text-purple-400 hover:text-purple-300 text-sm flex items-center">
                    <ArrowPathIcon className="w-4 h-4 mr-1" />
                    刷新数据
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 投放指南 */}
      <div className="card">
        <h2 className="text-xl font-semibold gradient-text mb-6">投放指南</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-gray-800/50">
            <h3 className="text-lg font-semibold text-white mb-4">创意优化</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• 选择合适的广告形式</li>
              <li>• 制作吸引人的创意内容</li>
              <li>• 定期更新广告素材</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-gray-800/50">
            <h3 className="text-lg font-semibold text-white mb-4">投放策略</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• 精准定向目标受众</li>
              <li>• 合理分配投放预算</li>
              <li>• 优化投放时间段</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-gray-800/50">
            <h3 className="text-lg font-semibold text-white mb-4">效果分析</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• 监控关键指标</li>
              <li>• 分析转化数据</li>
              <li>• 优化投放策略</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 创建广告模态框 */}
      <CreateAdModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />

      {/* 广告详情模态框 */}
      <AdDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        ad={selectedAd}
      />
    </div>
  );
}
