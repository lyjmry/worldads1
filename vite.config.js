import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    open: true,
    historyApiFallback: {
      rewrites: [
        { from: /^\/en\/.*/, to: '/en.html' }
      ]
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        en: './en.html'
      }
    }
  }
})
