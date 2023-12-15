import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/nicnelprod/",
  plugins: [react()],
  optimizeDeps: {
    include: ['*.png', '*.jpg', '*.mp4'] 
  }
})
