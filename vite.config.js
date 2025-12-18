import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/attachment-quiz/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
