import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  UserPlusIcon,
  ArrowPathIcon,
  FunnelIcon,
  ChevronDownIcon,
  ClockIcon,
  DocumentCheckIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import ReviewDetailModal from './components/ReviewDetailModal';

export default function ReviewerManagement() {
  const [reviewers, setReviewers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedReviewer, setSelectedReviewer] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: 'all',
    level: 'all',
    sortBy: 'newest'
  });

  // Mock data
  const mockReviewers = [
    {
      id: 1,
      name: 'David Miller',
      level: 'Senior',
      status: 'Active',
      totalReviews: 1256,
      pendingReviews: 5,
      accuracy: '98.5%',
      avgResponseTime: '2.5h',
      joinDate: '2024-01-15',
      specialties: ['Ad Content', 'App Review', 'User Reports']
    },
    {
      id: 2,
      name: 'Lisa Wang',
      level: 'Advanced',
      status: 'Active',
      totalReviews: 856,
      pendingReviews: 3,
      accuracy: '97.2%',
      avgResponseTime: '1.8h',
      joinDate: '2024-01-14',
      specialties: ['Ad Content', 'Community Guidelines']
    },
    {
      id: 3,
      name: 'James Wilson',
      level: 'Intermediate',
      status: 'Inactive',
      totalReviews: 432,
      pendingReviews: 0,
      accuracy: '95.8%',
      avgResponseTime: '3.2h',
      joinDate: '2024-01-13',
      specialties: ['User Reports', 'Content Moderation']
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchReviewers = async () => {
      try {
        setLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setReviewers(mockReviewers);
      } catch (error) {
        console.error('Error fetching reviewers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviewers();
  }, []);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleReviewerClick = (reviewer) => {
    setSelectedReviewer(reviewer);
    setIsDetailModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold gradient-text">Reviewer Management</h1>
          <p className="text-gray-400 mt-1">Manage and monitor content reviewers</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg flex items-center space-x-2 hover:bg-purple-600 transition-colors"
        >
          <UserPlusIcon className="w-5 h-5" />
          <span>Add Reviewer</span>
        </motion.button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 rounded-xl bg-gray-800/50 border border-purple-500/10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <ShieldCheckIcon className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-xs text-purple-400">Total</span>
          </div>
          <p className="text-2xl font-bold text-white">156</p>
          <p className="text-sm text-gray-400 mt-1">Total Reviewers</p>
        </div>

        <div className="p-6 rounded-xl bg-gray-800/50 border border-purple-500/10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <DocumentCheckIcon className="w-6 h-6 text-green-400" />
            </div>
            <span className="text-xs text-green-400">Active</span>
          </div>
          <p className="text-2xl font-bold text-white">132</p>
          <p className="text-sm text-gray-400 mt-1">Active Reviewers</p>
        </div>

        <div className="p-6 rounded-xl bg-gray-800/50 border border-purple-500/10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <ClockIcon className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-xs text-blue-400">Response</span>
          </div>
          <p className="text-2xl font-bold text-white">2.5h</p>
          <p className="text-sm text-gray-400 mt-1">Avg Response Time</p>
        </div>

        <div className="p-6 rounded-xl bg-gray-800/50 border border-purple-500/10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <StarIcon className="w-6 h-6 text-red-400" />
            </div>
            <span className="text-xs text-red-400">Accuracy</span>
          </div>
          <p className="text-2xl font-bold text-white">97.8%</p>
          <p className="text-sm text-gray-400 mt-1">Avg Accuracy</p>
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
          value={filters.level}
          onChange={(e) => handleFilterChange('level', e.target.value)}
          className="px-3 py-1.5 bg-gray-800/50 border border-purple-500/10 rounded-lg text-white focus:outline-none focus:border-purple-500/30"
        >
          <option value="all">All Levels</option>
          <option value="senior">Senior</option>
          <option value="advanced">Advanced</option>
          <option value="intermediate">Intermediate</option>
        </select>

        <select
          value={filters.sortBy}
          onChange={(e) => handleFilterChange('sortBy', e.target.value)}
          className="px-3 py-1.5 bg-gray-800/50 border border-purple-500/10 rounded-lg text-white focus:outline-none focus:border-purple-500/30"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="accuracy">Highest Accuracy</option>
          <option value="reviews">Most Reviews</option>
        </select>

        <button
          onClick={() => setFilters({ status: 'all', level: 'all', sortBy: 'newest' })}
          className="px-3 py-1.5 text-purple-400 hover:text-purple-300 transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Reviewer List */}
      {loading ? (
        <div className="text-center py-12">
          <ArrowPathIcon className="w-8 h-8 text-purple-400 animate-spin mx-auto" />
          <p className="text-gray-400 mt-2">Loading reviewers...</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Reviewer</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Level</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Status</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Total Reviews</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Pending</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Accuracy</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Response Time</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Specialties</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviewers.map(reviewer => (
                <tr 
                  key={reviewer.id} 
                  className="border-b border-gray-800/50 hover:bg-gray-800/30 cursor-pointer"
                  onClick={() => handleReviewerClick(reviewer)}
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-medium">
                        {reviewer.name.charAt(0)}
                      </div>
                      <span className="text-white">{reviewer.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      {reviewer.level}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      reviewer.status === 'Active'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {reviewer.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-400">{reviewer.totalReviews}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      reviewer.pendingReviews > 0
                        ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                        : 'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                    }`}>
                      {reviewer.pendingReviews}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                          style={{ width: reviewer.accuracy }}
                        />
                      </div>
                      <span className="text-sm text-gray-400">{reviewer.accuracy}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-400">{reviewer.avgResponseTime}</td>
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-1">
                      {reviewer.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        >
                          {specialty}
                        </span>
                      ))}
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

      {/* Review Detail Modal */}
      <ReviewDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        reviewer={selectedReviewer}
      />
    </div>
  );
}
