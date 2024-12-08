import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  XMarkIcon,
  UserIcon,
  BuildingOfficeIcon,
  EnvelopeIcon,
  PhoneIcon,
  BanknotesIcon,
  GlobeAltIcon
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

export default function CreateAdModal({ isOpen, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    onClose();
  };

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
              <h2 className="text-xl font-bold text-white">Add New Advertiser</h2>
              <p className="text-gray-400 mt-1">Enter advertiser information</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Basic Information</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {/* Company Name */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Company Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <BuildingOfficeIcon className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-purple-500/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/30"
                        placeholder="Enter company name"
                      />
                    </div>
                  </div>

                  {/* Contact Person */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Contact Person</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <UserIcon className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-purple-500/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/30"
                        placeholder="Enter contact name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <EnvelopeIcon className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-purple-500/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/30"
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Phone</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <PhoneIcon className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-purple-500/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/30"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Business Information</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {/* Business Type */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Business Type</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <BuildingOfficeIcon className="w-5 h-5 text-gray-400" />
                      </div>
                      <select
                        className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-purple-500/10 rounded-lg text-white focus:outline-none focus:border-purple-500/30 appearance-none"
                      >
                        <option value="">Select type</option>
                        <option value="enterprise">Enterprise</option>
                        <option value="business">Business</option>
                        <option value="small">Small Business</option>
                      </select>
                    </div>
                  </div>

                  {/* Initial Budget */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Initial Budget</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <BanknotesIcon className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-purple-500/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/30"
                        placeholder="Enter budget in WAD"
                      />
                    </div>
                  </div>

                  {/* Website */}
                  <div className="col-span-2">
                    <label className="block text-sm text-gray-400 mb-1">Website</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <GlobeAltIcon className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="url"
                        className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-purple-500/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/30"
                        placeholder="Enter website URL"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-4 pt-6 border-t border-gray-800">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity"
                >
                  Create Advertiser
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl border border-purple-500/20 text-purple-400 font-medium hover:bg-purple-500/10 transition-colors"
                >
                  Cancel
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

CreateAdModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
