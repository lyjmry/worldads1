import { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { motion } from 'framer-motion';

const mockData = {
  dates: ['1月', '2月', '3月', '4月', '5月', '6月'],
  series: [
    {
      name: '用户增长',
      data: [150, 230, 224, 218, 335, 278],
      color: '#8B5CF6'
    },
    {
      name: '广告收入',
      data: [80, 120, 150, 180, 200, 250],
      color: '#3B82F6'
    },
    {
      name: '设备利用率',
      data: [65, 75, 70, 85, 90, 88],
      color: '#10B981'
    }
  ]
};

const generateOption = (data) => ({
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: data.series.map(s => s.name),
    textStyle: {
      color: '#9CA3AF'
    },
    top: 0
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: data.dates,
    axisLine: {
      lineStyle: {
        color: '#4B5563'
      }
    },
    axisLabel: {
      color: '#9CA3AF'
    }
  },
  yAxis: {
    type: 'value',
    axisLine: {
      lineStyle: {
        color: '#4B5563'
      }
    },
    splitLine: {
      lineStyle: {
        color: '#374151'
      }
    },
    axisLabel: {
      color: '#9CA3AF'
    }
  },
  series: data.series.map(s => ({
    name: s.name,
    type: 'line',
    data: s.data,
    smooth: true,
    showSymbol: false,
    itemStyle: {
      color: s.color
    },
    areaStyle: {
      opacity: 0.1
    }
  }))
});

export default function TrendChart() {
  const [option, setOption] = useState(generateOption({
    dates: [],
    series: []
  }));

  useEffect(() => {
    setOption(generateOption(mockData));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold gradient-text">增长趋势</h2>
        <div className="flex space-x-4">
          <select className="bg-gray-800 text-gray-300 text-sm rounded-lg px-3 py-1 border border-gray-700">
            <option>最近6个月</option>
            <option>最近12个月</option>
            <option>今年</option>
          </select>
          <button className="text-purple-400 hover:text-purple-300 text-sm">
            下载报告
          </button>
        </div>
      </div>

      <div className="h-[400px]">
        <ReactECharts
          option={option}
          style={{ height: '100%' }}
          theme="dark"
          opts={{ renderer: 'canvas' }}
        />
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="text-center p-4 rounded-lg bg-gray-800/50">
          <p className="text-gray-400 text-sm">月均增长率</p>
          <p className="text-xl font-semibold text-white mt-1">15.8%</p>
          <p className="text-sm text-green-400">高于行业平均</p>
        </div>
        <div className="text-center p-4 rounded-lg bg-gray-800/50">
          <p className="text-gray-400 text-sm">月活用户</p>
          <p className="text-xl font-semibold text-white mt-1">278K</p>
          <p className="text-sm text-green-400">+23.5%</p>
        </div>
        <div className="text-center p-4 rounded-lg bg-gray-800/50">
          <p className="text-gray-400 text-sm">平均收入</p>
          <p className="text-xl font-semibold text-white mt-1">250K</p>
          <p className="text-sm text-green-400">+25%</p>
        </div>
      </div>
    </motion.div>
  );
}
