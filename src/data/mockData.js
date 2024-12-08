export const mockNFTs = [
  {
    id: 1,
    name: '北京三里屯LED广告屏',
    description: '位于三里屯商圈核心位置的LED广告屏，日均人流量10万+',
    imageUrl: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    status: 'onSale',
    floorPrice: 5000,
    yield: 12.5,
    lockPeriod: 180,
    owner: 'worldads',
    tokenId: '0x123',
    location: '北京',
    contractAddress: '0x1234...5678',
    blockchain: 'Ethereum',
    history: [
      { date: '2024-01-20', price: 4800 },
      { date: '2024-01-15', price: 4500 }
    ],
    attributes: [
      { trait_type: '屏幕尺寸', value: '500寸' },
      { trait_type: '分辨率', value: '4K' },
      { trait_type: '位置评级', value: 'S级' },
      { trait_type: '日均人流量', value: '100,000+' }
    ]
  },
  {
    id: 2,
    name: '上海南京路LED广告屏',
    description: '南京路步行街黄金位置，超高人流量覆盖，24小时不间断展示',
    imageUrl: 'https://images.unsplash.com/photo-1533050487297-09b450131914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    status: 'locked',
    floorPrice: 8000,
    yield: 15.8,
    lockPeriod: 365,
    owner: 'worldads',
    tokenId: '0x456',
    location: '上海',
    contractAddress: '0x2345...6789',
    blockchain: 'Ethereum',
    history: [
      { date: '2024-01-18', price: 7800 },
      { date: '2024-01-10', price: 7500 }
    ],
    attributes: [
      { trait_type: '屏幕尺寸', value: '600寸' },
      { trait_type: '分辨率', value: '8K' },
      { trait_type: '位置评级', value: 'S级' },
      { trait_type: '日均人流量', value: '200,000+' }
    ]
  },
  {
    id: 3,
    name: '广州天河城LED广告屏',
    description: '天河城商圈核心位置，覆盖高消费人群',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    status: 'onSale',
    floorPrice: 6000,
    yield: 13.5,
    lockPeriod: 240,
    owner: 'worldads',
    tokenId: '0x789',
    location: '广州',
    contractAddress: '0x3456...7890',
    blockchain: 'Ethereum',
    history: [
      { date: '2024-01-19', price: 5800 },
      { date: '2024-01-14', price: 5500 }
    ],
    attributes: [
      { trait_type: '屏幕尺寸', value: '400寸' },
      { trait_type: '分辨率', value: '4K' },
      { trait_type: '位置评级', value: 'A级' },
      { trait_type: '日均人流量', value: '80,000+' }
    ]
  },
  {
    id: 4,
    name: '深圳华强北LED广告屏',
    description: '华强北商圈核心位置，科技与商业的完美结合',
    imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1006&q=80',
    status: 'onSale',
    floorPrice: 7000,
    yield: 14.2,
    lockPeriod: 300,
    owner: 'worldads',
    tokenId: '0x101',
    location: '深圳',
    contractAddress: '0x4567...8901',
    blockchain: 'Ethereum',
    history: [
      { date: '2024-01-17', price: 6800 },
      { date: '2024-01-12', price: 6500 }
    ],
    attributes: [
      { trait_type: '屏幕尺寸', value: '450寸' },
      { trait_type: '分辨率', value: '4K' },
      { trait_type: '位置评级', value: 'S级' },
      { trait_type: '日均人流量', value: '150,000+' }
    ]
  }
];

export const mockMarketStats = {
  totalVolume: 1234567,
  totalNFTs: 156,
  averageYield: 14.2,
  totalHolders: 892,
  dailyVolume: 45678,
  weeklyGrowth: 12.5,
  activeListings: 78,
  floorPrice: 5000
};

export const mockLocationStats = [
  {
    _id: '北京',
    count: 45,
    averagePrice: 6500,
    totalVolume: 292500,
    screenSizes: {
      large: 15,
      medium: 20,
      small: 10
    },
    trafficFlow: 4500000
  },
  {
    _id: '上海',
    count: 38,
    averagePrice: 7200,
    totalVolume: 273600,
    screenSizes: {
      large: 12,
      medium: 18,
      small: 8
    },
    trafficFlow: 4200000
  },
  {
    _id: '广州',
    count: 32,
    averagePrice: 5800,
    totalVolume: 185600,
    screenSizes: {
      large: 10,
      medium: 15,
      small: 7
    },
    trafficFlow: 3800000
  },
  {
    _id: '深圳',
    count: 41,
    averagePrice: 6800,
    totalVolume: 278800,
    screenSizes: {
      large: 14,
      medium: 19,
      small: 8
    },
    trafficFlow: 4000000
  }
];
