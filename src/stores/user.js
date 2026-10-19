import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
    username: localStorage.getItem('username') || ''
  }),
  getters: {
    welcome: (state) => state.isLoggedIn ? `欢迎，${state.username}` : '未登录'
  },
  actions: {
    login(username = '熊艳') {
      this.isLoggedIn = true
      this.username = username
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('username', username)
    },
    logout() {
      this.isLoggedIn = false
      this.username = ''
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('username')
    }
  }
})