import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  UserIcon,
  DeviceTabletIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const menuItems = [
  {
    name: '数据看板',
    path: '/dashboard',
    icon: ChartBarIcon,
    description: '查看平台整体数据',
    color: 'purple'
  },
  {
    name: '个人空间',
    path: '/management/user',
    icon: UserIcon,
    description: '管理您的个人信息和奖励记录',
    color: 'pink'
  },
  {
    name: '我的设备',
    path: '/management/device',
    icon: DeviceTabletIcon,
    description: '管理您的广告屏设备和收益',
    color: 'blue'
  },
  {
    name: '广告投放',
    path: '/management/advertiser',
    icon: BuildingOfficeIcon,
    description: '管理您的广告活动和预算',
    color: 'green'
  },
  {
    name: 'World小程序',
    path: '/management/developer',
    icon: CodeBracketIcon,
    description: '管理您的小程序广告接入和收益',
    color: 'orange'
  },
  {
    name: '内容审核',
    path: '/management/reviewer',
    icon: ShieldCheckIcon,
    description: '参与社区治理，审核广告内容',
    color: 'cyan'
  }
];

export default function Sidebar() {
  const location = useLocation();
  const isReviewerPage = location.pathname.includes('/reviewer');

  // 根据页面显示不同的用户角色
  const getUserRole = () => {
    if (isReviewerPage) {
      return (
        <div className="flex items-center mt-1">
          <div className="px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20">
            <div className="flex items-center space-x-1">
              <ShieldCheckIcon className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-xs font-medium text-purple-400">内容审核员</span>
            </div>
          </div>
          <div className="ml-2 px-2 py-0.5 rounded-md bg-green-500/10 border border-green-500/20">
            <span className="text-xs font-medium text-green-400">Level 3</span>
          </div>
        </div>
      );
    }
    return (
      <div className="mt-1 px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20">
        <span className="text-xs font-medium text-blue-400">已认证用户</span>
      </div>
    );
  };

  return (
    <div className="h-full bg-gray-900/50 backdrop-blur-xl border-r border-purple-500/10">
      {/* 用户信息 */}
      <div className="p-6 border-b border-purple-500/10">
        <div className="flex items-center space-x-3 mb-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-[1px]">
              <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  W
                </span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-gray-900" />
          </div>
          <div>
            <h3 className="text-white font-medium">WorldID已认证</h3>
            {getUserRole()}
          </div>
        </div>

        {/* 代币信息 */}
        <div className="grid grid-cols-2 gap-2">
          <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
            <div className="flex items-center mb-1">
              <CurrencyDollarIcon className="w-4 h-4 text-purple-400 mr-1" />
              <p className="text-sm text-gray-400">代币余额</p>
            </div>
            <p className="text-lg font-semibold text-white">1,234</p>
          </div>
          <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/20">
            <div className="flex items-center mb-1">
              <StarIcon className="w-4 h-4 text-pink-400 mr-1" />
              <p className="text-sm text-gray-400">贡献值</p>
            </div>
            <p className="text-lg font-semibold text-white">2,345</p>
          </div>
        </div>
      </div>

      {/* 导航菜单 */}
      <div className="py-6 px-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className="block relative"
            >
              <motion.div
                className={`p-4 rounded-xl transition-all duration-200 ${
                  isActive
                    ? `bg-${item.color}-500/10 border-${item.color}-500/50`
                    : 'hover:bg-gray-800/50 border-transparent'
                } border relative group`}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* 悬浮时的光晕效果 */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300" />
                
                <div className="relative">
                  <div className="flex items-center space-x-3 mb-2">
                    <item.icon className={`w-5 h-5 text-${item.color}-400`} />
                    <span className={`font-medium ${isActive ? 'text-white' : 'text-gray-300'}`}>
                      {item.name}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 ml-8">
                    {item.description}
                  </p>
                </div>

                {/* 活动指示器 */}
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active-indicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  >
                    <div className="w-full h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-r" />
                    <motion.div 
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-r blur-sm"
                      animate={{
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* 底部状态 */}
      <div className="p-4 border-t border-purple-500/10">
        <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">链上状态</span>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2" />
              <span className="text-sm text-green-400">已同步</span>
            </div>
          </div>
          <div className="text-xs text-gray-500">
            最新区块: #12345678
          </div>
        </div>
      </div>
    </div>
  );
}
