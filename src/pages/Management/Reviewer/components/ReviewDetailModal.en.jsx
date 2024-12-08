import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  XMarkIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  ClockIcon,
  StarIcon,
  ChartBarIcon,
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

export default function ReviewDetailModal({ isOpen, onClose, reviewer }) {
  if (!reviewer) return null;

  const metrics = [
    {
      icon: DocumentCheckIcon,
      label: 'Total Reviews',
      value: reviewer.totalReviews,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: ClockIcon,
      label: 'Response Time',
      value: reviewer.avgResponseTime,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: StarIcon,
      label: 'Accuracy',
      value: reviewer.accuracy,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: ChartBarIcon,
      label: 'Pending Reviews',
      value: reviewer.pendingReviews,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10'
    }
  ];

  const recentReviews = [
    {
      id: 1,
      type: 'Ad Content',
      status: 'Approved',
      reviewTime: '25m',
      accuracy: '100%',
      comments: 'Content meets guidelines'
    },
    {
      id: 2,
      type: 'User Report',
      status: 'Rejected',
      reviewTime: '18m',
      accuracy: '100%',
      comments: 'Violation of community guidelines'
    },
    {
      id: 3,
      type: 'App Review',
      status: 'Pending',
      reviewTime: '-',
      accuracy: '-',
      comments: 'Under review'
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
                  <ShieldCheckIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">{reviewer.name}</h2>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      {reviewer.level}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      reviewer.status === 'Active'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {reviewer.status}
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

              {/* Specialties */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {reviewer.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recent Reviews */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                    <ArrowTrendingUpIcon className="w-5 h-5 text-purple-400" />
                    <span>Recent Reviews</span>
                  </h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Type</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Review Time</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Accuracy</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Comments</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentReviews.map(review => (
                        <tr key={review.id} className="border-b border-gray-800/50">
                          <td className="py-3 px-4">
                            <span className="text-white">{review.type}</span>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              review.status === 'Approved'
                                ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                                : review.status === 'Rejected'
                                ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                                : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                            }`}>
                              {review.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-400">{review.reviewTime}</td>
                          <td className="py-3 px-4 text-gray-400">{review.accuracy}</td>
                          <td className="py-3 px-4 text-gray-400">{review.comments}</td>
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
                  Edit Reviewer
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

ReviewDetailModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  reviewer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    totalReviews: PropTypes.number.isRequired,
    pendingReviews: PropTypes.number.isRequired,
    accuracy: PropTypes.string.isRequired,
    avgResponseTime: PropTypes.string.isRequired,
    specialties: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};
