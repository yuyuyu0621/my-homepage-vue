<script setup>
import { storeToRefs } from 'pinia'
import { useArticleStore } from '../stores/article'
const articleStore = useArticleStore()
const { articles } = storeToRefs(articleStore)
</script>

<template>
  <div>
    <h3>文章列表</h3>
    <div v-for="a in articles" :key="a.id" class="article-item">
      <h4>{{ a.title }}</h4>
      <p class="date">{{ a.date }}</p>
      <p>{{ a.content }}</p>
    </div>
  </div>
</template>

<style scoped>
.article-item { padding: 16px; background: var(--card-bg); border-radius: 12px; margin-bottom: 12px; box-shadow: var(--shadow); }
.date { font-size: 12px; color: var(--text-muted); margin: 4px 0 8px; }
</style>