import { motion } from 'framer-motion';
import {
  UserGroupIcon,
  DeviceTabletIcon,
  CodeBracketIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const roles = [
  {
    icon: UserGroupIcon,
    title: '个人用户',
    description: '通过WorldID认证后，每天观看和互动获得token奖励',
    color: 'purple'
  },
  {
    icon: DeviceTabletIcon,
    title: '设备拥有者',
    description: '投资广告屏NFT，获得设备未来的广告收益',
    color: 'pink'
  },
  {
    icon: CodeBracketIcon,
    title: '小程序开发者',
    description: '接入广告协议，为用户展示广告获得收益分成',
    color: 'blue'
  },
  {
    icon: BuildingOfficeIcon,
    title: '广告主',
    description: '通过去中心化方式自定义投放广告，数据公开透明',
    color: 'green'
  },
  {
    icon: ShieldCheckIcon,
    title: '内容审核官',
    description: '审核内容是否符合投放地区的法律法规要求，并且通过贡献审核支持获得平台奖励',
    color: 'orange'
  }
  
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Roles() {
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
            <span className="text-gradient">角色介绍</span>
          </h2>
          <p className="text-xl text-gray-400">
            多方参与，共建去中心化广告生态
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {roles.map((role, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative p-8 rounded-2xl border border-purple-500/10 backdrop-blur-xl">
                <div className={`w-12 h-12 rounded-xl bg-${role.color}-500/10 border border-${role.color}-500/20 flex items-center justify-center mb-6`}>
                  <role.icon className={`w-6 h-6 text-${role.color}-400`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                  {role.title}
                </h3>
                <p className="text-gray-400">
                  {role.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
