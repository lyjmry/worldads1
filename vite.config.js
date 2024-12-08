import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 允许局域网访问
    port: 3000, // 使用3000端口
    strictPort: true, // 端口被占用时不自动尝试下一个端口
    open: false, // 不自动打开浏览器
  }
});
