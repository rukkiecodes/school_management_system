import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
  path: '',
  name: 'staffLogin',
  component: () => import('../views/auth/StaffLogin.vue')
}, {
  path: '/studentLogin',
  name: 'studentLogin',
  component: () => import('../views/auth/StudentLogin.vue')
}, {
  path: '/studentResult',
  name: 'studentResult',
  component: () => import('../views/auth/StudentResult.vue')
}]


const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
