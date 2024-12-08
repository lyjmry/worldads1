const interests = [
  { 
    name: '品牌广告',
    percentage: 65,
    color: 'bg-purple-500',
    description: '大型品牌推广',
    trend: '+5.2%'
  },
  { 
    name: '效果广告',
    percentage: 58,
    color: 'bg-blue-500',
    description: 'CPC/CPA广告',
    trend: '+8.3%'
  },
  { 
    name: '场景广告',
    percentage: 52,
    color: 'bg-pink-500',
    description: '场景化推广',
    trend: '+4.7%'
  },
  { 
    name: '程序化广告',
    percentage: 45,
    color: 'bg-green-500',
    description: '自动化投放',
    trend: '+3.1%'
  },
  { 
    name: '互动广告',
    percentage: 38,
    color: 'bg-yellow-500',
    description: '用户互动营销',
    trend: '+6.4%'
  }
];

export default function InterestChart() {
  return (
    <div>
      <h3 className="text-white mb-4">广告投放偏好</h3>
      <div className="space-y-4">
        {interests.map(interest => (
          <div key={interest.name} className="group">
            {/* 标题和趋势 */}
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center space-x-2">
                <span className="text-gray-300">{interest.name}</span>
                <span className="text-xs text-gray-500">{interest.description}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">{interest.percentage}%</span>
                <span className="text-xs text-green-400">{interest.trend}</span>
              </div>
            </div>

            {/* 进度条容器 */}
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden relative">
              {/* 发光效果 */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/[0.02] transform -skew-x-12 group-hover:animate-shine" />
              
              {/* 进度条 */}
              <div
                className={`h-full ${interest.color} rounded-full relative group-hover:opacity-80 transition-all duration-500 ease-out`}
                style={{ width: `${interest.percentage}%` }}
              >
                {/* 光晕效果 */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/[0.1] to-white/0" />
              </div>
            </div>

            {/* 活跃度指标 */}
            <div className="flex justify-between mt-1">
              <div className="flex space-x-2 text-xs">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className={`w-1 h-1 rounded-full ${
                      index < Math.floor(interest.percentage / 20)
                        ? interest.color
                        : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500">
                {interest.percentage >= 60 ? '高度活跃' : 
                 interest.percentage >= 40 ? '中度活跃' : '一般活跃'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 底部说明 */}
      <div className="mt-6 p-3 rounded-lg bg-gray-800/50 border border-gray-700">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>数据更新于: 5分钟前</span>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>实时同步中</span>
          </div>
        </div>
      </div>
    </div>
  );
}
