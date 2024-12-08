import { motion } from 'framer-motion';
import {
  GlobeAltIcon,
  CircleStackIcon,
  BuildingOfficeIcon,
  SparklesIcon,
  CpuChipIcon,
  SignalIcon,
  CubeTransparentIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'World 3.0',
    description: '基于World ID的去中心化身份认证，确保每个用户都是真实且唯一的，打造真实可信的广告生态。',
    icon: GlobeAltIcon,
    items: [
      { icon: CubeTransparentIcon, text: '去中心化身份' },
      { icon: SignalIcon, text: '链上数据验证' },
      { icon: ChartBarIcon, text: '透明的信用系统' }
    ],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'DePIN',
    description: '去中心化物理基础设施网络，通过区块链技术连接和管理实体广告设备，实现资产通证化。',
    icon: CircleStackIcon,
    items: [
      { icon: BuildingOfficeIcon, text: '设备NFT化' },
      { icon: SignalIcon, text: '实时数据上链' },
      { icon: ChartBarIcon, text: '智能收益分配' }
    ],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'RWA',
    description: '实体资产上链，将现实世界的广告屏资源转化为链上资产，提供流动性和投资机会。',
    icon: BuildingOfficeIcon,
    items: [
      { icon: CircleStackIcon, text: '资产通证化' },
      { icon: ChartBarIcon, text: '收益透明化' },
      { icon: CubeTransparentIcon, text: '流动性提升' }
    ],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'AI 赋能',
    description: '利用人工智能技术优化广告投放、内容审核和用户匹配，提升广告效果和用户体验。',
    icon: SparklesIcon,
    items: [
    	 { icon: CpuChipIcon, text: '广告创意' },
      { icon: CpuChipIcon, text: '智能投放优化' },
      { icon: SparklesIcon, text: 'AI内容审核' }
      
    ],
    gradient: 'from-orange-500 to-yellow-500'
  }
];

export default function Features() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 to-transparent" />
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
            <span className="text-gradient">核心技术</span>
          </h2>
          <p className="text-xl text-gray-400">
            融合前沿科技，构建下一代广告生态系统
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative p-8 rounded-2xl border border-purple-500/10 backdrop-blur-xl">
                {/* 标题和图标 */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} p-[1px]`}>
                    <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                    {feature.title}
                  </h3>
                </div>

                {/* 描述 */}
                <p className="text-gray-400 mb-6">
                  {feature.description}
                </p>

                {/* 功能列表 */}
                <div className="grid grid-cols-3 gap-4">
                  {feature.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="p-3 rounded-xl bg-gray-800/50 border border-purple-500/10 flex flex-col items-center justify-center"
                    >
                      <item.icon className="w-5 h-5 text-purple-400 mb-2" />
                      <span className="text-sm text-gray-400 text-center">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
