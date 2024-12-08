import PropTypes from 'prop-types';
import { 
  TagIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  ArrowsUpDownIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function NFTFilter({ filters, onFilterChange }) {
  const { status, location, priceRange, sortBy } = filters;

  return (
    <div className="relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl" />
      
      <div className="relative glass-effect rounded-2xl border border-purple-500/10 p-6">
        <div className="flex items-center space-x-2 mb-6">
          <AdjustmentsHorizontalIcon className="w-5 h-5 text-purple-400" />
          <h3 className="text-lg font-semibold text-white">筛选条件</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 状态筛选 */}
          <div className="space-y-2">
            <label className="flex items-center text-sm text-gray-400">
              <TagIcon className="w-4 h-4 mr-1" />
              状态
            </label>
            <div className="relative">
              <select
                value={status}
                onChange={(e) => onFilterChange('status', e.target.value)}
                className="w-full bg-gray-800/50 border border-purple-500/20 rounded-xl px-4 py-2.5 text-white appearance-none focus:outline-none focus:border-purple-500/50 transition-colors"
              >
                <option value="all">全部</option>
                <option value="onSale">在售</option>
                <option value="locked">已锁定</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <motion.div
                  animate={{ rotate: status === 'all' ? 0 : 180 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowsUpDownIcon className="w-4 h-4 text-gray-400" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* 地区筛选 */}
          <div className="space-y-2">
            <label className="flex items-center text-sm text-gray-400">
              <MapPinIcon className="w-4 h-4 mr-1" />
              地区
            </label>
            <div className="relative">
              <select
                value={location}
                onChange={(e) => onFilterChange('location', e.target.value)}
                className="w-full bg-gray-800/50 border border-purple-500/20 rounded-xl px-4 py-2.5 text-white appearance-none focus:outline-none focus:border-purple-500/50 transition-colors"
              >
                <option value="all">全部地区</option>
                <option value="beijing">北京</option>
                <option value="shanghai">上海</option>
                <option value="guangzhou">广州</option>
                <option value="shenzhen">深圳</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <motion.div
                  animate={{ rotate: location === 'all' ? 0 : 180 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowsUpDownIcon className="w-4 h-4 text-gray-400" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* 价格区间 */}
          <div className="space-y-2">
            <label className="flex items-center text-sm text-gray-400">
              <CurrencyDollarIcon className="w-4 h-4 mr-1" />
              价格区间
            </label>
            <div className="relative">
              <select
                value={priceRange}
                onChange={(e) => onFilterChange('priceRange', e.target.value)}
                className="w-full bg-gray-800/50 border border-purple-500/20 rounded-xl px-4 py-2.5 text-white appearance-none focus:outline-none focus:border-purple-500/50 transition-colors"
              >
                <option value="all">全部价格</option>
                <option value="0-1000">0-1000</option>
                <option value="1000-5000">1000-5000</option>
                <option value="5000-10000">5000-10000</option>
                <option value="10000+">10000以上</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <motion.div
                  animate={{ rotate: priceRange === 'all' ? 0 : 180 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowsUpDownIcon className="w-4 h-4 text-gray-400" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* 排序方式 */}
          <div className="space-y-2">
            <label className="flex items-center text-sm text-gray-400">
              <ArrowsUpDownIcon className="w-4 h-4 mr-1" />
              排序方式
            </label>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => onFilterChange('sortBy', e.target.value)}
                className="w-full bg-gray-800/50 border border-purple-500/20 rounded-xl px-4 py-2.5 text-white appearance-none focus:outline-none focus:border-purple-500/50 transition-colors"
              >
                <option value="latest">最新上架</option>
                <option value="priceAsc">价格从低到高</option>
                <option value="priceDesc">价格从高到低</option>
                <option value="yieldDesc">收益率从高到低</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <motion.div
                  animate={{ rotate: sortBy === 'latest' ? 0 : 180 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowsUpDownIcon className="w-4 h-4 text-gray-400" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* 快速筛选标签 */}
        <div className="flex flex-wrap gap-2 mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-purple-500/20 hover:border-purple-500/30 transition-colors"
          >
            高收益
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/30 transition-colors"
          >
            短锁定期
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500/20 hover:border-green-500/30 transition-colors"
          >
            热门地区
          </motion.button>
        </div>
      </div>
    </div>
  );
}

NFTFilter.propTypes = {
  filters: PropTypes.shape({
    status: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    priceRange: PropTypes.string.isRequired,
    sortBy: PropTypes.string.isRequired
  }).isRequired,
  onFilterChange: PropTypes.func.isRequired
};
