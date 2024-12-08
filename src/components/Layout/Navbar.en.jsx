import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BellIcon, UserIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <nav className="h-16 border-b border-purple-500/10 bg-gray-900/50 backdrop-blur-xl fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
            W
          </div>
          <span className="text-xl font-bold gradient-text">WorldADS</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-400 hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors">
            Dashboard
          </Link>
          <Link to="/nft-market" className="text-gray-400 hover:text-white transition-colors">
            NFT Market
          </Link>
          <Link to="/management" className="text-gray-400 hover:text-white transition-colors">
            Management
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Language Switch */}
          <a 
            href="./index.html" 
            className="px-3 py-1.5 rounded-lg border border-purple-500/20 text-purple-400 hover:bg-purple-500/10 transition-colors"
          >
            中文
          </a>

          {/* Notifications */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 rounded-lg hover:bg-gray-800 transition-colors group"
          >
            <BellIcon className="w-6 h-6 text-gray-400 group-hover:text-white" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-purple-500" />
          </motion.button>

          {/* User Menu */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800 transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <UserIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-gray-400 group-hover:text-white">0x1234...5678</span>
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
