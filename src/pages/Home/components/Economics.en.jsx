import { motion } from 'framer-motion';
import {
  CurrencyDollarIcon,
  ChartBarIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

export default function Economics() {
  const metrics = [
    {
      icon: CurrencyDollarIcon,
      title: 'Token Economics',
      description: 'WAD token serves as the platform\'s native currency for advertising transactions and rewards.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: ChartBarIcon,
      title: 'Revenue Sharing',
      description: 'Fair distribution of advertising revenue among screen owners, operators, and platform.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: UserGroupIcon,
      title: 'Community Rewards',
      description: 'Incentive system for active participation and contribution to the ecosystem.',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: ArrowTrendingUpIcon,
      title: 'Value Growth',
      description: 'Sustainable economic model designed for long-term value appreciation.',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold gradient-text mb-4"
        >
          Token Economics
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400"
        >
          A sustainable economic model that aligns the interests of all participants
        </motion.p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-gray-800/50 border border-purple-500/10 hover:border-purple-500/20 transition-colors"
          >
            <div className={`w-12 h-12 rounded-xl ${metric.bgColor} flex items-center justify-center mb-4`}>
              <metric.icon className={`w-6 h-6 ${metric.color}`} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{metric.title}</h3>
            <p className="text-gray-400">{metric.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Token Distribution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 p-8 rounded-2xl bg-gray-800/50 border border-purple-500/10"
      >
        <h3 className="text-xl font-semibold text-white mb-6">Token Distribution</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">Community Rewards</span>
              <span className="text-white">40%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-[40%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">Platform Development</span>
              <span className="text-white">30%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-[30%] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">Team & Advisors</span>
              <span className="text-white">20%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-[20%] bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">Reserve</span>
              <span className="text-white">10%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-[10%] bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
