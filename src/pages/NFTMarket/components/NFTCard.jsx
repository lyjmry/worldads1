import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { CurrencyDollarIcon, ChartBarIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function NFTCard({ nft, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
      className="group relative bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-purple-500/10 overflow-hidden cursor-pointer"
      onClick={() => onClick(nft)}
    >
      {/* 卡片内容容器 */}
      <div className="relative">
        {/* NFT图片 */}
        <div className="aspect-square relative overflow-hidden">
          <img 
            src={nft.imageUrl} 
            alt={nft.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* 状态标签 */}
          <div className="absolute top-4 right-4">
            <div className={`px-3 py-1 rounded-full backdrop-blur-md border ${
              nft.status === 'onSale' 
                ? 'bg-green-500/10 border-green-500/20 text-green-400' 
                : 'bg-purple-500/10 border-purple-500/20 text-purple-400'
            }`}>
              <span className="text-sm font-medium">{nft.status === 'onSale' ? '在售' : '已锁定'}</span>
            </div>
          </div>
        </div>

        {/* NFT信息 */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-gradient transition-all duration-300">
            {nft.name}
          </h3>
          <p className="text-sm text-gray-400 mb-4 line-clamp-2">
            {nft.description}
          </p>

          {/* 数据指标 */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="p-3 rounded-xl bg-purple-500/5 border border-purple-500/10 group-hover:border-purple-500/20 transition-colors">
              <div className="flex items-center justify-center mb-1">
                <CurrencyDollarIcon className="w-4 h-4 text-purple-400" />
              </div>
              <p className="text-center">
                <span className="block text-xs text-gray-400 mb-1">底价</span>
                <span className="text-sm font-medium text-white">{nft.floorPrice}</span>
              </p>
            </div>
            <div className="p-3 rounded-xl bg-green-500/5 border border-green-500/10 group-hover:border-green-500/20 transition-colors">
              <div className="flex items-center justify-center mb-1">
                <ChartBarIcon className="w-4 h-4 text-green-400" />
              </div>
              <p className="text-center">
                <span className="block text-xs text-gray-400 mb-1">收益率</span>
                <span className="text-sm font-medium text-white">{nft.yield}%</span>
              </p>
            </div>
            <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10 group-hover:border-blue-500/20 transition-colors">
              <div className="flex items-center justify-center mb-1">
                <ClockIcon className="w-4 h-4 text-blue-400" />
              </div>
              <p className="text-center">
                <span className="block text-xs text-gray-400 mb-1">锁定期</span>
                <span className="text-sm font-medium text-white">{nft.lockPeriod}天</span>
              </p>
            </div>
          </div>

          {/* 底部信息 */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-800">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-[1px]">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <span className="text-xs text-white">O</span>
                </div>
              </div>
              <span className="text-sm text-gray-400">@{nft.owner}</span>
            </div>
            <span className="text-sm text-purple-400">#{nft.tokenId}</span>
          </div>
        </div>
      </div>

      {/* 悬浮效果 */}
      <div className="absolute inset-0 border border-transparent group-hover:border-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* 光晕效果 */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-2xl" />
      </div>
    </motion.div>
  );
}

NFTCard.propTypes = {
  nft: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['onSale', 'locked']).isRequired,
    floorPrice: PropTypes.number.isRequired,
    yield: PropTypes.number.isRequired,
    lockPeriod: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired,
    tokenId: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};
