export default [
    {
        path: '',
        name: 'login',
        component: () => import('@/views/admin/auth/Login.vue')
    }, {
        path: '/register',
        name: 'register',
        component: () => import('@/views/admin/auth/Signup.vue')
    }, {
        path: '/admin',
        name: 'dashboard',
        component: () => import('@/views/admin/admin/Dashboard.vue'),

        children: [
            {
                path: '',
                name: 'home',
                component: () => import('@/views/admin/admin/routes/Home.vue'),
            },
            {
                path: 'classRooms',
                name: 'classRooms',
                component: () => import('@/views/admin/admin/routes/classroom/ClassRooms.vue'),

                children: [
                    {
                        path: '',
                        name: 'table',
                        component: () => import('@/views/admin/admin/routes/classroom/routes/Table.vue'),
                    },
                    {
                        path: 'create',
                        name: 'create',
                        component: () => import('@/views/admin/admin/routes/classroom/routes/Create.vue'),
                    },
                    {
                        path: 'category',
                        name: 'category',
                        component: () => import('@/views/admin/admin/routes/classroom/routes/category/Category.vue'),

                        children: [
                            {
                                path: '',
                                component: () => import('@/views/admin/admin/routes/classroom/routes/category/routes/Table.vue'),
                            },
                            {
                                path: 'create',
                                component: () => import('@/views/admin/admin/routes/classroom/routes/category/routes/Create.vue'),
                            }
                        ]
                    },
                    {
                        path: 'type',
                        name: 'type',
                        component: () => import('@/views/admin/admin/routes/classroom/routes/type/Type.vue'),

                        children: [
                            {
                                path: '',
                                component: () => import('@/views/admin/admin/routes/classroom/routes/type/routes/Table.vue'),
                            },
                            {
                                path: 'create',
                                component: () => import('@/views/admin/admin/routes/classroom/routes/type/routes/Create.vue'),
                            }
                        ]
                    },
                    {
                        path: 'level',
                        name: 'level',
                        component: () => import('@/views/admin/admin/routes/classroom/routes/level/Level.vue'),

                        children: [
                            {
                                path: '',
                                component: () => import('@/views/admin/admin/routes/classroom/routes/level/routes/Table.vue'),
                            },
                            {
                                path: 'create',
                                component: () => import('@/views/admin/admin/routes/classroom/routes/level/routes/Create.vue'),
                            }
                        ]
                    },
                ]
            },
            {
                path: 'staffs',
                name: 'staff',
                component: () => import('@/views/admin/admin/routes/staff/Staff.vue'),

                children: [
                    {
                        path: '',
                        component: () => import('@/views/admin/admin/routes/staff/routes/Table.vue'),
                    },
                    {
                        path: 'create',
                        component: () => import('@/views/admin/admin/routes/staff/routes/Create.vue'),
                    },
                    {
                        path: ':id',
                        component: () => import('@/views/admin/admin/routes/staff/routes/ViewStaff.vue'),
                    },
                    {
                        path: 'createStaffRole',
                        component: () => import('@/views/admin/admin/routes/staff/routes/StaffRole.vue'),
                    },
                    {
                        path: 'createDepartment',
                        component: () => import('@/views/admin/admin/routes/staff/routes/Department.vue'),
                    },
                ]
            },
            {
                path: 'students',
                name: 'students',
                component: () => import('@/views/admin/admin/routes/students/Students.vue'),

                children: [
                    {
                        path: '',
                        component: () => import('@/views/admin/admin/routes/students/routes/Table.vue'),
                    },
                    {
                        path: 'create',
                        component: () => import('@/views/admin/admin/routes/students/routes/Create.vue'),
                    },
                    {
                        path: ':id',
                        component: () => import('@/views/admin/admin/routes/students/routes/ViewStudent.vue'),
                    }
                ]
            },
            {
                path: 'subjects',
                name: 'subjects',
                component: () => import('@/views/admin/admin/routes/subjects/Subjects.vue'),

                children: [
                    {
                        path: '',
                        component: () => import('@/views/admin/admin/routes/subjects/routes/Table.vue'),
                    },
                    {
                        path: 'create',
                        component: () => import('@/views/admin/admin/routes/subjects/routes/Create.vue'),
                    },
                    {
                        path: ':id',
                        component: () => import('@/views/admin/admin/routes/subjects/routes/ViewSubject.vue'),
                    },
                    {
                        path: 'category',
                        component: () => import('@/views/admin/admin/routes/subjects/category/Category.vue'),

                        children: [
                            {
                                path: '',
                                component: () => import('@/views/admin/admin/routes/subjects/category/routes/Table.vue'),
                            },
                            {
                                path: 'create',
                                component: () => import('@/views/admin/admin/routes/subjects/category/routes/Create.vue'),
                            },
                            {
                                path: ':id',
                                component: () => import('@/views/admin/admin/routes/subjects/category/routes/ViewSubjectCategory.vue'),
                            }
                        ]
                    },
                ]
            },
            {
                path: 'departments',
                name: 'departments',
                component: () => import('@/views/admin/admin/routes/departments/Departments.vue'),
                children: [
                    {
                        path: '',
                        component: () => import('@/views/admin/admin/routes/departments/routes/Table.vue'),
                    },
                    {
                        path: 'create',
                        component: () => import('@/views/admin/admin/routes/departments/routes/Create.vue'),
                    }
                ]
            },
            {
                path: 'announcements',
                name: 'announcements',
                component: () => import('@/views/admin/admin/routes/announcements/Announcements.vue'),
                children: [
                    {
                        path: '',
                        component: () => import('@/views/admin/admin/routes/announcements/routes/Table.vue'),
                    },
                    {
                        path: 'create',
                        component: () => import('@/views/admin/admin/routes/announcements/routes/Create.vue'),
                    }
                ]
            },
            {
                path: 'grading',
                name: 'grading',
                component: () => import('@/views/admin/admin/routes/grading/Grading.vue'),

                children: [
                    {
                        path: '',
                        component: () => import('@/views/admin/admin/routes/grading/routes/ViewGrades.vue'),
                    },
                    {
                        path: 'createGrade',
                        component: () => import('@/views/admin/admin/routes/grading/routes/CreateGrade.vue'),
                    },
                    {
                        path: 'createAttendance',
                        component: () => import('@/views/admin/admin/routes/grading/routes/Attendance.vue'),
                    },
                    {
                        path: 'viewAttendance',
                        component: () => import('@/views/admin/admin/routes/grading/routes/ViewAttendance.vue'),
                    },
                    {
                        path: 'addBSGrade',
                        component: () => import('@/views/admin/admin/routes/grading/routes/AddBSGrade.vue'),
                    },
                    {
                        path: 'viewBSGrade',
                        component: () => import('@/views/admin/admin/routes/grading/routes/ViewBSGrade.vue'),
                    },
                ]
            },

            {
                path: 'accounting',
                name: 'accounting',
                component: () => import('@/views/admin/admin/routes/accounting/Accounting.vue'),

                children: [
                    {
                        path: 'addFee',
                        component: () => import('@/views/admin/admin/routes/accounting/routes/AddFee.vue'),
                    },
                    {
                        path: 'viewFees',
                        component: () => import('@/views/admin/admin/routes/accounting/routes/viewFees/ViewFees.vue'),

                        children: [
                            {
                                path: '',
                                component: () => import('@/views/admin/admin/routes/accounting/routes/viewFees/routes/Table.vue'),
                            },
                            {
                                path: 'create',
                                component: () => import('@/views/admin/admin/routes/accounting/routes/viewFees/routes/Create.vue'),
                            },
                        ]
                    },

                    {
                        path: 'budget',
                        name: 'budget',
                        component: () => import('@/views/admin/admin/routes/budget/Budget.vue'),

                        children: [
                            {
                                path: 'viewBudgets',
                                component: () => import('@/views/admin/admin/routes/budget/routes/ViewBudgets.vue'),
                            },
                            {
                                path: 'addBudget',
                                component: () => import('@/views/admin/admin/routes/budget/routes/AddBudget.vue'),
                            }
                        ]
                    },

                    {
                        path: 'paymentReport',
                        name: 'paymentReport',
                        component: () => import('@/views/admin/admin/routes/paymentReport/PaymentReport.vue'),

                        children: [
                            {
                                path: '',
                                component: () => import('@/views/admin/admin/routes/paymentReport/routes/ViewReports.vue'),
                            }
                        ]
                    }
                ]
            },

            {
                path: 'funds',
                name: 'funds',
                component: () => import('@/views/admin/admin/routes/funds/Funds.vue'),

                children: [
                    {
                        path: 'addFund',
                        component: () => import('@/views/admin/admin/routes/funds/routes/AddFund.vue'),
                    },
                    {
                        path: 'viewFunds',
                        component: () => import('@/views/admin/admin/routes/funds/routes/viewFunds/ViewFunds.vue'),

                        children: [
                            {
                                path: '',
                                component: () => import('@/views/admin/admin/routes/funds/routes/viewFunds/routes/Table.vue'),
                            },
                            {
                                path: ':id',
                                component: () => import('@/views/admin/admin/routes/funds/routes/viewFunds/routes/ViewFund.vue'),
                            },
                        ]
                    },
                ]
            },
            {
                path: 'accountingItems',
                name: 'accountingItems',
                component: () => import('@/views/admin/admin/routes/accountingItems/AccountingItems.vue'),

                children: [
                    {
                        path: 'createCategoies',
                        component: () => import('@/views/admin/admin/routes/accountingItems/routes/CreateCategoies.vue'),
                    },
                    {
                        path: 'viewCategoies',
                        component: () => import('@/views/admin/admin/routes/accountingItems/routes/ViewCategoies.vue'),
                    },
                    {
                        path: ':id',
                        component: () => import('@/views/admin/admin/routes/accountingItems/routes/ViewCategory.vue'),
                    },
                ]
            }
        ]
    }
]