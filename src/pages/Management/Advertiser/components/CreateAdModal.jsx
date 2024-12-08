import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { XMarkIcon } from '@heroicons/react/24/outline';

const adTypes = [
  {
    id: 'personal',
    name: '个人用户',
    description: '向World App用户投放广告',
    features: ['用户精准定向', '互动奖励机制', '实时数据反馈']
  },
  {
    id: 'device',
    name: '广告屏',
    description: '在线下广告屏投放广告',
    features: ['高流量场景', '大屏展示效果', '地理位置定向']
  },
  {
    id: 'miniapp',
    name: '小程序',
    description: '在World小程序内投放广告',
    features: ['场景化投放', '用户行为触发', '多样化展示形式']
  }
];

export default function CreateAdModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    budget: '',
    startDate: '',
    endDate: '',
    targetAudience: '',
    locations: '',
    creativeType: 'image',
    creativeUrl: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('提交广告数据:', { type: selectedType, ...formData });
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (step === 1 && selectedType) {
      setStep(2);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    }
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
            className="relative bg-gray-900 rounded-lg p-6 w-full max-w-4xl shadow-xl max-h-[90vh] flex flex-col"
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold gradient-text">创建广告</h2>
                <p className="text-gray-400 mt-1">
                  {step === 1 ? '选择广告投放类型' : '设置广告详情'}
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 pr-2 -mr-2">
              {step === 1 ? (
                // 步骤1：选择广告类型
                <div className="grid grid-cols-3 gap-6">
                  {adTypes.map(type => (
                    <div
                      key={type.id}
                      className={`p-6 rounded-lg border transition-all cursor-pointer ${
                        selectedType === type.id
                          ? 'bg-purple-500/20 border-purple-500'
                          : 'bg-gray-800/50 border-gray-700 hover:border-purple-500/50'
                      }`}
                      onClick={() => setSelectedType(type.id)}
                    >
                      <h3 className="text-lg font-semibold text-white mb-2">{type.name}</h3>
                      <p className="text-gray-400 mb-4">{type.description}</p>
                      <ul className="space-y-2">
                        {type.features.map((feature, index) => (
                          <li key={index} className="text-sm text-gray-400">• {feature}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                // 步骤2：广告详情表单
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-400 mb-2">广告名称</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                        placeholder="请输入广告名称"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2">预算金额</label>
                      <input
                        type="number"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                        placeholder="请输入预算金额"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-400 mb-2">开始日期</label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2">结束日期</label>
                      <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2">目标受众</label>
                    <input
                      type="text"
                      name="targetAudience"
                      value={formData.targetAudience}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                      placeholder="请描述目标受众群体"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2">投放地区</label>
                    <input
                      type="text"
                      name="locations"
                      value={formData.locations}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                      placeholder="请输入投放地区"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2">创意类型</label>
                    <select
                      name="creativeType"
                      value={formData.creativeType}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                    >
                      <option value="image">图片广告</option>
                      <option value="video">视频广告</option>
                      <option value="html">HTML广告</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2">创意素材URL</label>
                    <input
                      type="url"
                      name="creativeUrl"
                      value={formData.creativeUrl}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                      placeholder="请输入素材URL"
                      required
                    />
                  </div>
                </form>
              )}
            </div>

            <div className="flex justify-end space-x-4 pt-6 mt-6 border-t border-gray-800">
              {step === 2 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-2 border border-gray-600 text-gray-400 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  上一步
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-600 text-gray-400 rounded-lg hover:bg-gray-800 transition-colors"
              >
                取消
              </button>
              {step === 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className={`hero-button ${!selectedType ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={!selectedType}
                >
                  下一步
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="hero-button"
                >
                  创建广告
                </button>
              )}
            </div>
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
