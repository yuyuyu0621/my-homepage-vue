<script setup>
import { RouterView, useRouter, useRoute } from 'vue-router'
import { useUserStore } from '../stores/user'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

function logout() {
  userStore.logout()
  router.replace({ name: 'login' })
}

function handleMenu(index) {
  router.push({ name: index })
}
</script>

<template>
  <section class="admin">
    <div class="header">
      <h2>后台管理</h2>
      <span>{{ userStore.welcome }}</span>
      <el-button type="danger" size="small" @click="logout">退出登录</el-button>
    </div>

    <!-- 使用 Element Plus 菜单 -->
    <el-menu mode="horizontal" :default-active="route.name" class="admin-menu">
      <el-menu-item index="profileEdit" @click="handleMenu('profileEdit')">编辑个人简介</el-menu-item>
      <el-menu-item index="projectEdit" @click="handleMenu('projectEdit')">编辑项目信息</el-menu-item>
      <el-menu-item index="articleEdit" @click="handleMenu('articleEdit')">文章管理</el-menu-item>
    </el-menu>

    <div class="content">
      <RouterView />
    </div>
  </section>
</template>

<style scoped>
.admin { padding: 24px; background: var(--card-bg); border-radius: 12px; }
.header { display: flex; align-items: center; gap: 16px; margin-bottom: 20px; }
.header span { color: var(--text-muted); flex: 1; }
.admin-menu { margin-bottom: 20px; border-radius: 8px; }
</style>