export default [
    {
        path: '/student',
        name: 'student.student',
        component: () => import('@/views/student/App.vue'),

        children: [
            {
                path: '',
                name: 'student.login',
                component: () => import('@/views/student/views/auth/Login.vue')
            }
        ]
    }
]