import { useEffect, useRef, useState } from 'react';
import { mockMapData } from './config/worldMapConfig';

export default function WorldMap() {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 检查AMap是否已加载
    if (!window.AMap) {
      setError('高德地图加载失败');
      return;
    }

    try {
      // 创建地图实例
      const map = new window.AMap.Map(mapContainer.current, {
        zoom: 4,
        center: [116.397428, 39.90923],
        viewMode: '3D',
        mapStyle: 'amap://styles/dark',
        features: ['bg', 'building', 'point'],
        pitch: 35
      });
      mapInstance.current = map;

      // 添加工具条和比例尺
      map.addControl(new window.AMap.ToolBar());
      map.addControl(new window.AMap.Scale());

      // 创建标记和信息窗体
      mockMapData.forEach(item => {
        const position = cityCoordinates[item.name];
        if (!position) return;

        // 创建标记
        const div = document.createElement('div');
        div.className = 'custom-marker';
        div.innerHTML = `
          <div class="relative group">
            <div class="absolute -inset-2 bg-indigo-500/20 rounded-full blur-lg group-hover:bg-indigo-500/30 transition-all duration-300"></div>
            <div class="relative bg-indigo-500 text-white w-6 h-6 rounded-full flex items-center justify-center shadow-lg border border-indigo-400/50">
              <span class="text-xs">${item.value}</span>
            </div>
          </div>
        `;

        const marker = new window.AMap.Marker({
          position,
          content: div,
          offset: new window.AMap.Pixel(-15, -15)
        });

        // 创建信息窗体
        const info = new window.AMap.InfoWindow({
          isCustom: true,
          content: `
            <div class="bg-gray-900/95 backdrop-blur-xl p-4 rounded-lg border border-purple-500/20 shadow-xl">
              <h3 class="text-white font-semibold mb-2">${item.name}</h3>
              <div class="space-y-1 text-sm">
                <p class="text-gray-400">LED广告屏：<span class="text-white">${item.value}块</span></p>
                <p class="text-gray-400">日均人流：<span class="text-white">${item.traffic}万+</span></p>
                <div class="mt-2 pt-2 border-t border-gray-800">
                  <p class="text-gray-400">大屏：<span class="text-white">${item.details.large}块</span></p>
                  <p class="text-gray-400">中屏：<span class="text-white">${item.details.medium}块</span></p>
                  <p class="text-gray-400">小屏：<span class="text-white">${item.details.small}块</span></p>
                  <p class="text-gray-400 mt-1">日均收益：<span class="text-green-400">${item.details.revenue}</span></p>
                </div>
              </div>
            </div>
          `,
          offset: new window.AMap.Pixel(0, -30)
        });

        // 绑定鼠标事件
        marker.on('mouseover', () => {
          info.open(map, position);
        });
        marker.on('mouseout', () => {
          info.close();
        });

        marker.setMap(map);
      });

      // 添加自定义样式
      const style = document.createElement('style');
      style.textContent = `
        .custom-marker {
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .custom-marker:hover {
          transform: scale(1.1);
        }
        .amap-info-content {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }
        .amap-info-sharp {
          display: none !important;
        }
      `;
      document.head.appendChild(style);

      return () => {
        if (mapInstance.current) {
          mapInstance.current.destroy();
        }
        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
      };
    } catch (err) {
      console.error('地图初始化失败:', err);
      setError('地图初始化失败');
    }
  }, []);

  if (error) {
    return (
      <div className="w-full h-[400px] rounded-lg bg-gray-800/50 flex items-center justify-center">
        <p className="text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div ref={mapContainer} className="w-full h-[400px] rounded-lg overflow-hidden" />
  );
}

// 城市坐标
const cityCoordinates = {
  '北京': [116.407526, 39.90403],
  '上海': [121.473701, 31.230416],
  '广州': [113.264434, 23.129162],
  '深圳': [114.057868, 22.543099],
  '杭州': [120.155070, 30.274084],
  '成都': [104.065735, 30.659462],
  '武汉': [114.298572, 30.584355],
  '西安': [108.940175, 34.341568],
  '重庆': [106.504962, 29.533155],
  '南京': [118.767413, 32.041544]
};
