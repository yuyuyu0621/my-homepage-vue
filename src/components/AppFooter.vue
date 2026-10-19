<script setup>
defineProps({
  copyright: { type: String, default: '' }
})

const emit = defineEmits(['back-to-top'])
</script>

<template>
  <footer class="app-footer">
    <span>{{ copyright }}</span>
    <button class="btn" @click="emit('back-to-top')">↑ 回到顶部</button>
  </footer>
</template>

<style scoped>
.app-footer {
  max-width: 620px;
  margin: 24px auto 0;
  padding: 14px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 13px;
  color: var(--text-muted);
}
.btn {
  padding: 6px 16px;
  border: 1px solid var(--primary);
  border-radius: 18px;
  background: transparent;
  color: var(--primary);
  font-size: 13px;
  transition: all 0.2s;
}
.btn:hover { background: var(--primary); color: #fff; }
</style>