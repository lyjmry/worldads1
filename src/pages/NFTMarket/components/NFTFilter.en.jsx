import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { 
  AdjustmentsHorizontalIcon,
  ArrowsUpDownIcon,
  MapPinIcon,
  TagIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

export default function NFTFilter({ filters, onFilterChange }) {
  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'onSale', label: 'On Sale' },
    { value: 'locked', label: 'Locked' }
  ];

  const locationOptions = [
    { value: 'all', label: 'All Locations' },
    { value: 'beijing', label: 'Beijing' },
    { value: 'shanghai', label: 'Shanghai' },
    { value: 'guangzhou', label: 'Guangzhou' },
    { value: 'shenzhen', label: 'Shenzhen' }
  ];

  const priceRangeOptions = [
    { value: 'all', label: 'All Prices' },
    { value: '0-1000', label: '0-1,000 TOKEN' },
    { value: '1000-5000', label: '1,000-5,000 TOKEN' },
    { value: '5000-10000', label: '5,000-10,000 TOKEN' },
    { value: '10000', label: '10,000+ TOKEN' }
  ];

  const sortOptions = [
    { value: 'latest', label: 'Latest' },
    { value: 'priceAsc', label: 'Price: Low to High' },
    { value: 'priceDesc', label: 'Price: High to Low' },
    { value: 'yieldDesc', label: 'Highest Yield' }
  ];

  return (
    <div className="space-y-4">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <AdjustmentsHorizontalIcon className="w-5 h-5 text-purple-400" />
          <h3 className="text-lg font-semibold text-white">Filters</h3>
        </div>
        <button
          onClick={() => {
            onFilterChange('status', 'all');
            onFilterChange('location', 'all');
            onFilterChange('priceRange', 'all');
            onFilterChange('sortBy', 'latest');
          }}
          className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
        >
          Reset All
        </button>
      </div>

      {/* Filter Options */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Status Filter */}
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <TagIcon className="w-5 h-5 text-gray-400" />
          </div>
          <select
            value={filters.status}
            onChange={(e) => onFilterChange('status', e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-purple-500/10 rounded-lg text-white focus:outline-none focus:border-purple-500/30 transition-colors appearance-none"
          >
            {statusOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        {/* Location Filter */}
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <MapPinIcon className="w-5 h-5 text-gray-400" />
          </div>
          <select
            value={filters.location}
            onChange={(e) => onFilterChange('location', e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-purple-500/10 rounded-lg text-white focus:outline-none focus:border-purple-500/30 transition-colors appearance-none"
          >
            {locationOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <CurrencyDollarIcon className="w-5 h-5 text-gray-400" />
          </div>
          <select
            value={filters.priceRange}
            onChange={(e) => onFilterChange('priceRange', e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-purple-500/10 rounded-lg text-white focus:outline-none focus:border-purple-500/30 transition-colors appearance-none"
          >
            {priceRangeOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        {/* Sort Options */}
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <ArrowsUpDownIcon className="w-5 h-5 text-gray-400" />
          </div>
          <select
            value={filters.sortBy}
            onChange={(e) => onFilterChange('sortBy', e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-purple-500/10 rounded-lg text-white focus:outline-none focus:border-purple-500/30 transition-colors appearance-none"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Active Filters */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(filters).map(([key, value]) => {
          if (value === 'all' || key === 'page' || key === 'limit') return null;
          
          let label = '';
          if (key === 'status') {
            label = statusOptions.find(opt => opt.value === value)?.label;
          } else if (key === 'location') {
            label = locationOptions.find(opt => opt.value === value)?.label;
          } else if (key === 'priceRange') {
            label = priceRangeOptions.find(opt => opt.value === value)?.label;
          } else if (key === 'sortBy') {
            label = sortOptions.find(opt => opt.value === value)?.label;
          }

          if (!label) return null;

          return (
            <motion.span
              key={key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-400 flex items-center space-x-1"
            >
              <span>{label}</span>
              <button
                onClick={() => onFilterChange(key, 'all')}
                className="ml-2 hover:text-white transition-colors"
              >
                ×
              </button>
            </motion.span>
          );
        })}
      </div>
    </div>
  );
}

NFTFilter.propTypes = {
  filters: PropTypes.shape({
    status: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    priceRange: PropTypes.string.isRequired,
    sortBy: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired
  }).isRequired,
  onFilterChange: PropTypes.func.isRequired
};
