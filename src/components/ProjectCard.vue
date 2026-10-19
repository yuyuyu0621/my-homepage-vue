<script setup>
import BaseCard from './BaseCard.vue'
defineProps({ project: { type: Object, required: true } })
</script>

<template>
  <BaseCard>
    <template #header>
      <div style="display:flex;justify-content:space-between;">
        <span>{{ project.name }}</span>
        <span style="font-size:12px;color:var(--primary);background:var(--tag-bg);
        padding:2px 8px;border-radius:10px;">{{ project.status }}</span>
      </div>
    </template>
    <p style="font-size:14px;color:var(--text-muted);margin-bottom:12px;">{{ project.desc }}</p>
    <div style="display:flex;gap:6px;">
      <span v-for="tag in project.tags" :key="tag" style="font-size:12px;
      padding:2px 10px;border-radius:10px;
      background:var(--tag-bg);color:var(--tag-text);">{{ tag }}</span>
    </div>
    <template #footer>
      <button style="padding:6px 14px;border:none;border-radius:6px;background:var(--primary);color:#fff;font-size:13px;">查看详情</button>
    </template>
  </BaseCard>
</template>