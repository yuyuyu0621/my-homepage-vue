<script setup>
import { RouterLink, useRouter } from 'vue-router'

const isDarkTheme = defineModel('isDarkTheme', { type: Boolean, default: false })

defineProps({
  title: { type: String, default: '' }
})

const router = useRouter()

const navList = [
  { name: 'home', label: '首页' },
  { name: 'projectList', label: '项目中心' },
  { name: 'articleList', label: '文章列表' },
  { name: 'about', label: '关于我' }
]

// 后台管理入口：编程式导航
function goAdmin() {
  router.push({ name: 'profileEdit' })
}
</script>

<template>
  <header class="app-header">
    <h1 class="logo">{{ title }}</h1>

    <nav class="nav">
      <RouterLink
        v-for="item in navList"
        :key="item.name"
        :to="{ name: item.name }"
        class="nav-item"
      >
        {{ item.label }}
      </RouterLink>
    </nav>

    <div class="right">
      <button class="admin-btn" @click="goAdmin">后台管理</button>
      <button class="theme-btn" @click="isDarkTheme = !isDarkTheme">
        {{ isDarkTheme ? '亮色' : '暗色' }}
      </button>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding: 14px 32px;
  background: linear-gradient(90deg, #4a6cf7, #7b5cf0);
  color: #fff;
}
.logo { font-size: 20px; letter-spacing: 1px; }

.nav { display: flex; gap: 8px; }

.nav-item {
  padding: 6px 14px;
  border-radius: 20px;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  transition: background 0.25s;
}
.nav-item:hover { background: rgba(255, 255, 255, 0.2); }

/* 导航高亮：精确匹配当前路径 */
.router-link-exact-active {
  background: #fff;
  color: #4a6cf7 !important;
  font-weight: 700;
}

.right { display: flex; gap: 8px; }

.admin-btn,
.theme-btn {
  padding: 6px 14px;
  border: none;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  cursor: pointer;
  font-size: 13px;
  transition: background 0.25s;
}
.admin-btn:hover,
.theme-btn:hover { background: rgba(255, 255, 255, 0.35); }
</style>