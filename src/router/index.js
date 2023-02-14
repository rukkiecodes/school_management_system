import {
  createRouter,
  createWebHistory
} from 'vue-router'

import admin from '@/views/admin/routes'
import student from '@/views/student/routes'
import staff from '@/views/staff/routes'

const routes = [
  //admin routes
  ...admin,
  //student routes
  ...student,
  // staff routes
  ...staff
]


const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
