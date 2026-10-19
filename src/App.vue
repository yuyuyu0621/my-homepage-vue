<script setup>
import { ref, reactive, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

const isDarkTheme = ref(false)

onMounted(() => {
  console.log('App 挂载完成')
})

const copyright = "© 2026 熊艳 249980737 · 24计科2班"

function handleBackTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="app" :class="{ 'dark-theme': isDarkTheme }">
    <AppHeader v-model:is-dark-theme="isDarkTheme" title="熊艳的个人主页" />

    <main class="main">
      <RouterView />
    </main>

    <AppFooter :copyright="copyright" @back-to-top="handleBackTop" />
  </div>
</template>

<style>
/* ===== 保留你原来的亮色 / 暗色主题变量，这里不做修改 ===== */
.app {
  min-height: 100vh; padding: 30px 0;
  background: linear-gradient(135deg, #f0f4f9, #e6edf7);
  color: #222; transition: all 0.3s ease;
  --card-bg: #ffffff; --text: #222222; --text-muted: #888888;
  --primary: #4080e8; --primary-hover: #2e69c9;
  --purple: #7857e2; --purple-hover: #6344cc;
  --strong: #3672cc; --input-border: #ccd6e0;
  --input-bg: #ffffff; --input-text: #222;
  --block-bg: #f7f9fc; --tag-bg: #e2edff;
  --tag-text: #2c5799; --shadow: 0 8px 30px rgba(0,0,0,0.08);
}
.app.dark-theme {
  background: #171824; color: #eeeeee;
  --card-bg: #242538; --text: #eeeeee; --text-muted: #9aa0b5;
  --strong: #7cb3ff; --input-border: #4e5172;
  --input-bg: #33354f; --input-text: #fff;
  --block-bg: #2c2e44; --tag-bg: #383a54;
  --tag-text: #c7d8f5; --shadow: 0 8px 30px rgba(0,0,0,0.25);
}
.main {
  max-width: 620px; margin: 0 auto; padding: 0 15px;
  display: flex; flex-direction: column; gap: 20px;
}
</style>