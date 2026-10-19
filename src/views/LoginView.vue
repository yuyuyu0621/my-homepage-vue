<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '../stores/user'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const password = ref('')
const error = ref('')

function handleLogin() {
  if (password.value === '123456') {
    userStore.login('熊艳')
    router.replace(route.query.redirect || '/admin/profile')
  } else {
    error.value = '密码错误，请重新输入'
  }
}
</script>

<template>
  <div class="login">
    <h2>后台管理登录</h2>
    <p class="tip">演示密码：123456</p>
    <input v-model="password" type="password" placeholder="请输入密码" />
    <button @click="handleLogin">登录</button>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<style scoped>
.login { max-width: 360px; margin: 60px auto; padding: 24px; background: var(--card-bg); border-radius: 12px; text-align: center; }
.tip { color: var(--text-muted); font-size: 13px; margin: 8px 0; }
input { width: 100%; padding: 10px; margin: 12px 0; border: 1px solid var(--input-border); border-radius: 8px; background: var(--input-bg); color: var(--text); }
button { width: 100%; padding: 10px; border: none; border-radius: 8px; background: var(--primary); color: #fff; cursor: pointer; }
.error { color: #e74c3c; font-size: 13px; margin-top: 10px; }
</style>