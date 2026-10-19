<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div class="not-found">
    <h1>404</h1>
    <p>抱歉，你访问的页面不存在</p>
    <button @click="router.push('/home')">返回首页</button>
  </div>
</template>

<style scoped>
.not-found { text-align: center; padding: 80px 20px; }
.not-found h1 { font-size: 72px; color: var(--primary); }
.not-found p { color: var(--text-muted); margin: 12px 0 24px; }
.not-found button { padding: 10px 24px; border: none; border-radius: 8px; background: var(--primary); color: #fff; cursor: pointer; }
</style>