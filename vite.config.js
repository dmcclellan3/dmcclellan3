import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
      
// https://vitejs.dev/config/
export default defineConfig(({}) => {
  return {
    // base: '/dmcclellan3/',
    plugins: [react()],
    server: {
      port: 8080,
      hot: true
    },
  }
})
