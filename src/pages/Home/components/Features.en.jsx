import { motion } from 'framer-motion';
import {
  CubeTransparentIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

export default function Features() {
  const features = [
    {
      icon: CubeTransparentIcon,
      title: 'Decentralized Infrastructure',
      description: 'Utilizing blockchain technology to ensure transparent and secure advertising asset management.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Coverage',
      description: 'LED advertising screens deployed in prime business districts worldwide.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure & Reliable',
      description: 'Multi-layer security system with real-time monitoring and automated content review.',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: ChartBarIcon,
      title: 'Data Analytics',
      description: 'Advanced analytics providing real-time insights into advertising performance.',
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
          Platform Features
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400"
        >
          Innovative solutions combining blockchain technology with real-world advertising assets
        </motion.p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-gray-800/50 border border-purple-500/10 hover:border-purple-500/20 transition-colors"
          >
            <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}>
              <feature.icon className={`w-6 h-6 ${feature.color}`} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
