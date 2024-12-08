import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';

export default function Management() {
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* 侧边栏 */}
      <div className="w-70 flex-shrink-0 fixed left-0 h-[calc(100vh-4rem)] overflow-hidden">
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-purple-500/50 hover:scrollbar-thumb-purple-500/70">
          <Sidebar />
        </div>
      </div>

      {/* 主内容区 */}
      <div className="flex-1 ml-70">
        <div className="relative min-h-full">
          {/* Web3装饰元素 */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* 动态网格背景 */}
            <div 
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
            />

            {/* 渐变光晕 */}
            <motion.div
              animate={{
                opacity: [0.1, 0.15, 0.1],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full filter blur-[100px]"
            />
            <motion.div
              animate={{
                opacity: [0.1, 0.15, 0.1],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full filter blur-[80px]"
            />

            {/* 装饰线条 */}
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
                style={{
                  top: `${25 + i * 25}%`,
                  left: '5%',
                  right: '5%',
                }}
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scaleX: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
              />
            ))}
          </div>

          {/* 内容区域 */}
          <div className="relative h-full overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-purple-500/50 hover:scrollbar-thumb-purple-500/70">
            <div className="p-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ 
                  duration: 0.2,
                  ease: [0.4, 0.0, 0.2, 1]
                }}
                className="relative"
              >
                {/* 内容容器 */}
                <div className="relative">
                  {/* 内容背景 */}
                  <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-purple-500/10" />
                  
                  {/* 实际内容 */}
                  <div className="relative p-6">
                    <Outlet />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* 底部装饰 */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
