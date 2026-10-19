<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <section>
    <h2 class="layout-title">项目中心</h2>
    <RouterView />
  </section>
</template>

<style scoped>
.layout-title { font-size: 18px; margin-bottom: 16px; color: var(--text); }
</style>