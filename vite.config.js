import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  base: '/my-homepage-vue/',  // 【关键】这里必须和你的 GitHub 仓库名一模一样！
  plugins: [
    vue(),
    VueDevTools()
  ]
})