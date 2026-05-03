import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Raiz (/) para Vercel e dev local; GitHub Pages em /Works/ via BASE_PATH no CI
  base: process.env.BASE_PATH || '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
