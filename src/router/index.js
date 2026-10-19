import { createRouter, createWebHashHistory } from 'vue-router'
import { useUserStore } from '../stores/user'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectLayout from '../views/ProjectLayout.vue'
import ProjectList from '../views/ProjectList.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
import LoginView from '../views/LoginView.vue'
import AdminLayout from '../views/AdminLayout.vue'
import ProfileEdit from '../views/ProfileEdit.vue'
import ProjectEdit from '../views/ProjectEdit.vue'
import ArticleListView from '../views/ArticleListView.vue'
import ArticleManage from '../views/ArticleManage.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: HomeView, meta: { title: '首页' } },
  { path: '/about', name: 'about', component: AboutView, meta: { title: '关于我' } },
  { path: '/articles', name: 'articleList', component: ArticleListView, meta: { title: '文章列表' } },

  {
    path: '/projects',
    component: ProjectLayout,
    meta: { title: '项目中心' },
    children: [
      { path: '', name: 'projectList', component: ProjectList, meta: { title: '项目列表' } },
      { path: ':id', name: 'projectDetail', component: ProjectDetail, meta: { title: '项目详情' } }
    ]
  },

  { path: '/login', name: 'login', component: LoginView, meta: { title: '身份认证' } },

  {
    path: '/admin',
    component: AdminLayout,
    meta: { title: '后台管理', requiresAuth: true },
    children: [
      { path: '', redirect: '/admin/profile' },
      { path: 'profile', name: 'profileEdit', component: ProfileEdit, meta: { title: '编辑个人简介', requiresAuth: true } },
      { path: 'project', name: 'projectEdit', component: ProjectEdit, meta: { title: '编辑项目信息', requiresAuth: true } },
      { path: 'article', name: 'articleEdit', component: ArticleManage, meta: { title: '文章管理', requiresAuth: true } }
    ]
  },

  { path: '/:pathMatch(.*)*', name: 'notFound', component: NotFound, meta: { title: '页面不存在' } }
]

const router = createRouter({
  history: createWebHashHistory(), // 【关键】改成 Hash 模式
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} - 熊艳的个人主页` : '熊艳的个人主页'
  const userStore = useUserStore()
  if (to.meta.requiresAuth && !userStore.isLoggedIn) {
    next({ name: 'login', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

export default router