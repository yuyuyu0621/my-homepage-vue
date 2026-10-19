<script setup>
import { ref } from 'vue'
const intro = ref('热爱前端开发，喜欢学习Vue框架。')
const saved = ref(false)

function save() {
  saved.value = true
  setTimeout(() => saved.value = false, 2000)
}
</script>

<template>
  <div>
    <h3>编辑个人简介</h3>
    <textarea v-model="intro" rows="5"></textarea>
    <button @click="save">保存</button>
    <p v-if="saved" class="ok">保存成功！</p>
  </div>
</template>

<style scoped>
textarea { width: 100%; padding: 10px; border-radius: 8px; border: 1px solid var(--input-border); background: var(--input-bg); color: var(--text); margin: 12px 0; }
button { padding: 8px 18px; border: none; border-radius: 8px; background: var(--primary); color: #fff; cursor: pointer; }
.ok { color: #27ae60; margin-top: 8px; }
</style>