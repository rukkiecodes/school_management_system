export default [
    {
        to: '/dashboard',
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
                to: '/dashboard/staffs/create',
                menu: false
            },
            {
                title: 'View Staff',
                icon: 'mdi-magnify',
                to: '/dashboard/staffs',
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
                to: '/dashboard/students/create',
                menu: false
            },
            {
                title: 'View Students',
                icon: 'mdi-magnify',
                to: '/dashboard/students',
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
                to: '/dashboard/subjects/category/create',
                menu: false
            },
            {
                title: 'Add Subject',
                icon: 'mdi-plus-circle',
                to: '/dashboard/subjects/create',
                menu: false
            },
            {
                title: 'View Subject Categories',
                icon: 'mdi-magnify',
                to: '/dashboard/subjects/category',
                menu: false
            },
            {
                title: 'View Subjects',
                icon: 'mdi-magnify',
                to: '/dashboard/subjects',
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
                to: '/dashboard/classRooms/create',
                menu: false
            },
            {
                title: 'View Class Rooms',
                icon: 'mdi-magnify',
                to: '/dashboard/classRooms',
                menu: false
            },
            {
                title: 'Add Class Categories',
                icon: 'mdi-database-plus-outline',
                to: '/dashboard/classRooms/category/create',
                menu: false
            },
            {
                title: 'View Class Categories',
                icon: 'mdi-magnify',
                to: '/dashboard/classRooms/category',
                menu: false
            },
            {
                title: 'Add Level',
                icon: 'mdi-database-plus-outline',
                to: '/dashboard/classRooms/level/create',
                menu: false
            },
            {
                title: 'View Levels',
                icon: 'mdi-magnify',
                to: '/dashboard/classRooms/level',
                menu: false
            },
            {
                title: 'Add Class Type',
                icon: 'mdi-database-plus-outline',
                to: '/dashboard/classRooms/type/create',
                menu: false
            },
            {
                title: 'View Class Types',
                icon: 'mdi-magnify',
                to: '/dashboard/classRooms/type',
                menu: false
            },
        ]
    },
    {
        to: '/dashboard/departments',
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
                to: '/dashboard/announcements/create',
            },
            {
                title: 'View Announcements',
                icon: 'mdi-calendar-month',
                to: '/dashboard/announcements',
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
                title: 'Update Grades',
                icon: 'mdi-book-open-page-variant-outline',
                to: '/dashboard/grading',
            },
            {
                title: 'Update B/S Grades',
                icon: 'mdi-calculator',
                to: '/dashboard/grading/bsgrade',
                menu: false
            },
            {
                title: 'Update Attendance',
                icon: 'mdi-progress-clock',
                to: '/dashboard/grading/attendance',
                menu: false
            },
            {
                title: 'Upload Grades',
                icon: 'mdi-microsoft-excel',
                to: '/dashboard/grading/upload',
                menu: false
            },
            // {
            //     title: 'Compute Grades',
            //     icon: 'mdi-calculator',
            //     to: '/dashboard/grading/addBSGrade',
            //     menu: false
            // },
            {
                title: 'Add B/S Grades',
                icon: 'mdi-calculator',
                to: '/dashboard/grading/addBSGrade',
                menu: false
            },
            {
                title: 'View B/S Grades',
                icon: 'mdi-calculator',
                to: '/dashboard/grading/viewBSGrade',
                menu: false
            },
            // {
            //     title: 'Configure Grading',
            //     icon: 'mdi-cog',
            //     menu: true,
            //     show: false,

            //     routes: [
            //         { title: 'Break Downs', to: '/dashboard/grading/configureGrading/gradeBreakDown', },
            //         { title: 'Grade letterings', to: '/dashboard/grading/configureGrading/gradeLetterings' },
            //         { title: 'Grade Comments', to: '/dashboard/grading/configureGrading/gradeComments' },
            //         { title: 'Grade Models', to: '/dashboard/grading/configureGrading/gradeModels' },
            //         { title: 'Promotion Criteria', to: '/dashboard/grading/configureGrading/promotionCriteria' },
            //         { title: 'Promotion Rules', to: '/dashboard/grading/configureGrading/promotionRules' },
            //         { title: 'Result View Settings', to: '/dashboard/grading/configureGrading/resultSettings' },
            //     ]
            // },
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
                    { title: 'Add Fee Item', to: '/dashboard/accounting/addFee' },
                    { title: 'View Fees', to: '/dashboard/accounting/viewFees' },
                ]
            },
            {
                title: 'Accounting Items',
                icon: 'mdi-bank-outline',
                menu: true,
                show: false,

                routes: [
                    { title: 'Add Category', to: '/dashboard/accountingItems/createCategoies' },
                    // { title: 'Add Accounting item', to: '/dashboard/accountingItems/createCategoies' },
                    { title: 'View Categories', to: '/dashboard/accountingItems/viewCategoies' },
                    // { title: 'View Account items', to: '/viewAccountItems' },
                ]
            },
            {
                title: 'Budget',
                icon: 'mdi-bank-outline',
                menu: true,
                show: false,

                routes: [
                    { title: 'View Budgets', to: '/dashboard/accounting/budget/viewBudgets' },
                    { title: 'Add Budget', to: '/dashboard/accounting/budget/addBudget' },
                ]
            },
            {
                title: 'Payment Report',
                icon: 'mdi-bank-outline',
                menu: false,
                show: false,
                routes: [
                    { title: 'View Budgets', to: '/dashboard/accounting/paymentReport' }
                ]
            },
            {
                title: 'Record Funds',
                icon: 'mdi-pencil-outline',
                menu: true,
                show: false,

                routes: [
                    { title: 'Add Fund', to: '/dashboard/funds/addFund' },
                    // { title: 'Incoming Fund', to: '/incomingFund' },
                    { title: 'View Recorded Funds', to: '/dashboard/funds/viewFunds' },
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
