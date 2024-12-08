import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  UsersIcon,
  TvIcon,
  MegaphoneIcon,
  CommandLineIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      path: '/management/user',
      icon: UsersIcon,
      label: 'User Management',
      description: 'Manage platform users'
    },
    {
      path: '/management/device',
      icon: TvIcon,
      label: 'Device Management',
      description: 'Manage LED screens'
    },
    {
      path: '/management/advertiser',
      icon: MegaphoneIcon,
      label: 'Advertiser Management',
      description: 'Manage advertisers'
    },
    {
      path: '/management/developer',
      icon: CommandLineIcon,
      label: 'Developer Management',
      description: 'Manage developers'
    },
    {
      path: '/management/reviewer',
      icon: ShieldCheckIcon,
      label: 'Reviewer Management',
      description: 'Manage content reviewers'
    }
  ];

  return (
    <div className="w-64 min-h-[calc(100vh-4rem)] bg-gray-900/50 border-r border-purple-500/10 p-4">
      <div className="space-y-2">
        {menuItems.map(item => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className="block"
            >
              <div className={`relative p-3 rounded-xl transition-colors ${
                isActive 
                  ? 'bg-purple-500/10 text-white' 
                  : 'hover:bg-purple-500/5 text-gray-400 hover:text-white'
              }`}>
                <div className="flex items-center space-x-3">
                  <Icon className="w-6 h-6" />
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>

                {isActive && (
                  <motion.div
                    layoutId="sidebar-indicator"
                    className="absolute inset-0 rounded-xl border border-purple-500/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
