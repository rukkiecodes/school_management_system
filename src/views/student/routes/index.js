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
                component: () => import('@/views/student/layout/Layout.vue'),

                children: [
                    {
                        path: '',
                        component: () => import('@/views/student/views/overview/Overview.vue')
                    },
                    {
                        path: 'events',
                        component: () => import('@/views/student/views/events/Events.vue')
                    },
                    {
                        path: 'subject',
                        component: () => import('@/views/student/views/subject/Subject.vue')
                    },
                    {
                        path: 'accounting',
                        component: () => import('@/views/student/views/accounting/Accounting.vue')
                    },
                ]
            },
        ]
    }
]