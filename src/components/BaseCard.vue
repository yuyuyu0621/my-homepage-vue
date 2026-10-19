<script setup>
defineProps({ title: { type: String, default: '' } })
</script>

<template>
  <div class="base-card">
    <div class="card-header">
      <slot name="header"><h4>{{ title }}</h4></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.base-card {
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: var(--shadow);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
}
.base-card:hover { transform: translateY(-4px); }
.card-header { padding: 14px 18px; border-bottom: 1px solid var(--input-border); font-weight: 600; }
.card-body { padding: 18px; flex: 1; color: var(--text); }
.card-footer { padding: 12px 18px; border-top: 1px solid var(--input-border); display: flex; gap: 10px; }
</style>