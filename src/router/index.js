import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
  path: '',
  name: 'staffLogin',
  component: () => import('@/views/auth/StaffLogin.vue')
}, {
  path: '/studentLogin',
  name: 'studentLogin',
  component: () => import('@/views/auth/StudentLogin.vue')
}, {
  path: '/studentResult',
  name: 'studentResult',
  component: () => import('@/views/auth/StudentResult.vue')
}, {
  path: '/register',
  name: 'register',
  component: () => import('@/views/auth/Signup.vue')
}, {
  path: '/dashboard',
  name: 'dashboard',
  component: () => import('@/views/dashboard/Dashboard.vue'),

  children: [
    {
      path: '',
      name: 'home',
      component: () => import('@/views/dashboard/routes/Home.vue'),
    },
    {
      path: 'classRooms',
      name: 'classRooms',
      component: () => import('@/views/dashboard/routes/classroom/ClassRooms.vue'),

      children: [
        {
          path: '',
          name: 'table',
          component: () => import('@/views/dashboard/routes/classroom/routes/Table.vue'),
        },
        {
          path: 'create',
          name: 'create',
          component: () => import('@/views/dashboard/routes/classroom/routes/Create.vue'),
        },
        {
          path: 'category',
          name: 'category',
          component: () => import('@/views/dashboard/routes/classroom/routes/category/Category.vue'),

          children: [
            {
              path: '',
              component: () => import('@/views/dashboard/routes/classroom/routes/category/routes/Table.vue'),
            },
            {
              path: 'create',
              component: () => import('@/views/dashboard/routes/classroom/routes/category/routes/Create.vue'),
            }
          ]
        },
        {
          path: 'type',
          name: 'type',
          component: () => import('@/views/dashboard/routes/classroom/routes/type/Type.vue'),

          children: [
            {
              path: '',
              component: () => import('@/views/dashboard/routes/classroom/routes/type/routes/Table.vue'),
            },
            {
              path: 'create',
              component: () => import('@/views/dashboard/routes/classroom/routes/type/routes/Create.vue'),
            }
          ]
        },
        {
          path: 'level',
          name: 'level',
          component: () => import('@/views/dashboard/routes/classroom/routes/level/Level.vue'),

          children: [
            {
              path: '',
              component: () => import('@/views/dashboard/routes/classroom/routes/level/routes/Table.vue'),
            },
            {
              path: 'create',
              component: () => import('@/views/dashboard/routes/classroom/routes/level/routes/Create.vue'),
            }
          ]
        },
      ]
    },
    {
      path: 'staffs',
      name: 'staff',
      component: () => import('@/views/dashboard/routes/staff/Staff.vue'),

      children: [
        {
          path: '',
          component: () => import('@/views/dashboard/routes/staff/routes/Table.vue'),
        },
        {
          path: 'create',
          component: () => import('@/views/dashboard/routes/staff/routes/Create.vue'),
        },
        {
          path: ':id',
          component: () => import('@/views/dashboard/routes/staff/routes/ViewStaff.vue'),
        },
        {
          path: 'createStaffRole',
          component: () => import('@/views/dashboard/routes/staff/routes/StaffRole.vue'),
        },
        {
          path: 'createDepartment',
          component: () => import('@/views/dashboard/routes/staff/routes/Department.vue'),
        },
      ]
    },
    {
      path: 'students',
      name: 'students',
      component: () => import('@/views/dashboard/routes/students/Students.vue'),

      children: [
        {
          path: '',
          component: () => import('@/views/dashboard/routes/students/routes/Table.vue'),
        },
        {
          path: 'create',
          component: () => import('@/views/dashboard/routes/students/routes/Create.vue'),
        },
        {
          path: 'upload',
          component: () => import('@/views/dashboard/routes/students/routes/Upload.vue'),
        }
      ]
    },
    {
      path: 'subjects',
      name: 'subjects',
      component: () => import('@/views/dashboard/routes/subjects/Subjects.vue'),

      children: [
        {
          path: '',
          component: () => import('@/views/dashboard/routes/subjects/routes/Table.vue'),
        },
        {
          path: 'create',
          component: () => import('@/views/dashboard/routes/subjects/routes/Create.vue'),
        },
        {
          path: 'strength',
          component: () => import('@/views/dashboard/routes/subjects/routes/Strength.vue'),

          children: [
            {
              path: '',
              component: () => import('@/views/dashboard/routes/subjects/routes/strengthRoutes/Table.vue'),
            },
            {
              path: 'create',
              component: () => import('@/views/dashboard/routes/subjects/routes/strengthRoutes/Create.vue'),
            }
          ]
        },
        {
          path: 'category',
          component: () => import('@/views/dashboard/routes/subjects/category/Category.vue'),

          children: [
            {
              path: '',
              component: () => import('@/views/dashboard/routes/subjects/category/routes/Table.vue'),
            },
            {
              path: 'create',
              component: () => import('@/views/dashboard/routes/subjects/category/routes/Create.vue'),
            }
          ]
        },
      ]
    },
    {
      path: 'departments',
      name: 'departments',
      component: () => import('@/views/dashboard/routes/departments/Departments.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/dashboard/routes/departments/routes/Table.vue'),
        },
        {
          path: 'create',
          component: () => import('@/views/dashboard/routes/departments/routes/Create.vue'),
        }
      ]
    },
    {
      path: 'announcements',
      name: 'announcements',
      component: () => import('@/views/dashboard/routes/announcements/Announcements.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/dashboard/routes/announcements/routes/Table.vue'),
        },
        {
          path: 'create',
          component: () => import('@/views/dashboard/routes/announcements/routes/Create.vue'),
        },
        {
          path: 'calendar',
          component: () => import('@/views/dashboard/routes/announcements/routes/Calendar.vue'),
        }
      ]
    },
    {
      path: 'grading',
      name: 'grading',
      component: () => import('@/views/dashboard/routes/grading/Grading.vue'),

      children: [
        {
          path: '',
          component: () => import('@/views/dashboard/routes/grading/routes/UpdateGrade.vue'),
        },
        {
          path: 'bsgrade',
          component: () => import('@/views/dashboard/routes/grading/routes/BSGrade.vue'),
        },
        {
          path: 'attendance',
          component: () => import('@/views/dashboard/routes/grading/routes/Attendance.vue'),
        },
        {
          path: 'upload',
          component: () => import('@/views/dashboard/routes/grading/routes/Upload.vue'),
        },
        {
          path: 'addBSGrade',
          component: () => import('@/views/dashboard/routes/grading/routes/AddBSGrade.vue'),
        },
        {
          path: 'viewBSGrade',
          component: () => import('@/views/dashboard/routes/grading/routes/ViewBSGrade.vue'),
        },
        {
          path: 'configureGrading',
          component: () => import('@/views/dashboard/routes/grading/routes/configureGrading/ConfigureGrading.vue'),

          children: [
            {
              path: 'gradeBreakDown',
              component: () => import('@/views/dashboard/routes/grading/routes/configureGrading/routes/GradeBreakDown.vue'),
            },
            {
              path: 'createBreakDown',
              component: () => import('@/views/dashboard/routes/grading/routes/configureGrading/routes/CreateBreakDown.vue'),
            },
            {
              path: 'gradeLetterings',
              component: () => import('@/views/dashboard/routes/grading/routes/configureGrading/routes/GradeLetterings.vue'),
            },
            {
              path: 'createGradeLetter',
              component: () => import('@/views/dashboard/routes/grading/routes/configureGrading/routes/CreateGradeLetter.vue'),
            },
            {
              path: 'gradeComments',
              component: () => import('@/views/dashboard/routes/grading/routes/configureGrading/routes/GradeComments.vue'),
            },
            {
              path: 'createGradeComments',
              component: () => import('@/views/dashboard/routes/grading/routes/configureGrading/routes/CreateGradeComments.vue'),
            },
            {
              path: 'gradeModels',
              component: () => import('@/views/dashboard/routes/grading/routes/configureGrading/routes/GradeModels.vue'),
            },
            {
              path: 'createGradeModels',
              component: () => import('@/views/dashboard/routes/grading/routes/configureGrading/routes/CreateGradeModels.vue'),
            },
            {
              path: 'promotionCriteria',
              component: () => import('@/views/dashboard/routes/grading/routes/configureGrading/routes/PromotionCriteria.vue'),
            },
            {
              path: 'createPromotionCriteria',
              component: () => import('@/views/dashboard/routes/grading/routes/configureGrading/routes/CreatePromotionCriteria.vue'),
            },
            {
              path: 'promotionRules',
              component: () => import('@/views/dashboard/routes/grading/routes/configureGrading/routes/PromotionRules.vue'),
            },
            {
              path: 'createPromotionRules',
              component: () => import('@/views/dashboard/routes/grading/routes/configureGrading/routes/CreatePromotionRules.vue'),
            },
            {
              path: 'resultSettings',
              component: () => import('@/views/dashboard/routes/grading/routes/configureGrading/routes/ResultSettings.vue'),
            },
          ]
        },
      ]
    },

    {
      path: 'accounting',
      name: 'accounting',
      component: () => import('@/views/dashboard/routes/accounting/Accounting.vue'),

      children: [
        {
          path: 'addFee',
          component: () => import('@/views/dashboard/routes/accounting/routes/AddFee.vue'),
        },
        {
          path: 'viewFees',
          component: () => import('@/views/dashboard/routes/accounting/routes/viewFees/ViewFees.vue'),

          children: [
            {
              path: '',
              component: () => import('@/views/dashboard/routes/accounting/routes/viewFees/routes/Table.vue'),
            },
            {
              path: 'create',
              component: () => import('@/views/dashboard/routes/accounting/routes/viewFees/routes/Create.vue'),
            },
          ]
        },

        {
          path: 'budget',
          name: 'budget',
          component: () => import('@/views/dashboard/routes/budget/Budget.vue'),

          children: [
            {
              path: 'viewBudgets',
              component: () => import('@/views/dashboard/routes/budget/routes/ViewBudgets.vue'),
            },
            {
              path: 'addBudget',
              component: () => import('@/views/dashboard/routes/budget/routes/AddBudget.vue'),
            }
          ]
        },

        {
          path: 'paymentReport',
          name: 'paymentReport',
          component: () => import('@/views/dashboard/routes/paymentReport/PaymentReport.vue'),

          children: [
            {
              path: '',
              component: () => import('@/views/dashboard/routes/paymentReport/routes/ViewReports.vue'),
            }
          ]
        }
      ]
    },

    {
      path: 'funds',
      name: 'funds',
      component: () => import('@/views/dashboard/routes/funds/Funds.vue'),

      children: [
        {
          path: 'addFund',
          component: () => import('@/views/dashboard/routes/funds/routes/AddFund.vue'),
        },
        {
          path: 'viewFunds',
          component: () => import('@/views/dashboard/routes/funds/routes/viewFunds/ViewFunds.vue'),

          children: [
            {
              path: '',
              component: () => import('@/views/dashboard/routes/funds/routes/viewFunds/routes/Table.vue'),
            },
            {
              path: ':id',
              component: () => import('@/views/dashboard/routes/funds/routes/viewFunds/routes/ViewFund.vue'),
            },
          ]
        },
      ]
    },
    {
      path: 'accountingItems',
      name: 'accountingItems',
      component: () => import('@/views/dashboard/routes/accountingItems/AccountingItems.vue'),

      children: [
        {
          path: 'createCategoies',
          component: () => import('@/views/dashboard/routes/accountingItems/routes/CreateCategoies.vue'),
        },
        {
          path: 'viewCategoies',
          component: () => import('@/views/dashboard/routes/accountingItems/routes/ViewCategoies.vue'),
        },
        {
          path: ':id',
          component: () => import('@/views/dashboard/routes/accountingItems/routes/ViewCategory.vue'),
        },
      ]
    }
  ]
}]


const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
