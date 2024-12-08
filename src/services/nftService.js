import { mockNFTs, mockMarketStats } from '../data/mockData.js';

class NFTService {
  // 获取NFT列表
  static async getNFTs({ status, location, priceRange, sortBy, page = 1, limit = 12 }) {
    try {
      let filteredNFTs = [...mockNFTs];
      
      // 应用筛选条件
      if (status && status !== 'all') {
        filteredNFTs = filteredNFTs.filter(nft => nft.status === status);
      }
      if (location && location !== 'all') {
        filteredNFTs = filteredNFTs.filter(nft => nft.location === location);
      }
      if (priceRange && priceRange !== 'all') {
        const [min, max] = priceRange.split('-').map(Number);
        filteredNFTs = filteredNFTs.filter(nft => {
          if (max) {
            return nft.floorPrice >= min && nft.floorPrice <= max;
          }
          return nft.floorPrice >= min;
        });
      }

      // 应用排序
      switch (sortBy) {
        case 'priceAsc':
          filteredNFTs.sort((a, b) => a.floorPrice - b.floorPrice);
          break;
        case 'priceDesc':
          filteredNFTs.sort((a, b) => b.floorPrice - a.floorPrice);
          break;
        case 'yieldDesc':
          filteredNFTs.sort((a, b) => b.yield - a.yield);
          break;
        default:
          filteredNFTs.sort((a, b) => b.id - a.id);
      }

      // 分页
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedNFTs = filteredNFTs.slice(startIndex, endIndex);

      return {
        nfts: paginatedNFTs,
        pagination: {
          page,
          limit,
          total: filteredNFTs.length,
          pages: Math.ceil(filteredNFTs.length / limit)
        }
      };
    } catch (error) {
      throw new Error(`获取NFT列表失败: ${error.message}`);
    }
  }

  // 获取单个NFT详情
  static async getNFTById(id) {
    try {
      const nft = mockNFTs.find(nft => nft.id === parseInt(id));
      if (!nft) {
        throw new Error('NFT不存在');
      }
      return nft;
    } catch (error) {
      throw new Error(`获取NFT详情失败: ${error.message}`);
    }
  }

  // 创建新NFT
  static async createNFT(nftData) {
    try {
      const newNFT = {
        ...nftData,
        id: mockNFTs.length + 1,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      mockNFTs.push(newNFT);
      return newNFT;
    } catch (error) {
      throw new Error(`创建NFT失败: ${error.message}`);
    }
  }

  // 更新NFT信息
  static async updateNFT(id, updateData) {
    try {
      const index = mockNFTs.findIndex(nft => nft.id === parseInt(id));
      if (index === -1) {
        throw new Error('NFT不存在');
      }
      mockNFTs[index] = {
        ...mockNFTs[index],
        ...updateData,
        updatedAt: new Date()
      };
      return mockNFTs[index];
    } catch (error) {
      throw new Error(`更新NFT失败: ${error.message}`);
    }
  }

  // 更新NFT价格
  static async updateNFTPrice(id, newPrice) {
    try {
      const nft = await this.getNFTById(id);
      nft.history.push({
        date: new Date().toISOString().split('T')[0],
        price: newPrice
      });
      nft.floorPrice = newPrice;
      return nft;
    } catch (error) {
      throw new Error(`更新NFT价格失败: ${error.message}`);
    }
  }

  // 获取市场统计数据
  static async getMarketStats() {
    try {
      return mockMarketStats;
    } catch (error) {
      throw new Error(`获取市场统计数据失败: ${error.message}`);
    }
  }

  // 获取地区统计数据
  static async getLocationStats() {
    try {
      const locationStats = {};
      mockNFTs.forEach(nft => {
        if (!locationStats[nft.location]) {
          locationStats[nft.location] = {
            count: 0,
            totalPrice: 0,
            totalVolume: 0
          };
        }
        locationStats[nft.location].count += 1;
        locationStats[nft.location].totalPrice += nft.floorPrice;
        locationStats[nft.location].totalVolume += nft.floorPrice;
      });

      return Object.entries(locationStats).map(([location, stats]) => ({
        _id: location,
        count: stats.count,
        averagePrice: stats.totalPrice / stats.count,
        totalVolume: stats.totalVolume
      }));
    } catch (error) {
      throw new Error(`获取地区统计数据失败: ${error.message}`);
    }
  }
}

export default NFTService;
