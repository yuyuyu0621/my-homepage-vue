import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  base: '/my-homepage-vue/',
  outDir: './',  // 【新增这一行】让打包产物直接覆盖根目录
  plugins: [
    vue(),
    VueDevTools()
  ]
})