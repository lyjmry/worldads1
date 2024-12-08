import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  MegaphoneIcon,
  UserPlusIcon,
  ArrowPathIcon,
  FunnelIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import CreateAdModal from './components/CreateAdModal';
import AdDetailModal from './components/AdDetailModal';

export default function AdvertiserManagement() {
  const [advertisers, setAdvertisers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAdvertiser, setSelectedAdvertiser] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: 'all',
    type: 'all',
    sortBy: 'newest'
  });

  // Mock data
  const mockAdvertisers = [
    {
      id: 1,
      name: 'Tech Corp',
      type: 'Enterprise',
      status: 'Active',
      budget: '100,000 WAD',
      campaigns: 12,
      activeAds: 8,
      totalSpent: '45,000 WAD',
      performance: '98.5%',
      joinDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'Fashion Brand',
      type: 'Business',
      status: 'Active',
      budget: '50,000 WAD',
      campaigns: 8,
      activeAds: 5,
      totalSpent: '28,000 WAD',
      performance: '96.2%',
      joinDate: '2024-01-14'
    },
    {
      id: 3,
      name: 'Local Shop',
      type: 'Small Business',
      status: 'Inactive',
      budget: '10,000 WAD',
      campaigns: 3,
      activeAds: 0,
      totalSpent: '8,500 WAD',
      performance: '92.8%',
      joinDate: '2024-01-13'
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchAdvertisers = async () => {
      try {
        setLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setAdvertisers(mockAdvertisers);
      } catch (error) {
        console.error('Error fetching advertisers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAdvertisers();
  }, []);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleAdvertiserClick = (advertiser) => {
    setSelectedAdvertiser(advertiser);
    setIsDetailModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold gradient-text">Advertiser Management</h1>
          <p className="text-gray-400 mt-1">Manage and monitor platform advertisers</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsCreateModalOpen(true)}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg flex items-center space-x-2 hover:bg-purple-600 transition-colors"
        >
          <UserPlusIcon className="w-5 h-5" />
          <span>Add Advertiser</span>
        </motion.button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 rounded-xl bg-gray-800/50 border border-purple-500/10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <MegaphoneIcon className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-xs text-purple-400">Total</span>
          </div>
          <p className="text-2xl font-bold text-white">12.5K</p>
          <p className="text-sm text-gray-400 mt-1">Total Advertisers</p>
        </div>

        <div className="p-6 rounded-xl bg-gray-800/50 border border-purple-500/10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <ChartBarIcon className="w-6 h-6 text-green-400" />
            </div>
            <span className="text-xs text-green-400">Active</span>
          </div>
          <p className="text-2xl font-bold text-white">8.9K</p>
          <p className="text-sm text-gray-400 mt-1">Active Advertisers</p>
        </div>

        <div className="p-6 rounded-xl bg-gray-800/50 border border-purple-500/10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <CurrencyDollarIcon className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-xs text-blue-400">Revenue</span>
          </div>
          <p className="text-2xl font-bold text-white">1.2M WAD</p>
          <p className="text-sm text-gray-400 mt-1">Monthly Revenue</p>
        </div>

        <div className="p-6 rounded-xl bg-gray-800/50 border border-purple-500/10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <ClockIcon className="w-6 h-6 text-red-400" />
            </div>
            <span className="text-xs text-red-400">Avg. Duration</span>
          </div>
          <p className="text-2xl font-bold text-white">8.5 mo</p>
          <p className="text-sm text-gray-400 mt-1">Avg. Retention</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4 py-4">
        <div className="flex items-center space-x-2">
          <FunnelIcon className="w-5 h-5 text-gray-400" />
          <span className="text-gray-400">Filters:</span>
        </div>

        <select
          value={filters.status}
          onChange={(e) => handleFilterChange('status', e.target.value)}
          className="px-3 py-1.5 bg-gray-800/50 border border-purple-500/10 rounded-lg text-white focus:outline-none focus:border-purple-500/30"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <select
          value={filters.type}
          onChange={(e) => handleFilterChange('type', e.target.value)}
          className="px-3 py-1.5 bg-gray-800/50 border border-purple-500/10 rounded-lg text-white focus:outline-none focus:border-purple-500/30"
        >
          <option value="all">All Types</option>
          <option value="enterprise">Enterprise</option>
          <option value="business">Business</option>
          <option value="small">Small Business</option>
        </select>

        <select
          value={filters.sortBy}
          onChange={(e) => handleFilterChange('sortBy', e.target.value)}
          className="px-3 py-1.5 bg-gray-800/50 border border-purple-500/10 rounded-lg text-white focus:outline-none focus:border-purple-500/30"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="budget">Budget</option>
          <option value="performance">Performance</option>
        </select>

        <button
          onClick={() => setFilters({ status: 'all', type: 'all', sortBy: 'newest' })}
          className="px-3 py-1.5 text-purple-400 hover:text-purple-300 transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Advertiser List */}
      {loading ? (
        <div className="text-center py-12">
          <ArrowPathIcon className="w-8 h-8 text-purple-400 animate-spin mx-auto" />
          <p className="text-gray-400 mt-2">Loading advertisers...</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Advertiser</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Type</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Status</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Budget</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Campaigns</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Active Ads</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Performance</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {advertisers.map(advertiser => (
                <tr 
                  key={advertiser.id} 
                  className="border-b border-gray-800/50 hover:bg-gray-800/30 cursor-pointer"
                  onClick={() => handleAdvertiserClick(advertiser)}
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-medium">
                        {advertiser.name.charAt(0)}
                      </div>
                      <span className="text-white">{advertiser.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      {advertiser.type}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      advertiser.status === 'Active'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {advertiser.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-400">{advertiser.budget}</td>
                  <td className="py-4 px-4 text-gray-400">{advertiser.campaigns}</td>
                  <td className="py-4 px-4 text-gray-400">{advertiser.activeAds}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                          style={{ width: advertiser.performance }}
                        />
                      </div>
                      <span className="text-sm text-gray-400">{advertiser.performance}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors group">
                      <ChevronDownIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Create Ad Modal */}
      <CreateAdModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />

      {/* Ad Detail Modal */}
      <AdDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        advertiser={selectedAdvertiser}
      />
    </div>
  );
}
