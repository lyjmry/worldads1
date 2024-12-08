import { motion } from 'framer-motion';
import {
  CurrencyDollarIcon,
  ChartBarIcon,
  UserGroupIcon,
  DeviceTabletIcon,
  BuildingOfficeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const tokenomics = [
  {
    title: '开发者团队',
    percentage: 5,
    color: 'purple',
    icon: ChartBarIcon
  },
  {
    title: '基金会',
    percentage: 10,
    color: 'pink',
    icon: BuildingOfficeIcon
  },
  {
    title: '社区生态',
    percentage: 3,
    color: 'blue',
    icon: UserGroupIcon
  },
  {
    title: '早期投资者',
    percentage: 12,
    color: 'green',
    icon: CurrencyDollarIcon
  },
  {
    title: '个人用户',
    percentage: 30,
    color: 'orange',
    icon: UserGroupIcon
  },
  {
    title: '终端设备',
    percentage: 40,
    color: 'cyan',
    icon: DeviceTabletIcon
  }
];

export default function Economics() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-pink-500/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">经济模型</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            总量：26亿 · 线性释放 · 13年解锁期
          </p>
          
          {/* 释放规则说明 */}
          <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-gray-800/50 border border-purple-500/10 backdrop-blur-xl">
            <div className="flex items-center justify-center mb-4">
              <ClockIcon className="w-6 h-6 text-purple-400 mr-2" />
              <h3 className="text-lg font-semibold text-white">释放规则</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              每天线性释放固定数量的代币，所有参与者按比例获得。
              除社区生态部分外，其他参与者遵循相同的释放规则，确保利益一致性。
              新用户注册可获得10枚代币作为加入奖励（需要WorldID认证,由社区奖励部分补贴）。
              用户部分：通过观看每天最大获得5枚WADS,先到先得，每天分三个时区刷新。
              设备拥有者：每个瓜分40%的产出，除了基础奖励之外还会获得广告主投发的额外奖励。
            </p>
          </div>
        </motion.div>

        {/* 分配比例展示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tokenomics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative p-6 rounded-2xl border border-purple-500/10 backdrop-blur-xl">
                <div className={`w-12 h-12 rounded-xl bg-${item.color}-500/10 border border-${item.color}-500/20 flex items-center justify-center mb-4`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                  {item.title}
                </h3>
                <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className={`absolute h-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-400 rounded-full`}
                  />
                </div>
                <p className="text-2xl font-bold text-white">
                  {item.percentage}%
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 经济闭环说明 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 p-8 rounded-2xl bg-gray-800/50 border border-purple-500/10 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-semibold text-white mb-4 text-center">经济闭环</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <CurrencyDollarIcon className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">广告收入</h4>
              <p className="text-gray-400 text-sm">广告主支付的费用进入生态系统</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mx-auto mb-4">
                <ChartBarIcon className="w-8 h-8 text-pink-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">收益分配</h4>
              <p className="text-gray-400 text-sm">按比例分配给各参与方</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <DeviceTabletIcon className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">代币销毁</h4>
              <p className="text-gray-400 text-sm">广告10%销毁</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
