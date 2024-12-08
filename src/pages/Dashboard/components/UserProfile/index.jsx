import { motion } from 'framer-motion';
import AgeDistribution from './AgeDistribution';
import InterestChart from './InterestChart';

const stats = [
  { 
    label: '广告投放量',
    value: '2,345',
    change: '+12.3%',
    color: 'text-purple-400'
  },
  { 
    label: '点击率',
    value: '5.8%',
    change: '+2.1%',
    color: 'text-blue-400'
  },
  { 
    label: '转化率',
    value: '2.2%',
    change: '+3.4%',
    color: 'text-green-400'
  }
];

const advertiserStats = [
  {
    label: '品牌广告主',
    value: '1,567',
    icon: '🏢',
    color: 'from-purple-500/10 to-pink-500/10 border-purple-500/20'
  },
  {
    label: '效果广告主',
    value: '2,345',
    icon: '📈',
    color: 'from-blue-500/10 to-cyan-500/10 border-blue-500/20'
  },
  {
    label: '本地广告主',
    value: '1,234',
    icon: '📍',
    color: 'from-green-500/10 to-emerald-500/10 border-green-500/20'
  },
  {
    label: '新增广告主',
    value: '890',
    icon: '🆕',
    color: 'from-yellow-500/10 to-orange-500/10 border-yellow-500/20'
  }
];

export default function UserProfile() {
  return (
    <div className="space-y-6">
      {/* 核心指标 */}
      <div className="grid grid-cols-3 gap-4 p-4 bg-gray-800/50 rounded-lg border border-purple-500/10">
        {stats.map(stat => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-gray-400 text-sm">{stat.label}</p>
            <p className={`text-xl font-semibold ${stat.color} mt-1`}>{stat.value}</p>
            <p className="text-sm text-green-400">{stat.change}</p>
          </motion.div>
        ))}
      </div>

      {/* 广告主分布 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {advertiserStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-4 rounded-lg bg-gradient-to-br ${stat.color} relative overflow-hidden group`}
          >
            {/* 背景动画 */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/[0.02] transform -skew-x-12 group-hover:animate-shine" />
            
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{stat.icon}</span>
                <span className="text-xl font-bold text-white">{stat.value}</span>
              </div>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <AgeDistribution />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <InterestChart />
      </motion.div>
    </div>
  );
}
