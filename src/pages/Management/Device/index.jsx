import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  DeviceTabletIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  MapPinIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
  QrCodeIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import DeviceDetailModal from './components/DeviceDetailModal';

const devices = [
  {
    id: 1,
    name: '北京三里屯广告屏',
    location: '北京市朝阳区三里屯',
    status: 'active',
    dailyViews: 12500,
    dailyIncome: 450,
    utilization: 85,
    lastSync: '2分钟前',
    image: 'https://picsum.photos/400/300'
  },
  {
    id: 2,
    name: '上海南京路广告屏',
    location: '上海市黄浦区南京东路',
    status: 'maintenance',
    dailyViews: 18000,
    dailyIncome: 680,
    utilization: 92,
    lastSync: '5分钟前',
    image: 'https://picsum.photos/400/301'
  },
  {
    id: 3,
    name: '广州天河城广告屏',
    location: '广州市天河区天河路',
    status: 'active',
    dailyViews: 15000,
    dailyIncome: 520,
    utilization: 88,
    lastSync: '1分钟前',
    image: 'https://picsum.photos/400/302'
  }
];

export default function DeviceManagement() {
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeviceClick = (device) => {
    setSelectedDevice(device);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDevice(null);
  };

  return (
    <div className="space-y-8">
      {/* 统计概览 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20"
        >
          <div className="flex items-center mb-4">
            <DeviceTabletIcon className="w-6 h-6 text-purple-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">设备总量</h3>
          </div>
          <p className="text-3xl font-bold text-white mb-2">3</p>
          <p className="text-sm text-green-400">全部在线</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 rounded-2xl bg-pink-500/10 border border-pink-500/20"
        >
          <div className="flex items-center mb-4">
            <CurrencyDollarIcon className="w-6 h-6 text-pink-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">今日收益</h3>
          </div>
          <p className="text-3xl font-bold text-white mb-2">1,650</p>
          <p className="text-sm text-green-400">+12.5% 较昨日</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20"
        >
          <div className="flex items-center mb-4">
            <ChartBarIcon className="w-6 h-6 text-blue-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">平均利用率</h3>
          </div>
          <p className="text-3xl font-bold text-white mb-2">88.3%</p>
          <p className="text-sm text-green-400">高于行业均值</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20"
        >
          <div className="flex items-center mb-4">
            <ArrowTrendingUpIcon className="w-6 h-6 text-green-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">总浏览量</h3>
          </div>
          <p className="text-3xl font-bold text-white mb-2">45.5K</p>
          <p className="text-sm text-green-400">今日实时</p>
        </motion.div>
      </div>

      {/* 设备列表 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {devices.map((device, index) => (
          <motion.div
            key={device.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="group cursor-pointer"
            onClick={() => handleDeviceClick(device)}
          >
            <div className="relative rounded-2xl overflow-hidden">
              {/* 设备图片 */}
              <div className="aspect-video relative">
                <img 
                  src={device.image} 
                  alt={device.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
              </div>

              {/* 设备信息 */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{device.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    device.status === 'active' 
                      ? 'bg-green-500/10 text-green-400'
                      : 'bg-yellow-500/10 text-yellow-400'
                  }`}>
                    {device.status === 'active' ? '运行中' : '维护中'}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-400">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">{device.location}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">同步于 {device.lastSync}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-end text-green-400">
                      <CurrencyDollarIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">{device.dailyIncome} TOKEN/日</span>
                    </div>
                    <div className="flex items-center justify-end text-blue-400">
                      <ChartBarIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">{device.utilization}% 利用率</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 操作按钮 */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="p-2 rounded-lg bg-gray-900/50 backdrop-blur-sm text-gray-400 hover:text-white transition-colors">
                  <QrCodeIcon className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-lg bg-gray-900/50 backdrop-blur-sm text-gray-400 hover:text-white transition-colors">
                  <ArrowPathIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 添加设备按钮 */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full p-6 rounded-2xl border border-dashed border-purple-500/20 text-purple-400 hover:bg-purple-500/5 transition-colors flex items-center justify-center space-x-2"
      >
        <DeviceTabletIcon className="w-6 h-6" />
        <span>添加新设备</span>
      </motion.button>

      {/* 设备详情模态框 */}
      <DeviceDetailModal
        device={selectedDevice}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
