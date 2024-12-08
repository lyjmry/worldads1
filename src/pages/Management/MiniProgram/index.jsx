import { useState } from 'react';
import { motion } from 'framer-motion';
import { CurrencyDollarIcon, ChartBarIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const mockApps = [
  {
    id: 1,
    name: '示例小程序1',
    developer: '开发者A',
    category: '工具类',
    dailyUsers: '12.5K',
    adRevenue: '2,580',
    status: '已接入',
    lastUpdate: '2024-01-20',
    performance: {
      ctr: '3.2%',
      impressions: '45.6K',
      earnings: '￥2,580'
    }
  },
  {
    id: 2,
    name: '示例小程序2',
    developer: '开发者B',
    category: '生活服务',
    dailyUsers: '8.3K',
    adRevenue: '1,850',
    status: '已接入',
    lastUpdate: '2024-01-19',
    performance: {
      ctr: '2.8%',
      impressions: '32.1K',
      earnings: '￥1,850'
    }
  }
];

export default function MiniProgramManagement() {
  const [apps] = useState(mockApps);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold gradient-text">小程序管理</h1>
          <p className="text-gray-400 mt-2">
            管理接入的小程序和广告收益
          </p>
        </div>
        <button className="hero-button">
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
          <p className="text-2xl font-bold text-white">156</p>
          <p className="text-sm text-green-400 mt-1">+12.3%</p>
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
            <h3 className="text-gray-400">收益分成</h3>
          </div>
          <p className="text-2xl font-bold text-white">￥25.8K</p>
          <p className="text-sm text-green-400 mt-1">+15.2%</p>
        </motion.div>
      </div>

      {/* 小程序列表 */}
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold gradient-text">接入小程序</h2>
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
                      开发者：{app.developer}
                    </span>
                    <span className="text-sm text-gray-400">
                      类型：{app.category}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400`}>
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
                  <p className="text-sm text-gray-400 mb-1">点击率</p>
                  <p className="text-lg font-semibold text-white">{app.performance.ctr}</p>
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
                  <button className="text-red-400 hover:text-red-300 text-sm">
                    暂停投放
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 收益分析 */}
      <div className="mt-8 card">
        <h2 className="text-xl font-semibold gradient-text mb-6">收益分析</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-lg bg-gray-800/50">
            <h3 className="text-gray-400 mb-2">平均点击成本</h3>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-bold text-white">￥0.86</p>
              <p className="text-sm text-green-400">-8.2%</p>
            </div>
          </div>
          <div className="p-4 rounded-lg bg-gray-800/50">
            <h3 className="text-gray-400 mb-2">平均千次展示收益</h3>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-bold text-white">￥58.5</p>
              <p className="text-sm text-green-400">+12.3%</p>
            </div>
          </div>
          <div className="p-4 rounded-lg bg-gray-800/50">
            <h3 className="text-gray-400 mb-2">分成比例</h3>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-bold text-white">70%</p>
              <p className="text-sm text-gray-400">固定比例</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
