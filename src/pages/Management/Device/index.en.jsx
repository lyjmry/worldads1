import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  TvIcon,
  PlusIcon,
  ArrowPathIcon,
  FunnelIcon,
  ChevronDownIcon,
  MapPinIcon,
  SignalIcon,
  BoltIcon
} from '@heroicons/react/24/outline';
import DeviceDetailModal from './components/DeviceDetailModal';

export default function DeviceManagement() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: 'all',
    location: 'all',
    type: 'all',
    sortBy: 'newest'
  });

  // Mock data
  const mockDevices = [
    {
      id: 1,
      name: 'LED-BJ-001',
      location: 'Beijing Sanlitun',
      type: 'Large Screen',
      status: 'Online',
      resolution: '4K',
      size: '500"',
      lastMaintenance: '2024-01-15',
      uptime: '99.8%',
      dailyViews: '100K+'
    },
    {
      id: 2,
      name: 'LED-SH-002',
      location: 'Shanghai Nanjing Road',
      type: 'Medium Screen',
      status: 'Online',
      resolution: '2K',
      size: '300"',
      lastMaintenance: '2024-01-14',
      uptime: '99.5%',
      dailyViews: '80K+'
    },
    {
      id: 3,
      name: 'LED-GZ-003',
      location: 'Guangzhou Tianhe',
      type: 'Small Screen',
      status: 'Offline',
      resolution: '1080P',
      size: '200"',
      lastMaintenance: '2024-01-13',
      uptime: '98.9%',
      dailyViews: '50K+'
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchDevices = async () => {
      try {
        setLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setDevices(mockDevices);
      } catch (error) {
        console.error('Error fetching devices:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDevices();
  }, []);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleDeviceClick = (device) => {
    setSelectedDevice(device);
    setIsDetailModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold gradient-text">Device Management</h1>
          <p className="text-gray-400 mt-1">Manage and monitor LED advertising screens</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg flex items-center space-x-2 hover:bg-purple-600 transition-colors"
        >
          <PlusIcon className="w-5 h-5" />
          <span>Add Device</span>
        </motion.button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 rounded-xl bg-gray-800/50 border border-purple-500/10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <TvIcon className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-xs text-purple-400">Total</span>
          </div>
          <p className="text-2xl font-bold text-white">1,256</p>
          <p className="text-sm text-gray-400 mt-1">Total Devices</p>
        </div>

        <div className="p-6 rounded-xl bg-gray-800/50 border border-purple-500/10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <SignalIcon className="w-6 h-6 text-green-400" />
            </div>
            <span className="text-xs text-green-400">Online</span>
          </div>
          <p className="text-2xl font-bold text-white">1,180</p>
          <p className="text-sm text-gray-400 mt-1">Online Devices</p>
        </div>

        <div className="p-6 rounded-xl bg-gray-800/50 border border-purple-500/10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <BoltIcon className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-xs text-blue-400">Active</span>
          </div>
          <p className="text-2xl font-bold text-white">1,023</p>
          <p className="text-sm text-gray-400 mt-1">Active Devices</p>
        </div>

        <div className="p-6 rounded-xl bg-gray-800/50 border border-purple-500/10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <MapPinIcon className="w-6 h-6 text-red-400" />
            </div>
            <span className="text-xs text-red-400">Locations</span>
          </div>
          <p className="text-2xl font-bold text-white">156</p>
          <p className="text-sm text-gray-400 mt-1">Business Districts</p>
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
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>

        <select
          value={filters.location}
          onChange={(e) => handleFilterChange('location', e.target.value)}
          className="px-3 py-1.5 bg-gray-800/50 border border-purple-500/10 rounded-lg text-white focus:outline-none focus:border-purple-500/30"
        >
          <option value="all">All Locations</option>
          <option value="beijing">Beijing</option>
          <option value="shanghai">Shanghai</option>
          <option value="guangzhou">Guangzhou</option>
        </select>

        <select
          value={filters.type}
          onChange={(e) => handleFilterChange('type', e.target.value)}
          className="px-3 py-1.5 bg-gray-800/50 border border-purple-500/10 rounded-lg text-white focus:outline-none focus:border-purple-500/30"
        >
          <option value="all">All Types</option>
          <option value="large">Large Screen</option>
          <option value="medium">Medium Screen</option>
          <option value="small">Small Screen</option>
        </select>

        <select
          value={filters.sortBy}
          onChange={(e) => handleFilterChange('sortBy', e.target.value)}
          className="px-3 py-1.5 bg-gray-800/50 border border-purple-500/10 rounded-lg text-white focus:outline-none focus:border-purple-500/30"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="name">Name</option>
          <option value="uptime">Uptime</option>
        </select>

        <button
          onClick={() => setFilters({ status: 'all', location: 'all', type: 'all', sortBy: 'newest' })}
          className="px-3 py-1.5 text-purple-400 hover:text-purple-300 transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Device List */}
      {loading ? (
        <div className="text-center py-12">
          <ArrowPathIcon className="w-8 h-8 text-purple-400 animate-spin mx-auto" />
          <p className="text-gray-400 mt-2">Loading devices...</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Device ID</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Location</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Type</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Status</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Resolution</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Uptime</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Daily Views</th>
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {devices.map(device => (
                <tr 
                  key={device.id} 
                  className="border-b border-gray-800/50 hover:bg-gray-800/30 cursor-pointer"
                  onClick={() => handleDeviceClick(device)}
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                        <TvIcon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white">{device.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-400">{device.location}</td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      {device.type}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      device.status === 'Online'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {device.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-400">{device.resolution}</td>
                  <td className="py-4 px-4 text-gray-400">{device.uptime}</td>
                  <td className="py-4 px-4 text-gray-400">{device.dailyViews}</td>
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

      {/* Device Detail Modal */}
      <DeviceDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        device={selectedDevice}
      />
    </div>
  );
}
