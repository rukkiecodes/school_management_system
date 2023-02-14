export default [
    {
        path: '/staff',
        name: 'staff.staff',
        component: () => import('@/views/staff/App.vue'),

        children: [
            {
                path: '',
                component: () => import('@/views/staff/views/auth/Login.vue')
            },
            {
                path: 'dashboard',
                component: () => import('@/views/staff/layout/Layout.vue'),

                children: [
                    {
                        path: '',
                        component: () => import('@/views/staff/views/overview/Overview.vue')
                    },
                    {
                        path: 'overview',
                        component: () => import('@/views/staff/views/overview/Overview.vue')
                    },
                    {
                        path: 'events',
                        component: () => import('@/views/staff/views/events/Events.vue')
                    },
                    {
                        path: 'subject',
                        component: () => import('@/views/staff/views/subject/Subject.vue')
                    },
                    {
                        path: 'accounting',
                        component: () => import('@/views/staff/views/accounting/Accounting.vue')
                    },
                    {
                        path: 'grades',
                        component: () => import('@/views/staff/views/grades/Grades.vue')
                    },
                ]
            },
        ]
    }
]