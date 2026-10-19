import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: JSON.parse(localStorage.getItem('projects') || 'null') || [
      { id: 1, name: '个人主页', desc: '基于Vue3 + Vite开发的响应式个人主页。', tags: ['Vue3','CSS'], status: '已完成' },
      { id: 2, name: '图书管理系统', desc: '课程设计项目，实现图书借阅与查询功能。', tags: ['Java','MySQL'], status: '开发中' },
      { id: 3, name: '待办清单', desc: '练习组件通信与本地存储的小项目。', tags: ['Vue3','LocalStorage'], status: '已完成' }
    ]
  }),
  getters: {
    total: (state) => state.projects.length,
    finished: (state) => state.projects.filter(p => p.status === '已完成')
  },
  actions: {
    addProject(p) {
      this.projects.push({ id: Date.now(), ...p })
      this.save()
    },
    updateProject(id, data) {
      const i = this.projects.findIndex(p => p.id === id)
      if (i > -1) this.projects[i] = { ...this.projects[i], ...data }
      this.save()
    },
    deleteProject(id) {
      this.projects = this.projects.filter(p => p.id !== id)
      this.save()
    },
    save() {
      localStorage.setItem('projects', JSON.stringify(this.projects))
    }
  }
})