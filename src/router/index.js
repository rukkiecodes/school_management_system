import {
  createRouter,
  createWebHistory
} from 'vue-router'

import admin from '@/views/admin/routes'

const routes = [
  //admin routes
  ...admin
]


const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
