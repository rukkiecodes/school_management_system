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
                to: '/dashboard/subjects/create',
                menu: false
            },
            {
                title: 'Upload Students',
                icon: 'mdi-cloud-upload-outline',
                to: '/dashboard/students/upload',
                menu: false
            },
            {
                title: 'View Students',
                icon: 'mdi-magnify',
                to: '/dashboard/subjects',
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
                title: 'Add Strength',
                icon: 'mdi-plus-circle',
                to: '/dashboard/subjects/strength',
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
            {
                title: 'View Subjects Strength',
                icon: 'mdi-magnify',
                to: '/dashboard/subjects/strength',
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
                title: 'Add Class Categories',
                icon: 'mdi-database-plus-outline',
                to: '/dashboard/classRooms/category/create',
                menu: false
            },
            {
                title: 'Add Class Type',
                icon: 'mdi-database-plus-outline',
                to: '/dashboard/classRooms/type/create',
                menu: false
            },
            {
                title: 'Add Level',
                icon: 'mdi-database-plus-outline',
                to: '/dashboard/classRooms/level/create',
                menu: false
            },
            {
                title: 'Add Class Room',
                icon: 'mdi-database-plus-outline',
                to: '/dashboard/classRooms/create',
                menu: false
            },
            {
                title: 'View Class Categories',
                icon: 'mdi-magnify',
                to: '/dashboard/classRooms/category',
                menu: false
            },
            {
                title: 'View Class Types',
                icon: 'mdi-magnify',
                to: '/dashboard/classRooms/type',
                menu: false
            },
            {
                title: 'View Class Rooms',
                icon: 'mdi-magnify',
                to: '/dashboard/classRooms',
                menu: false
            },
            {
                title: 'View Levels',
                icon: 'mdi-magnify',
                to: '/dashboard/classRooms/level',
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
    // {
    //     name: 'Announcements',
    //     menu: true,
    //     icon: 'mdi-calendar-month-outline',
    //     show: false,

    //     routes: [
    //         {
    //             title: 'Add Announcements',
    //             icon: 'mdi-calendar-month',
    //             to: '/addAnnouncements',
    //         },
    //         {
    //             title: 'List View',
    //             icon: 'mdi-eye',
    //             to: '/listView',
    //             menu: false
    //         },
    //         {
    //             title: 'Calendar View',
    //             icon: 'mdi-calendar-outline',
    //             to: '/calenderView',
    //             menu: false
    //         }
    //     ]
    // },
    // {
    //     name: 'Grading',
    //     menu: true,
    //     icon: 'mdi-bookshelf',
    //     show: false,

    //     routes: [
    //         {
    //             title: 'Update Grades',
    //             icon: 'mdi-book-open-page-variant-outline',
    //             to: '/updateGrades',
    //         },
    //         {
    //             title: 'Update B/S Grades',
    //             icon: 'mdi-calculator',
    //             to: '/updateBSGrades',
    //             menu: false
    //         },
    //         {
    //             title: 'Update Attendance',
    //             icon: 'mdi-progress-clock',
    //             to: '/updateAttendance',
    //             menu: false
    //         },
    //         {
    //             title: 'Upload Grades',
    //             icon: 'mdi-microsoft-excel',
    //             to: '/uploadGrades',
    //             menu: false
    //         },
    //         {
    //             title: 'Compute Grades',
    //             icon: 'mdi-calculator',
    //             to: '/computeGrades',
    //             menu: false
    //         },
    //         {
    //             title: 'Add B/S Grades',
    //             icon: 'mdi-calculator',
    //             to: '/addBSGrades',
    //             menu: false
    //         },
    //         {
    //             title: 'View B/S Grades',
    //             icon: 'mdi-calculator',
    //             to: '/viewBSGrades',
    //             menu: false
    //         },
    //         {
    //             title: 'Configure Grading',
    //             icon: 'mdi-cog',
    //             menu: true,
    //             show: false,

    //             routes: [
    //                 { title: 'Break Downs', to: '/gradBreakDowns' },
    //                 { title: 'Grade letterings', to: '/gradeLeterings' },
    //                 { title: 'Grade letterings', to: '/gradeLeterings' },
    //                 { title: 'Grade Comments', to: '/gradeComments' },
    //                 { title: 'Grade Models', to: '/gradeModels' },
    //                 { title: 'Promotion Criteria', to: '/promotionCriteria' },
    //                 { title: 'Promotion Rules', to: '/promotionRules' },
    //                 { title: 'Result View Settings', to: '/resultViewSettings' },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     name: 'Accounting',
    //     menu: true,
    //     icon: 'mdi-bank',
    //     show: false,

    //     routes: [
    //         {
    //             title: 'Fees',
    //             icon: 'mdi-cash',
    //             menu: true,
    //             show: false,

    //             routes: [
    //                 { title: 'Add Fee Item', to: '/addFeeItem' },
    //                 { title: 'Add Fee Group', to: '/addFeeGroup' },
    //                 { title: 'View Fee Items', to: '/viewFeeItems' },
    //                 { title: 'View Fees', to: '/viewFees' },
    //             ]
    //         },
    //         {
    //             title: 'Accounting Items',
    //             icon: 'mdi-bank-outline',
    //             menu: true,
    //             show: false,

    //             routes: [
    //                 { title: 'Add Category', to: '/addCategory' },
    //                 { title: 'Add Accounting item', to: '/addAccountingItem' },
    //                 { title: 'View Categories', to: '/viewCategories' },
    //                 { title: 'View Account items', to: '/viewAccountItems' },
    //             ]
    //         },
    //         {
    //             title: 'Budget',
    //             to: '/budget',
    //             icon: 'mdi-bank-outline',
    //             menu: false,
    //             show: false,
    //         },
    //         {
    //             title: 'Record Funds',
    //             icon: 'mdi-pencil-outline',
    //             menu: true,
    //             show: false,

    //             routes: [
    //                 { title: 'Outgoing Fund', to: '/outgoingFunds' },
    //                 { title: 'Incoming Fund', to: '/incomingFund' },
    //                 { title: 'View Recorded Funds', to: '/viewRecordedFunds' },
    //             ]
    //         },
    //         {
    //             title: 'Reports',
    //             icon: 'mdi-chart-bar',
    //             menu: true,
    //             show: false,

    //             routes: [
    //                 { title: 'Budget Report', to: '/budgetReport' },
    //                 { title: 'Student Report', to: '/studentReport' },
    //                 { title: 'P & L Report', to: '/plReport' },
    //             ]
    //         },
    //     ]
    // },
]
