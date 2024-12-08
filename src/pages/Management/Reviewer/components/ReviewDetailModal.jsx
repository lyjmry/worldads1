import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { XMarkIcon, CheckCircleIcon, XCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const violationTypes = [
  { id: 'illegal', name: '违法违规', description: '违反当地法律法规' },
  { id: 'inappropriate', name: '不当内容', description: '违反社区规范' },
  { id: 'misleading', name: '误导信息', description: '虚假或误导性内容' },
  { id: 'copyright', name: '版权问题', description: '侵犯知识产权' },
  { id: 'offensive', name: '冒犯性内容', description: '冒犯特定群体或文化' },
  { id: 'other', name: '其他问题', description: '其他违规情况' }
];

export default function ReviewDetailModal({ isOpen, onClose, content }) {
  const [decision, setDecision] = useState('');
  const [selectedViolations, setSelectedViolations] = useState([]);
  const [comment, setComment] = useState('');

  const handleViolationToggle = (violationId) => {
    setSelectedViolations(prev => {
      if (prev.includes(violationId)) {
        return prev.filter(id => id !== violationId);
      }
      return [...prev, violationId];
    });
  };

  const handleSubmit = () => {
    console.log('提交审核结果:', {
      decision,
      violations: selectedViolations,
      comment
    });
    onClose();
  };

  if (!content) return null;

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
                <h2 className="text-xl font-semibold gradient-text">内容审核</h2>
                <div className="flex items-center mt-2 space-x-4">
                  <span className="text-sm text-gray-400">ID: {content.id}</span>
                  <span className="text-sm text-gray-400">语言: {content.language}</span>
                  <span className="text-sm text-gray-400">地区: {content.region}</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 pr-2 -mr-2">
              {/* 内容预览 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">内容预览</h3>
                <div className="p-4 rounded-lg bg-gray-800/50">
                  <div className="aspect-video bg-gray-700 rounded-lg mb-4">
                    {/* 这里放广告预览 */}
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      广告预览区域
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-white font-medium">{content.title}</p>
                    <p className="text-gray-400">{content.description}</p>
                  </div>
                </div>
              </div>

              {/* 审核决定 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">审核决定</h3>
                <div className="grid grid-cols-3 gap-4">
                  <button
                    className={`p-4 rounded-lg border transition-all ${
                      decision === 'approve'
                        ? 'bg-green-500/20 border-green-500 text-green-400'
                        : 'bg-gray-800/50 border-gray-700 hover:border-green-500/50 text-gray-400'
                    }`}
                    onClick={() => setDecision('approve')}
                  >
                    <CheckCircleIcon className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-medium">通过</p>
                    <p className="text-sm opacity-80">内容符合规范</p>
                  </button>
                  <button
                    className={`p-4 rounded-lg border transition-all ${
                      decision === 'reject'
                        ? 'bg-red-500/20 border-red-500 text-red-400'
                        : 'bg-gray-800/50 border-gray-700 hover:border-red-500/50 text-gray-400'
                    }`}
                    onClick={() => setDecision('reject')}
                  >
                    <XCircleIcon className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-medium">拒绝</p>
                    <p className="text-sm opacity-80">内容违反规范</p>
                  </button>
                  <button
                    className={`p-4 rounded-lg border transition-all ${
                      decision === 'review'
                        ? 'bg-yellow-500/20 border-yellow-500 text-yellow-400'
                        : 'bg-gray-800/50 border-gray-700 hover:border-yellow-500/50 text-gray-400'
                    }`}
                    onClick={() => setDecision('review')}
                  >
                    <ExclamationTriangleIcon className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-medium">需复审</p>
                    <p className="text-sm opacity-80">需要更多意见</p>
                  </button>
                </div>
              </div>

              {/* 违规类型 */}
              {decision === 'reject' && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4">违规类型</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {violationTypes.map(type => (
                      <button
                        key={type.id}
                        className={`p-4 rounded-lg border text-left transition-all ${
                          selectedViolations.includes(type.id)
                            ? 'bg-purple-500/20 border-purple-500 text-purple-400'
                            : 'bg-gray-800/50 border-gray-700 hover:border-purple-500/50 text-gray-400'
                        }`}
                        onClick={() => handleViolationToggle(type.id)}
                      >
                        <p className="font-medium">{type.name}</p>
                        <p className="text-sm opacity-80">{type.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* 审核意见 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">审核意见</h3>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full h-32 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                  placeholder="请输入详细的审核意见..."
                />
              </div>

              {/* 审核规则提示 */}
              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <h4 className="text-blue-400 font-medium mb-2">审核提示</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• 请仔细检查内容是否符合当地法律法规</li>
                  <li>• 注意内容是否尊重不同文化和宗教信仰</li>
                  <li>• 确保内容不含有歧视、暴力或不当信息</li>
                  <li>• 如有疑问，建议选择需复审选项</li>
                </ul>
              </div>
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
                className={`hero-button ${!decision ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!decision}
              >
                提交审核
              </button>
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
  content: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired
  })
};
