import { useState } from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import CreateMiniappModal from './components/CreateMiniappModal';

const initialApps = [
  {
    id: 1,
    name: 'World小程序A',
    appId: 'world_app_001',
    category: '工具类',
    status: '已接入',
    dailyUsers: '12.5K',
    revenue: '2,580',
    lastUpdate: '2024-01-20',
    performance: {
      adCtr: '3.2%',
      impressions: '45.6K',
      earnings: '￥2,580'
    }
  }
];

export default function DeveloperManagement() {
  const [apps, setApps] = useState(initialApps);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateApp = (formData) => {
    const newApp = {
      id: Date.now(), // 使用时间戳作为唯一ID
      name: formData.name,
      appId: formData.worldAppId,
      category: formData.category,
      status: '审核中',
      dailyUsers: '0',
      revenue: '0',
      lastUpdate: new Date().toLocaleDateString(),
      performance: {
        adCtr: '0%',
        impressions: '0',
        earnings: '￥0'
      }
    };

    setApps(prevApps => [newApp, ...prevApps]); // 将新应用添加到列表开头
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold gradient-text">World小程序</h1>
          <p className="text-gray-400 mt-2">
            接入广告SDK，获取广告收益
          </p>
        </div>
        <button 
          className="hero-button"
          onClick={() => setIsModalOpen(true)}
        >
          接入新小程序
        </button>
      </div>

      {/* 数据统计 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card"
        >
          <div className="flex items-center mb-2">
            <CodeBracketIcon className="w-5 h-5 text-purple-500 mr-2" />
            <h3 className="text-gray-400">接入小程序</h3>
          </div>
          <p className="text-2xl font-bold text-white">{apps.length}</p>
          <p className="text-sm text-green-400 mt-1">+{apps.length - initialApps.length} 新增</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card"
        >
          <div className="flex items-center mb-2">
            <ChartBarIcon className="w-5 h-5 text-blue-500 mr-2" />
            <h3 className="text-gray-400">日均展示</h3>
          </div>
          <p className="text-2xl font-bold text-white">1.2M</p>
          <p className="text-sm text-green-400 mt-1">+8.5%</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card"
        >
          <div className="flex items-center mb-2">
            <CurrencyDollarIcon className="w-5 h-5 text-green-500 mr-2" />
            <h3 className="text-gray-400">广告收益</h3>
          </div>
          <p className="text-2xl font-bold text-white">￥25.8K</p>
          <p className="text-sm text-green-400 mt-1">+15.2%</p>
        </motion.div>
      </div>

      {/* 小程序列表 */}
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold gradient-text">我的小程序</h2>
          <div className="flex space-x-4">
            <button className="text-purple-400 hover:text-purple-300 text-sm">
              批量管理
            </button>
            <button className="text-purple-400 hover:text-purple-300 text-sm">
              数据分析
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {apps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {app.name}
                  </h3>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-400">
                      AppID：{app.appId}
                    </span>
                    <span className="text-sm text-gray-400">
                      类型：{app.category}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      app.status === '已接入' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {app.status}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400 mb-1">日活用户</p>
                  <p className="text-lg font-semibold text-white">{app.dailyUsers}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-gray-900/50">
                <div>
                  <p className="text-sm text-gray-400 mb-1">广告点击率</p>
                  <p className="text-lg font-semibold text-white">{app.performance.adCtr}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">展示次数</p>
                  <p className="text-lg font-semibold text-white">{app.performance.impressions}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">今日收益</p>
                  <p className="text-lg font-semibold text-white">{app.performance.earnings}</p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-400">
                  最后更新：{app.lastUpdate}
                </span>
                <div className="space-x-4">
                  <button className="text-purple-400 hover:text-purple-300 text-sm">
                    查看详情
                  </button>
                  <button className="text-purple-400 hover:text-purple-300 text-sm">
                    广告设置
                  </button>
                  <button className="text-purple-400 hover:text-purple-300 text-sm">
                    SDK配置
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SDK接入指南 */}
      <div className="mt-8 card">
        <h2 className="text-xl font-semibold gradient-text mb-6">SDK接入指南</h2>
        <div className="space-y-6 text-gray-400">
          <div>
            <h3 className="text-white text-lg mb-2">快速开始</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>安装SDK：npm install @worldads/miniapp-sdk</li>
              <li>初始化配置：在小程序入口文件中导入并初始化SDK</li>
              <li>接入广告组件：按照文档说明集成广告展示组件</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg mb-2">广告类型</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>横幅广告：适合放置在内容区域顶部或底部</li>
              <li>插屏广告：在自然场景切换时展示</li>
              <li>激励视频：完整观看后获得应用内奖励</li>
            </ul>
          </div>
          <div className="flex justify-end">
            <button className="text-purple-400 hover:text-purple-300">
              查看完整文档 →
            </button>
          </div>
        </div>
      </div>

      {/* 接入小程序模态框 */}
      <CreateMiniappModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateApp}
      />
    </div>
  );
}
