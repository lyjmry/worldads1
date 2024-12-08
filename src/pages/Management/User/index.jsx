import { motion } from 'framer-motion';
import {
  CurrencyDollarIcon,
  StarIcon,
  EyeIcon,
  HandRaisedIcon,
  ChartBarIcon,
  ClockIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

export default function UserManagement() {
  return (
    <div className="space-y-8">
      {/* 用户信息卡片 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 rounded-2xl bg-gray-800/50 border border-purple-500/10 backdrop-blur-xl"
      >
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-[1px]">
              <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  W
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-2">
              <h2 className="text-2xl font-bold text-white">WorldID已认证用户</h2>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
                已认证
              </span>
            </div>
            <p className="text-gray-400 mb-4">0x1234...5678</p>
            <div className="flex space-x-4">
              <button className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-purple-500/20 transition-colors flex items-center">
                <CurrencyDollarIcon className="w-5 h-5 mr-2" />
                领取每日奖励
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 数据统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20"
        >
          <div className="flex items-center mb-4">
            <CurrencyDollarIcon className="w-6 h-6 text-purple-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">代币余额</h3>
          </div>
          <p className="text-3xl font-bold text-white mb-2">1,234</p>
          <p className="text-sm text-green-400">+25 今日收益</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-2xl bg-pink-500/10 border border-pink-500/20"
        >
          <div className="flex items-center mb-4">
            <StarIcon className="w-6 h-6 text-pink-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">贡献值</h3>
          </div>
          <p className="text-3xl font-bold text-white mb-2">2,345</p>
          <p className="text-sm text-green-400">+15 今日增长</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20"
        >
          <div className="flex items-center mb-4">
            <EyeIcon className="w-6 h-6 text-blue-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">今日观看</h3>
          </div>
          <p className="text-3xl font-bold text-white mb-2">3/5</p>
          <p className="text-sm text-gray-400">剩余2次奖励机会</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20"
        >
          <div className="flex items-center mb-4">
            <HandRaisedIcon className="w-6 h-6 text-green-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">互动次数</h3>
          </div>
          <p className="text-3xl font-bold text-white mb-2">2/5</p>
          <p className="text-sm text-gray-400">剩余3次奖励机会</p>
        </motion.div>
      </div>

      {/* 活动记录 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-6 rounded-2xl bg-gray-800/50 border border-purple-500/10 backdrop-blur-xl"
      >
        <h3 className="text-lg font-semibold text-white mb-4">今日活动</h3>
        <div className="space-y-4">
          {[
            { type: '观看', content: '完成广告观看', time: '10分钟前', reward: '+5 TOKEN' },
            { type: '互动', content: '点赞广告内容', time: '1小时前', reward: '+3 TOKEN' },
            { type: '观看', content: '完成广告观看', time: '2小时前', reward: '+5 TOKEN' },
            { type: '互动', content: '评论广告内容', time: '3小时前', reward: '+3 TOKEN' }
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-xl bg-gray-900/50 border border-purple-500/10"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  {activity.type === '观看' ? (
                    <EyeIcon className="w-5 h-5 text-purple-400" />
                  ) : (
                    <HandRaisedIcon className="w-5 h-5 text-purple-400" />
                  )}
                </div>
                <div>
                  <p className="text-white font-medium">{activity.content}</p>
                  <p className="text-sm text-gray-400">{activity.type} · {activity.time}</p>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">
                {activity.reward}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 每日统计 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="p-6 rounded-2xl bg-gray-800/50 border border-purple-500/10">
          <div className="flex items-center mb-4">
            <ChartBarIcon className="w-6 h-6 text-purple-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">观看统计</h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">今日观看</span>
              <span className="text-white">3次</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">获得奖励</span>
              <span className="text-white">15 TOKEN</span>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-gray-800/50 border border-purple-500/10">
          <div className="flex items-center mb-4">
            <ClockIcon className="w-6 h-6 text-purple-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">互动统计</h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">今日互动</span>
              <span className="text-white">2次</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">获得奖励</span>
              <span className="text-white">6 TOKEN</span>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-gray-800/50 border border-purple-500/10">
          <div className="flex items-center mb-4">
            <ArrowTrendingUpIcon className="w-6 h-6 text-purple-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">贡献统计</h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">今日增长</span>
              <span className="text-white">15点</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">累计贡献</span>
              <span className="text-white">2,345点</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
