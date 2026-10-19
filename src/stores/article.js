import { defineStore } from 'pinia'

export const useArticleStore = defineStore('article', {
  state: () => ({
    articles: JSON.parse(localStorage.getItem('articles') || 'null') || [
      { id: 1, title: 'Vue3 组合式 API 学习笔记', content: 'ref 与 reactive 的区别...', date: '2026-10-01' },
      { id: 2, title: 'Vue Router 路由守卫总结', content: 'beforeEach 参数含义...', date: '2026-10-08' }
    ]
  }),
  getters: {
    total: (state) => state.articles.length
  },
  actions: {
    addArticle(a) {
      const date = new Date().toISOString().slice(0, 10)
      this.articles.push({ id: Date.now(), date, ...a })
      this.save()
    },
    updateArticle(id, data) {
      const i = this.articles.findIndex(a => a.id === id)
      if (i > -1) this.articles[i] = { ...this.articles[i], ...data }
      this.save()
    },
    deleteArticle(id) {
      this.articles = this.articles.filter(a => a.id !== id)
      this.save()
    },
    save() {
      localStorage.setItem('articles', JSON.stringify(this.articles))
    }
  }
})