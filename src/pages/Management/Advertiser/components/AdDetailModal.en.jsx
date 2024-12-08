import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  XMarkIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  ClockIcon,
  MegaphoneIcon,
  ArrowTrendingUpIcon,
  PencilSquareIcon,
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

export default function AdDetailModal({ isOpen, onClose, advertiser }) {
  if (!advertiser) return null;

  const metrics = [
    {
      icon: CurrencyDollarIcon,
      label: 'Total Budget',
      value: advertiser.budget,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: MegaphoneIcon,
      label: 'Active Campaigns',
      value: `${advertiser.activeAds}/${advertiser.campaigns}`,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: ChartBarIcon,
      label: 'Performance',
      value: advertiser.performance,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: ClockIcon,
      label: 'Join Date',
      value: advertiser.joinDate,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10'
    }
  ];

  const campaigns = [
    {
      id: 1,
      name: 'Summer Sale',
      status: 'Active',
      budget: '15,000 WAD',
      spent: '8,500 WAD',
      impressions: '125K',
      clicks: '2.8K',
      ctr: '2.24%'
    },
    {
      id: 2,
      name: 'Brand Awareness',
      status: 'Active',
      budget: '20,000 WAD',
      spent: '12,300 WAD',
      impressions: '180K',
      clicks: '4.2K',
      ctr: '2.33%'
    },
    {
      id: 3,
      name: 'Holiday Special',
      status: 'Paused',
      budget: '10,000 WAD',
      spent: '4,200 WAD',
      impressions: '75K',
      clicks: '1.5K',
      ctr: '2.00%'
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
            className="relative w-full max-w-4xl bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden"
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
                  <BuildingOfficeIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">{advertiser.name}</h2>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      {advertiser.type}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      advertiser.status === 'Active'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {advertiser.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6 max-h-[calc(90vh-200px)] overflow-y-auto">
              {/* Metrics Grid */}
              <div className="grid grid-cols-4 gap-4">
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

              {/* Campaign List */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                    <ArrowTrendingUpIcon className="w-5 h-5 text-purple-400" />
                    <span>Active Campaigns</span>
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-purple-500/20 transition-colors"
                  >
                    New Campaign
                  </motion.button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Campaign</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Budget</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Spent</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Impressions</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Clicks</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">CTR</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {campaigns.map(campaign => (
                        <tr key={campaign.id} className="border-b border-gray-800/50">
                          <td className="py-3 px-4">
                            <span className="text-white">{campaign.name}</span>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              campaign.status === 'Active'
                                ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                                : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                            }`}>
                              {campaign.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-400">{campaign.budget}</td>
                          <td className="py-3 px-4 text-gray-400">{campaign.spent}</td>
                          <td className="py-3 px-4 text-gray-400">{campaign.impressions}</td>
                          <td className="py-3 px-4 text-gray-400">{campaign.clicks}</td>
                          <td className="py-3 px-4 text-gray-400">{campaign.ctr}</td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors group">
                                <PencilSquareIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                              </button>
                              <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors group">
                                <ArrowPathIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
                  Edit Advertiser
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-xl border border-purple-500/20 text-purple-400 font-medium hover:bg-purple-500/10 transition-colors"
                >
                  View Analytics
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

AdDetailModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  advertiser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    budget: PropTypes.string.isRequired,
    campaigns: PropTypes.number.isRequired,
    activeAds: PropTypes.number.isRequired,
    performance: PropTypes.string.isRequired,
    joinDate: PropTypes.string.isRequired
  })
};
