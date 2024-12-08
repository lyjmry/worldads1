import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Features from './components/Features';
import Roles from './components/Roles';
import Economics from './components/Economics';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* 背景装饰 */}
      <div className="fixed inset-0 pointer-events-none">
        {/* 网格背景 */}
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
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-purple-500/10 to-transparent transform rotate-45" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-pink-500/10 to-transparent transform -rotate-45" />
        </div>
      </div>

      {/* 主要内容 */}
      <div className="relative">
        {/* Hero区域 */}
        <Hero />

        {/* 分隔装饰 */}
        <div className="relative h-px my-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse" />
        </div>

        {/* 核心特性 */}
        <Features />

        {/* 分隔装饰 */}
        <div className="relative h-px my-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/20 to-transparent animate-pulse" />
        </div>

        {/* 角色介绍 */}
        <Roles />

        {/* 分隔装饰 */}
        <div className="relative h-px my-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse" />
        </div>

        {/* 经济模型 */}
        <Economics />

        {/* 页脚装饰 */}
        <div className="relative h-20 mt-20">
          <div className="absolute bottom-0 left-0 right-0 h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent" />
          </div>
        </div>
      </div>

      {/* 滚动提示 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 text-gray-400 text-sm flex flex-col items-center"
      >
        <div className="w-1 h-8 rounded-full bg-gradient-to-b from-purple-500/20 to-transparent mb-2" />
        向下滚动探索更多
      </motion.div>
    </motion.div>
  );
}
