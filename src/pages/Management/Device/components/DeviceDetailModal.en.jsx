import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  XMarkIcon,
  TvIcon,
  MapPinIcon,
  SignalIcon,
  WrenchScrewdriverIcon,
  EyeIcon,
  ChartBarIcon,
  BoltIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -20,
    transition: {
      duration: 0.2
    }
  }
};

export default function DeviceDetailModal({ isOpen, onClose, device }) {
  if (!device) return null;

  const metrics = [
    {
      icon: SignalIcon,
      label: 'Status',
      value: device.status,
      color: device.status === 'Online' ? 'text-green-400' : 'text-red-400',
      bgColor: device.status === 'Online' ? 'bg-green-500/10' : 'bg-red-500/10'
    },
    {
      icon: TvIcon,
      label: 'Screen Size',
      value: device.size,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: ChartBarIcon,
      label: 'Resolution',
      value: device.resolution,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: BoltIcon,
      label: 'Uptime',
      value: device.uptime,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Background Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-2xl bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors z-10"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="p-6 border-b border-gray-800">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <TvIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">{device.name}</h2>
                  <div className="flex items-center space-x-2 mt-1">
                    <MapPinIcon className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">{device.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 p-6">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-gray-800/50 border border-gray-800"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                      <metric.icon className={`w-5 h-5 ${metric.color}`} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{metric.label}</p>
                      <p className={`text-lg font-semibold ${metric.color}`}>{metric.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="p-6 border-t border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-4">Device Information</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <WrenchScrewdriverIcon className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400">Last Maintenance</span>
                  </div>
                  <span className="text-white">{device.lastMaintenance}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <EyeIcon className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400">Daily Views</span>
                  </div>
                  <span className="text-white">{device.dailyViews}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 border-t border-gray-800">
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity"
                >
                  Edit Device
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center px-4 py-3 rounded-xl border border-purple-500/20 text-purple-400 font-medium hover:bg-purple-500/10 transition-colors"
                >
                  <ArrowPathIcon className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

DeviceDetailModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  device: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    resolution: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    lastMaintenance: PropTypes.string.isRequired,
    uptime: PropTypes.string.isRequired,
    dailyViews: PropTypes.string.isRequired
  })
};
