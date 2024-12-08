import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  UsersIcon,
  UserPlusIcon,
  ArrowPathIcon,
  FunnelIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    role: 'all',
    status: 'all',
    sortBy: 'newest'
  });

  // Mock data
  const mockUsers = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      role: 'Advertiser',
      status: 'Active',
      joinDate: '2024-01-15',
      lastActive: '2024-01-20'
    },
    {
      id: 2,
      name: 'Emma Wilson',
      email: 'emma.wilson@example.com',
      role: 'Developer',
      status: 'Active',
      joinDate: '2024-01-14',
      lastActive: '2024-01-19'
    },
    {
      id: 3,
      name: 'Michael Brown',
      email: 'michael.brown@example.com',
      role: 'Reviewer',
      status: 'Inactive',
      joinDate: '2024-01-13',
      lastActive: '2024-01-18'
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchUsers = async () => {
      try {
        setLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setUsers(mockUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
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
          <h1 className="text-2xl font-bold gradient-text">User Management</h1>
          <p className="text-gray-400 mt-1">Manage and monitor platform users</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg flex items-center space-x-2 hover:bg-purple-600 transition-colors"
        >
          <UserPlusIcon className="w-5 h-5" />
          <span>Add User</span>
        </motion.button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 rounded-xl bg-gray-800/50 border border-purple-500/10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <UsersIcon className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-xs text-purple-400">Total</span>
          </div>
          <p className="text-2xl font-bold text-white">1,234</p>
          <p className="text-sm text-gray-400 mt-1">Total Users</p>
        </div>

        <div className="p-6 rounded-xl bg-gray-800/50 border border-purple-500/10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <UsersIcon className="w-6 h-6 text-green-400" />
            </div>
            <span className="text-xs text-green-400">Active</span>
          </div>
          <p className="text-2xl font-bold text-white">956</p>
          <p className="text-sm text-gray-400 mt-1">Active Users</p>
        </div>

        <div className="p-6 rounded-xl bg-gray-800/50 border border-purple-500/10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <UsersIcon className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-xs text-blue-400">New</span>
          </div>
          <p className="text-2xl font-bold text-white">123</p>
          <p className="text-sm text-gray-400 mt-1">New Users (30d)</p>
        </div>

        <div className="p-6 rounded-xl bg-gray-800/50 border border-purple-500/10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <UsersIcon className="w-6 h-6 text-red-400" />
            </div>
            <span className="text-xs text-red-400">Inactive</span>
          </div>
          <p className="text-2xl font-bold text-white">278</p>
          <p className="text-sm text-gray-400 mt-1">Inactive Users</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4 py-4">
        <div className="flex items-center space-x-2">
          <FunnelIcon className="w-5 h-5 text-gray-400" />
          <span className="text-gray-400">Filters:</span>
        </div>

        <select
          value={filters.role}
          onChange={(e) => handleFilterChange('role', e.target.value)}
          className="px-3 py-1.5 bg-gray-800/50 border border-purple-500/10 rounded-lg text-white focus:outline-none focus:border-purple-500/30"
        >
          <option value="all">All Roles</option>
          <option value="advertiser">Advertiser</option>
          <option value="developer">Developer</option>
          <option value="reviewer">Reviewer</option>
        </select>

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
          value={filters.sortBy}
          onChange={(e) => handleFilterChange('sortBy', e.target.value)}
          className="px-3 py-1.5 bg-gray-800/50 border border-purple-500/10 rounded-lg text-white focus:outline-none focus:border-purple-500/30"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="name">Name</option>
        </select>

        <button
          onClick={() => setFilters({ role: 'all', status: 'all', sortBy: 'newest' })}
          className="px-3 py-1.5 text-purple-400 hover:text-purple-300 transition-colors"
        >
          Reset
        </button>
      </div>

      {/* User List */}
      {loading ? (
        <div className="text-center py-12">
          <ArrowPathIcon className="w-8 h-8 text-purple-400 animate-spin mx-auto" />
          <p className="text-gray-400 mt-2">Loading users...</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Name</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Email</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Role</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Status</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Join Date</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Last Active</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-medium">
                        {user.name.charAt(0)}
                      </div>
                      <span className="text-white">{user.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-400">{user.email}</td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Active'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-400">{user.joinDate}</td>
                  <td className="py-4 px-4 text-gray-400">{user.lastActive}</td>
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
    </div>
  );
}
