import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  base: '/my-homepage-vue/',
  build: {
    outDir: 'docs'  // 【关键】打包到 docs 文件夹，这是 GitHub Pages 最推荐的做法
  },
  plugins: [
    vue(),
    VueDevTools()
  ]
})