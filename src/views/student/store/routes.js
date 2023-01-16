export default [
    {
        to: '/admin',
        title: 'Dashboard',
        icon: 'mdi-home',
        menu: false
    },
    {
        name: 'Staff',
        menu: true,
        icon: 'mdi-account',
        show: false,

        routes: [
            {
                title: 'Add Staff',
                icon: 'mdi-account-plus',
                to: '/admin/staffs/create',
                menu: false
            },
            {
                title: 'View Staff',
                icon: 'mdi-magnify',
                to: '/admin/staffs',
                menu: false
            }
        ]
    },
    {
        name: 'Students',
        menu: true,
        icon: 'mdi-account-group',
        show: false,

        routes: [
            {
                title: 'Add Student',
                icon: 'mdi-account-plus',
                to: '/admin/students/create',
                menu: false
            },
            {
                title: 'View Students',
                icon: 'mdi-magnify',
                to: '/admin/students',
                menu: false
            }
        ]
    },
    {
        name: 'Subjects',
        menu: true,
        icon: 'mdi-book-open',
        show: false,

        routes: [
            {
                title: 'Add Subject Categories',
                icon: 'mdi-plus-circle',
                to: '/admin/subjects/category/create',
                menu: false
            },
            {
                title: 'Add Subject',
                icon: 'mdi-plus-circle',
                to: '/admin/subjects/create',
                menu: false
            },
            {
                title: 'View Subject Categories',
                icon: 'mdi-magnify',
                to: '/admin/subjects/category',
                menu: false
            },
            {
                title: 'View Subjects',
                icon: 'mdi-magnify',
                to: '/admin/subjects',
                menu: false
            },
        ]
    },
    {
        name: 'Class rooms',
        menu: true,
        icon: 'mdi-school-outline',
        show: false,

        routes: [
            {
                title: 'Add Class Room',
                icon: 'mdi-database-plus-outline',
                to: '/admin/classRooms/create',
                menu: false
            },
            {
                title: 'View Class Rooms',
                icon: 'mdi-magnify',
                to: '/admin/classRooms',
                menu: false
            },
            {
                title: 'Add Class Categories',
                icon: 'mdi-database-plus-outline',
                to: '/admin/classRooms/category/create',
                menu: false
            },
            {
                title: 'View Class Categories',
                icon: 'mdi-magnify',
                to: '/admin/classRooms/category',
                menu: false
            },
            {
                title: 'Add Level',
                icon: 'mdi-database-plus-outline',
                to: '/admin/classRooms/level/create',
                menu: false
            },
            {
                title: 'View Levels',
                icon: 'mdi-magnify',
                to: '/admin/classRooms/level',
                menu: false
            },
            {
                title: 'Add Class Type',
                icon: 'mdi-database-plus-outline',
                to: '/admin/classRooms/type/create',
                menu: false
            },
            {
                title: 'View Class Types',
                icon: 'mdi-magnify',
                to: '/admin/classRooms/type',
                menu: false
            },
        ]
    },
    {
        to: '/admin/departments',
        title: 'Departments',
        icon: 'mdi-office-building',
        menu: false
    },
    {
        name: 'Announcements',
        menu: true,
        icon: 'mdi-calendar-month-outline',
        show: false,

        routes: [
            {
                title: 'Add Announcements',
                icon: 'mdi-calendar-month',
                to: '/admin/announcements/create',
            },
            {
                title: 'View Announcements',
                icon: 'mdi-calendar-month',
                to: '/admin/announcements',
                menu: false
            }
        ]
    },
    {
        name: 'Grading',
        menu: true,
        icon: 'mdi-bookshelf',
        show: false,

        routes: [
            {
                title: 'Add Grades',
                icon: 'mdi-book-open-page-variant-outline',
                to: '/admin/grading/createGrade',
            },
            {
                title: 'View Grades',
                icon: 'mdi-book-open-page-variant-outline',
                to: '/admin/grading',
            },
            {
                title: 'Add Attendance',
                icon: 'mdi-book-open-page-variant-outline',
                to: '/admin/grading/createAttendance',
            },
            {
                title: 'View Attendance',
                icon: 'mdi-book-open-page-variant-outline',
                to: '/admin/grading/viewAttendance',
            },
            {
                title: 'Add B/S Grades',
                icon: 'mdi-calculator',
                to: '/admin/grading/addBSGrade',
                menu: false
            },
            {
                title: 'View B/S Grades',
                icon: 'mdi-calculator',
                to: '/admin/grading/viewBSGrade',
                menu: false
            }
        ]
    },
    {
        name: 'Accounting',
        menu: true,
        icon: 'mdi-bank',
        show: false,

        routes: [
            {
                title: 'Fees',
                icon: 'mdi-cash',
                menu: true,
                show: false,

                routes: [
                    { title: 'Add Fee Item', to: '/admin/accounting/addFee' },
                    { title: 'View Fees', to: '/admin/accounting/viewFees' },
                ]
            },
            {
                title: 'Accounting Items',
                icon: 'mdi-bank-outline',
                menu: true,
                show: false,

                routes: [
                    { title: 'Add Category', to: '/admin/accountingItems/createCategoies' },
                    // { title: 'Add Accounting item', to: '/admin/accountingItems/createCategoies' },
                    { title: 'View Categories', to: '/admin/accountingItems/viewCategoies' },
                    // { title: 'View Account items', to: '/viewAccountItems' },
                ]
            },
            {
                title: 'Budget',
                icon: 'mdi-bank-outline',
                menu: true,
                show: false,

                routes: [
                    { title: 'View Budgets', to: '/admin/accounting/budget/viewBudgets' },
                    { title: 'Add Budget', to: '/admin/accounting/budget/addBudget' },
                ]
            },
            {
                title: 'Payment Report',
                icon: 'mdi-bank-outline',
                menu: false,
                show: false,
                routes: [
                    { title: 'View Budgets', to: '/admin/accounting/paymentReport' }
                ]
            },
            {
                title: 'Record Funds',
                icon: 'mdi-pencil-outline',
                menu: true,
                show: false,

                routes: [
                    { title: 'Add Fund', to: '/admin/funds/addFund' },
                    // { title: 'Incoming Fund', to: '/incomingFund' },
                    { title: 'View Recorded Funds', to: '/admin/funds/viewFunds' },
                ]
            },
            // {
            //     title: 'Reports',
            //     icon: 'mdi-chart-bar',
            //     menu: true,
            //     show: false,

            //     routes: [
            //         { title: 'Budget Report', to: '/budgetReport' },
            //         { title: 'Student Report', to: '/studentReport' },
            //         { title: 'P & L Report', to: '/plReport' },
            //     ]
            // },
        ]
    },
]
