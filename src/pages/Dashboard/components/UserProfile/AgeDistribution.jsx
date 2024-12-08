const ageGroups = [
  { 
    range: '新手广告主',
    percentage: '25%',
    bgColor: 'bg-purple-500/20',
    textColor: 'text-purple-400',
    borderColor: 'border-purple-500/20',
    traits: ['投放时间 < 3个月', '平均预算 < 5K', '偏好效果广告']
  },
  { 
    range: '成长广告主',
    percentage: '40%',
    bgColor: 'bg-blue-500/20',
    textColor: 'text-blue-400',
    borderColor: 'border-blue-500/20',
    traits: ['投放时间3-12个月', '平均预算5K-20K', '多渠道投放']
  },
  { 
    range: '资深广告主',
    percentage: '20%',
    bgColor: 'bg-green-500/20',
    textColor: 'text-green-400',
    borderColor: 'border-green-500/20',
    traits: ['投放时间1-3年', '平均预算20K-50K', '品牌建设']
  },
  { 
    range: '战略广告主',
    percentage: '15%',
    bgColor: 'bg-yellow-500/20',
    textColor: 'text-yellow-400',
    borderColor: 'border-yellow-500/20',
    traits: ['投放时间 > 3年', '平均预算 > 50K', '全域营销']
  }
];

export default function AgeDistribution() {
  return (
    <div>
      <h3 className="text-white mb-4">广告主分布</h3>
      <div className="grid grid-cols-4 gap-4">
        {ageGroups.map(({ range, percentage, bgColor, textColor, borderColor, traits }) => (
          <div 
            key={range}
            className={`${bgColor} rounded-lg p-4 border ${borderColor} relative group overflow-hidden`}
          >
            {/* 背景动画 */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/[0.02] transform -skew-x-12 group-hover:animate-shine" />
            
            <div className="relative">
              <div className={`text-2xl font-bold ${textColor} mb-1`}>
                {percentage}
              </div>
              <div className="text-sm text-gray-400 mb-3">{range}</div>
              
              {/* 特征标签 */}
              <div className="space-y-1">
                {traits.map((trait, index) => (
                  <div
                    key={index}
                    className={`text-xs px-2 py-1 rounded-full ${bgColor} ${textColor} border ${borderColor} inline-block mr-1 mb-1`}
                  >
                    {trait}
                  </div>
                ))}
              </div>
            </div>

            {/* 装饰线条 */}
            <div className={`absolute bottom-0 left-0 h-1 ${textColor} opacity-20 group-hover:opacity-40 transition-opacity`} style={{ width: percentage }} />
          </div>
        ))}
      </div>

      {/* 数据说明 */}
      <div className="mt-4 p-3 rounded-lg bg-gray-800/50 border border-gray-700">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center space-x-4">
            <span>总广告主: 12,567</span>
            <span>月增长率: +15.2%</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>实时数据</span>
          </div>
        </div>
      </div>
    </div>
  );
}
