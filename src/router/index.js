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
}, {
  path: '/register',
  name: 'register',
  component: () => import('../views/auth/Signup.vue')
}, {
  path: '/dashboard',
  name: 'dashboard',
  component: () => import('../views/dashboard/Dashboard.vue'),

  children: [
    {
      path: '',
      name: 'home',
      component: () => import('../views/dashboard/routes/Home.vue'),
    },
    {
      path: 'classRooms',
      name: 'classRooms',
      component: () => import('../views/dashboard/routes/classroom/ClassRooms.vue'),

      children: [
        {
          path: '',
          name: 'table',
          component: () => import('../views/dashboard/routes/classroom/routes/Table.vue'),
        },
        {
          path: 'create',
          name: 'create',
          component: () => import('../views/dashboard/routes/classroom/routes/Create.vue'),
        }
      ]
    },
    {
      path: 'Subjects',
      name: 'subjects',
      component: () => import('../views/dashboard/routes/subjects/Subjects.vue'),

      children: [
        {
          path: '',
          name: 'table',
          component: () => import('../views/dashboard/routes/subjects/routes/Table.vue'),
        },
        {
          path: 'create',
          name: 'create',
          component: () => import('../views/dashboard/routes/subjects/routes/Create.vue'),
        }
      ]
    },
    {
      path: 'Students',
      name: 'students',
      component: () => import('../views/dashboard/routes/students/Students.vue'),

      children: [
        {
          path: '',
          name: 'table',
          component: () => import('../views/dashboard/routes/students/routes/Table.vue'),
        },
        {
          path: 'create',
          name: 'create',
          component: () => import('../views/dashboard/routes/students/routes/Create.vue'),
        }
      ]
    },
    {
      path: 'Staffs',
      name: 'staff',
      component: () => import('../views/dashboard/routes/staff/Staff.vue'),

      children: [
        {
          path: '',
          name: 'table',
          component: () => import('../views/dashboard/routes/staff/routes/Table.vue'),
        },
        {
          path: 'create',
          name: 'create',
          component: () => import('../views/dashboard/routes/staff/routes/Create.vue'),
        },
        {
          path: 'createStaffRole',
          name: 'createStaffRole',
          component: () => import('../views/dashboard/routes/staff/routes/StaffRole.vue'),
        },
        {
          path: 'createDepartment',
          name: 'createDepartment',
          component: () => import('../views/dashboard/routes/staff/routes/Department.vue'),
        },
      ]
    },
  ]
}]


const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
