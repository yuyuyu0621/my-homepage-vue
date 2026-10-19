<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const projects = [
  { id: 1, name: '个人主页', desc: '基于Vue3 + Vite开发的响应式个人主页。', tags: ['Vue3','CSS'], status: '已完成', detail: '用 Vue3 组合式 API 完成的个人主页项目。' },
  { id: 2, name: '图书管理系统', desc: '课程设计项目，实现图书借阅与查询功能。', tags: ['Java','MySQL'], status: '开发中', detail: 'Java + MySQL 实现的图书借阅管理系统。' },
  { id: 3, name: '待办清单', desc: '练习组件通信与本地存储的小项目。', tags: ['Vue3','LocalStorage'], status: '已完成', detail: '练习 Vue3 组件通信和 localStorage 的待办清单。' }
]

// 路由参数类型是字符串，需要 Number 转换
const id = Number(route.params.id)
const project = computed(() => projects.find(p => p.id === id))

// 无效 id 处理：replace 回列表
if (!project.value) {
  router.replace({ name: 'projectList' })
}

function goBack() { router.go(-1) }
function goList() { router.push({ name: 'projectList' }) }
</script>

<template>
  <div v-if="project" class="detail">
    <h3>{{ project.name }}</h3>
    <p class="desc">{{ project.desc }}</p>
    <p>{{ project.detail }}</p>
    <div class="tags">
      <span v-for="t in project.tags" :key="t" class="tag">{{ t }}</span>
    </div>
    <p class="status">状态：{{ project.status }}</p>
    <div class="actions">
      <button @click="goBack">返回上一页</button>
      <button @click="goList">返回列表</button>
    </div>
  </div>
</template>

<style scoped>
.detail { padding: 20px; background: var(--card-bg); border-radius: 12px; }
.desc { color: var(--text-muted); margin: 8px 0; }
.tags { display: flex; gap: 6px; margin: 10px 0; }
.tag { font-size: 12px; padding: 2px 10px; border-radius: 10px; background: var(--tag-bg); color: var(--tag-text); }
.actions { margin-top: 16px; display: flex; gap: 10px; }
button { padding: 8px 16px; border: none; border-radius: 8px; background: var(--primary); color: #fff; cursor: pointer; }
</style>