import { motion } from 'framer-motion';
import {
  FireIcon,
  ChartBarIcon,
  UserGroupIcon,
  GlobeAltIcon,
  UsersIcon,
  TvIcon
} from '@heroicons/react/24/outline';
import StatCard from './components/StatCard';
import WorldMap from './components/charts/WorldMap';
import TrendChart from './components/charts/TrendChart';
import UserProfile from './components/UserProfile';

const stats = [
  {
    icon: UsersIcon,
    title: '平台用户',
    value: '256.8K',
    change: '16.3%',
    tooltip: '平台注册用户总量'
  },
  {
    icon: UserGroupIcon,
    title: '广告主',
    value: '12.5K',
    change: '15.2%',
    tooltip: '活跃广告主数量'
  },
  {
    icon: TvIcon,
    title: 'LED广告屏',
    value: '1,256',
    change: '18.9%',
    tooltip: '已接入的广告屏'
  },
  {
    icon: FireIcon,
    title: '广告收益',
    value: '156K WAD',
    change: '8.5%',
    tooltip: '平台广告收益(24h)'
  },
  {
    icon: ChartBarIcon,
    title: '日均展示',
    value: '2.5M',
    change: '5.4%',
    tooltip: '广告日均展示次数'
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* 页面标题 */}
      <div>
        <h1 className="text-2xl font-bold gradient-text">WorldAds数据仪表盘</h1>
        <p className="text-gray-400 mt-2">
          去中心化LED广告屏生态系统
        </p>
      </div>

      {/* 数据统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={stat.title}
            icon={stat.icon}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            tooltip={stat.tooltip}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* 平台数据 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="card bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">广告效果</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-green-400 text-sm">实时</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">平均点击率</span>
              <span className="text-white font-mono">3.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">转化率</span>
              <span className="text-white font-mono">1.8%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">互动率</span>
              <span className="text-white font-mono">5.6%</span>
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">广告收入</h3>
            <div className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">24h</div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">广告收入</span>
              <span className="text-white font-mono">156K WAD</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">屏幕收益</span>
              <span className="text-white font-mono">89K WAD</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">平台手续费</span>
              <span className="text-white font-mono">12K WAD</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 广告屏分布地图 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="card bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/20"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold gradient-text">广告屏分布</h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <GlobeAltIcon className="w-5 h-5 text-purple-400" />
              <span className="text-gray-400">覆盖 156 个商圈</span>
            </div>
            <div className="flex items-center space-x-2">
              <TvIcon className="w-5 h-5 text-blue-400" />
              <span className="text-gray-400">1,256 块屏</span>
            </div>
          </div>
        </div>
        <WorldMap />
      </motion.div>

      {/* 用户画像和趋势分析 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 用户画像 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card bg-gradient-to-br from-pink-500/10 to-rose-500/10 border-pink-500/20"
        >
          <h2 className="text-xl font-semibold gradient-text mb-6">广告主画像</h2>
          <UserProfile />
        </motion.div>

        {/* 趋势分析 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20"
        >
          <h2 className="text-xl font-semibold gradient-text mb-6">平台趋势</h2>
          <TrendChart />
        </motion.div>
      </div>
    </div>
  );
}
