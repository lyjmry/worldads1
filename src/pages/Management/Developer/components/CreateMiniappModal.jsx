import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { XMarkIcon } from '@heroicons/react/24/outline';

const categories = [
  '工具类',
  '生活服务',
  '社交通讯',
  '游戏娱乐',
  '教育培训',
  '电商零售',
  '其他'
];

export default function CreateMiniappModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    worldAppId: '',
    category: '工具类',
    description: '',
    privacyUrl: '',
    serviceUrl: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
    // 重置表单
    setFormData({
      name: '',
      worldAppId: '',
      category: '工具类',
      description: '',
      privacyUrl: '',
      serviceUrl: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />

          {/* 模态框内容 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-gray-900 rounded-lg p-6 w-full max-w-2xl shadow-xl max-h-[90vh] flex flex-col"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold gradient-text">接入World小程序</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 pr-2 -mr-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2">小程序名称</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                    placeholder="请输入World小程序名称"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">World App ID</label>
                  <input
                    type="text"
                    name="worldAppId"
                    value={formData.worldAppId}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                    placeholder="请输入World App ID"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    在World开发者平台获取的应用ID
                  </p>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">类别</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">描述</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500 h-32"
                    placeholder="请输入小程序描述"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">隐私政策URL</label>
                  <input
                    type="url"
                    name="privacyUrl"
                    value={formData.privacyUrl}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                    placeholder="https://"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">服务条款URL</label>
                  <input
                    type="url"
                    name="serviceUrl"
                    value={formData.serviceUrl}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                    placeholder="https://"
                    required
                  />
                </div>
              </form>
            </div>

            <div className="flex justify-end space-x-4 pt-6 mt-6 border-t border-gray-800">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-600 text-gray-400 rounded-lg hover:bg-gray-800 transition-colors"
              >
                取消
              </button>
              <button
                onClick={handleSubmit}
                className="hero-button"
              >
                接入
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

CreateMiniappModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
