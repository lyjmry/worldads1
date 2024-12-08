import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  CommandLineIcon,
  UserPlusIcon,
  ArrowPathIcon,
  FunnelIcon,
  ChevronDownIcon,
  CodeBracketIcon,
  CubeIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline';
import CreateMiniappModal from './components/CreateMiniappModal';

export default function DeveloperManagement() {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: 'all',
    level: 'all',
    sortBy: 'newest'
  });

  // Mock data
  const mockDevelopers = [
    {
      id: 1,
      name: 'Alex Johnson',
      level: 'Senior',
      status: 'Active',
      apps: 8,
      activeApps: 6,
      totalRevenue: '45,000 WAD',
      performance: '98.5%',
      joinDate: '2024-01-15',
      skills: ['React', 'Node.js', 'Web3']
    },
    {
      id: 2,
      name: 'Sarah Chen',
      level: 'Advanced',
      status: 'Active',
      apps: 5,
      activeApps: 4,
      totalRevenue: '32,000 WAD',
      performance: '96.2%',
      joinDate: '2024-01-14',
      skills: ['Vue.js', 'Python', 'Blockchain']
    },
    {
      id: 3,
      name: 'Mike Wilson',
      level: 'Intermediate',
      status: 'Inactive',
      apps: 3,
      activeApps: 0,
      totalRevenue: '12,000 WAD',
      performance: '92.8%',
      joinDate: '2024-01-13',
      skills: ['JavaScript', 'React Native']
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchDevelopers = async () => {
      try {
        setLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setDevelopers(mockDevelopers);
      } catch (error) {
        console.error('Error fetching developers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDevelopers();
  }, []);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold gradient-text">Developer Management</h1>
          <p className="text-gray-400 mt-1">Manage and monitor platform developers</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsCreateModalOpen(true)}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg flex items-center space-x-2 hover:bg-purple-600 transition-colors"
        >
          <UserPlusIcon className="w-5 h-5" />
          <span>Add Developer</span>
        </motion.button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 rounded-xl bg-gray-800/50 border border-purple-500/10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <CommandLineIcon className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-xs text-purple-400">Total</span>
          </div>
          <p className="text-2xl font-bold text-white">1,256</p>
          <p className="text-sm text-gray-400 mt-1">Total Developers</p>
        </div>

        <div className="p-6 rounded-xl bg-gray-800/50 border border-purple-500/10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <CodeBracketIcon className="w-6 h-6 text-green-400" />
            </div>
            <span className="text-xs text-green-400">Active</span>
          </div>
          <p className="text-2xl font-bold text-white">892</p>
          <p className="text-sm text-gray-400 mt-1">Active Developers</p>
        </div>

        <div className="p-6 rounded-xl bg-gray-800/50 border border-purple-500/10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <CubeIcon className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-xs text-blue-400">Apps</span>
          </div>
          <p className="text-2xl font-bold text-white">3.2K</p>
          <p className="text-sm text-gray-400 mt-1">Total Mini Apps</p>
        </div>

        <div className="p-6 rounded-xl bg-gray-800/50 border border-purple-500/10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <CircleStackIcon className="w-6 h-6 text-red-400" />
            </div>
            <span className="text-xs text-red-400">Revenue</span>
          </div>
          <p className="text-2xl font-bold text-white">890K WAD</p>
          <p className="text-sm text-gray-400 mt-1">Total Revenue</p>
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
          <option value="apps">Most Apps</option>
          <option value="revenue">Highest Revenue</option>
        </select>

        <button
          onClick={() => setFilters({ status: 'all', level: 'all', sortBy: 'newest' })}
          className="px-3 py-1.5 text-purple-400 hover:text-purple-300 transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Developer List */}
      {loading ? (
        <div className="text-center py-12">
          <ArrowPathIcon className="w-8 h-8 text-purple-400 animate-spin mx-auto" />
          <p className="text-gray-400 mt-2">Loading developers...</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Developer</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Level</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Status</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Apps</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Active Apps</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Revenue</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Performance</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Skills</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {developers.map(developer => (
                <tr key={developer.id} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-medium">
                        {developer.name.charAt(0)}
                      </div>
                      <span className="text-white">{developer.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      {developer.level}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      developer.status === 'Active'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {developer.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-400">{developer.apps}</td>
                  <td className="py-4 px-4 text-gray-400">{developer.activeApps}</td>
                  <td className="py-4 px-4 text-gray-400">{developer.totalRevenue}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                          style={{ width: developer.performance }}
                        />
                      </div>
                      <span className="text-sm text-gray-400">{developer.performance}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-1">
                      {developer.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        >
                          {skill}
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

      {/* Create Mini App Modal */}
      <CreateMiniappModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </div>
  );
}
