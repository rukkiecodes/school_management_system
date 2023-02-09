export default [
    {
        path: '/student',
        name: 'student.student',
        component: () => import('@/views/student/App.vue'),

        children: [
            {
                path: '',
                component: () => import('@/views/student/views/auth/Login.vue')
            },
            {
                path: 'dashboard',
                component: () => import('@/views/student/layout/Layout.vue')
            },
        ]
    }
]