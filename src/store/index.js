import {
    createStore
} from 'vuex'

import snackbar from './modules/snackbar'





/*
############################################################
#####ADMIN MODULES IMPORTS START HERE ######################
############################################################
*/
// Admin modules
import dashboard from '@/views/admin/store/dashboard'
import register from '@/views/admin/store/auth/register'
import adminLogin from '@/views/admin/store/auth/adminLogin'
import logout from '@/views/admin/store/auth/logout'

// Accounting
import addFee from '@/views/admin/store/modules/accounting/addFee'
import updateFee from '@/views/admin/store/modules/accounting/updateFee'
import allFees from '@/views/admin/store/modules/accounting/allFees'
import deleteFees from '@/views/admin/store/modules/accounting/deleteFees'
import addFund from '@/views/admin/store/modules/accounting/addFund'
import allFunds from '@/views/admin/store/modules/accounting/allFunds'
import updateFund from '@/views/admin/store/modules/accounting/updateFund'
import viewFund from '@/views/admin/store/modules/accounting/viewFund'
import deleteSingleFund from '@/views/admin/store/modules/accounting/deleteSingleFund'
import createCategoies from '@/views/admin/store/modules/accounting/createCategoies'
import allCategory from '@/views/admin/store/modules/accounting/allCategory'
import updateCategory from '@/views/admin/store/modules/accounting/updateCategory'
import deleteSingleCategory from '@/views/admin/store/modules/accounting/deleteSingleCategory'
import viewCategory from '@/views/admin/store/modules/accounting/viewCategory'
import addBudget from '@/views/admin/store/modules/accounting/addBudget'
import updateBudget from '@/views/admin/store/modules/accounting/updateBudget'
import allPaymentReport from '@/views/admin/store/modules/accounting/allPaymentReport'

// staff
import addStaff from '@/views/admin/store/modules/staff/addStaff'
import allStaffs from '@/views/admin/store/modules/staff/allStaffs'
import updateStaff from '@/views/admin/store/modules/staff/updateStaff'
import deleteStaffs from '@/views/admin/store/modules/staff/deleteStaffs'
import viewStaff from '@/views/admin/store/modules/staff/viewStaff'

// subject
import addSubject from '@/views/admin/store/modules/subject/addSubject'
import allSubject from '@/views/admin/store/modules/subject/allSubject'
import updateSubject from '@/views/admin/store/modules/subject/updateSubject'
import deleteSubjects from '@/views/admin/store/modules/subject/deleteSubjects'
import viewSubject from '@/views/admin/store/modules/subject/viewSubject'

// subject category
import addSubjectCategory from '@/views/admin/store/modules/subjectCategory/addSubjectCategory'
import allSubjectCategory from '@/views/admin/store/modules/subjectCategory/allSubjectCategory'
import updateSubjectCategory from '@/views/admin/store/modules/subjectCategory/updateSubjectCategory'
import deleteSubjectsCategory from '@/views/admin/store/modules/subjectCategory/deleteSubjectsCategory'
import viewSubjectCategory from '@/views/admin/store/modules/subjectCategory/viewSubjectCategory'

// Student
import addStudent from '@/views/admin/store/modules/student/addStudent'
import allStudent from '@/views/admin/store/modules/student/allStudent'
import updateStudent from '@/views/admin/store/modules/student/updateStudent'
import deleteStudents from '@/views/admin/store/modules/student/deleteStudents'
import viewStudent from '@/views/admin/store/modules/student/viewStudent'

// classroom category
import addClassroomCategory from '@/views/admin/store/modules/classroom/categories/addClassroomCategory'
import allSClassroomCategory from '@/views/admin/store/modules/classroom/categories/allSClassroomCategory'
import updateClassroomCategory from '@/views/admin/store/modules/classroom/categories/updateClassroomCategory'
import deleteClassroomCategory from '@/views/admin/store/modules/classroom/categories/deleteClassroomCategory'

// classroom level
import addClassroomLevel from '@/views/admin/store/modules/classroom/level/addClassroomLevel'
import allSClassroomLevel from '@/views/admin/store/modules/classroom/level/allSClassroomLevel'
import updateClassroomLevel from '@/views/admin/store/modules/classroom/level/updateClassroomLevel'
import deleteClassroomLevel from '@/views/admin/store/modules/classroom/level/deleteClassroomLevel'

// classroom type
import addClassroomType from '@/views/admin/store/modules/classroom/type/addClassroomType'
import allSClassroomType from '@/views/admin/store/modules/classroom/type/allSClassroomType'
import updateClassroomType from '@/views/admin/store/modules/classroom/type/updateClassroomType'
import deleteClassroomType from '@/views/admin/store/modules/classroom/type/deleteClassroomType'

// classroom
import addClassroom from '@/views/admin/store/modules/classroom/classroom/addClassroom'
import allClassroom from '@/views/admin/store/modules/classroom/classroom/allClassroom'
import updateClassroom from '@/views/admin/store/modules/classroom/classroom/updateClassroom'
import deleteClassroom from '@/views/admin/store/modules/classroom/classroom/deleteClassroom'

// department
import addDepartment from '@/views/admin/store/modules/department/addDepartment'
import allDepartment from '@/views/admin/store/modules/department/allDepartment'
import updateDepartment from '@/views/admin/store/modules/department/updateDepartment'
import deleteDepartment from '@/views/admin/store/modules/department/deleteDepartment'

// announcement
import addAnnouncements from '@/views/admin/store/modules/announcement/addAnnouncements'
import allAnnouncements from '@/views/admin/store/modules/announcement/allAnnouncements'
import updateAnnouncements from '@/views/admin/store/modules/announcement/updateAnnouncements'
import deleteAnnouncements from '@/views/admin/store/modules/announcement/deleteAnnouncements'

// manage grading
import addGrade from '@/views/admin/store/modules/grading/manage/addGrade'
import allGrade from '@/views/admin/store/modules/grading/manage/allGrade'
import deleteGrade from '@/views/admin/store/modules/grading/manage/deleteGrade'
import updateGrade from '@/views/admin/store/modules/grading/manage/updateGrade'

// attendance
import addAttendance from '@/views/admin/store/modules/grading/attendance/addAttendance'
import allAttendance from '@/views/admin/store/modules/grading/attendance/allAttendance'
import deleteAttendance from '@/views/admin/store/modules/grading/attendance/deleteAttendance'
import updateAttendance from '@/views/admin/store/modules/grading/attendance/updateAttendance'

// BSGrade
import addBSGrade from '@/views/admin/store/modules/grading/BSGrade/addBSGrade'
import allBSGrade from '@/views/admin/store/modules/grading/BSGrade/allBSGrade'
import deleteBSGrade from '@/views/admin/store/modules/grading/BSGrade/deleteBSGrade'
import updateBSGrade from '@/views/admin/store/modules/grading/BSGrade/updateBSGrade'

// session
import addSession from '@/views/admin/store/modules/session/addSession'
import allSession from '@/views/admin/store/modules/session/allSession'
import deleteSession from '@/views/admin/store/modules/session/deleteSession'
import updateSession from '@/views/admin/store/modules/session/updateSession'

// term
import addTerm from '@/views/admin/store/modules/term/addTerm'
import allTerm from '@/views/admin/store/modules/term/allTerm'
import deleteTerm from '@/views/admin/store/modules/term/deleteTerm'
import updateTerm from '@/views/admin/store/modules/term/updateTerm'

// Session And Term
import allSessionAndTerm from '@/views/admin/store/modules/sessionAndTerm/allSessionAndTerm'
import updateSessionAndTerm from '@/views/admin/store/modules/sessionAndTerm/updateSessionAndTerm'



/*
############################################################
#####ADMIN MODULES IMPORTS ENDS HERE ######################
############################################################
*/

// ##############################

/*
############################################################
#####STUDENT MODULES IMPORTS STARTS HERE ######################
############################################################
*/
import studentDashboard from '@/views/student/store/dashboard'

// student login
import studentLogin from '@/views/student/store/modules/auth/studentLogin'

// student subjects
import allStudentSubjects from '@/views/student/store/modules/subjects/allStudentSubjects'

// student event
import addStudentEvent from '@/views/student/store/modules/event/addStudentEvent'
import allStudentEvents from '@/views/student/store/modules/event/allStudentEvents'
import updateStudentEvent from '@/views/student/store/modules/event/updateStudentEvent'

// student accounting
import allStudentAccounting from '@/views/student/store/modules/accounting/allStudentAccounting'
import allStudentFees from '@/views/student/store/modules/accounting/allStudentFees'
/*
############################################################
#####STUDENT MODULES IMPORTS ENDS HERE ######################
############################################################
*/


/*
############################################################
#####STAFF MODULES IMPORTS STARTS HERE ######################
############################################################
*/
import staffLogin from '@/views/staff/store/modules/auth/staffLogin'

export default createStore({
    strict: false,

    modules: {
        /*
        ############################################################
        #####ADMIN MODULES IMPORTS START HERE ######################
        ############################################################
        */
        register,
        dashboard,
        snackbar,
        adminLogin,
        logout,

        // accounting
        addFee,
        updateFee,
        allFees,
        deleteFees,
        addFund,
        allFunds,
        updateFund,
        viewFund,
        deleteSingleFund,
        createCategoies,
        allCategory,
        updateCategory,
        deleteSingleCategory,
        viewCategory,
        addBudget,
        updateBudget,
        allPaymentReport,

        // staff
        addStaff,
        allStaffs,
        updateStaff,
        deleteStaffs,
        viewStaff,

        // subject
        addSubject,
        allSubject,
        updateSubject,
        deleteSubjects,
        viewSubject,

        // subject category
        addSubjectCategory,
        allSubjectCategory,
        updateSubjectCategory,
        deleteSubjectsCategory,
        viewSubjectCategory,

        // Student
        addStudent,
        allStudent,
        updateStudent,
        deleteStudents,
        viewStudent,

        // classrrom category
        addClassroomCategory,
        allSClassroomCategory,
        updateClassroomCategory,
        deleteClassroomCategory,

        // classroom level
        addClassroomLevel,
        allSClassroomLevel,
        updateClassroomLevel,
        deleteClassroomLevel,

        // classroom level
        addClassroomType,
        allSClassroomType,
        updateClassroomType,
        deleteClassroomType,

        // classroom
        addClassroom,
        allClassroom,
        updateClassroom,
        deleteClassroom,

        // department
        addDepartment,
        allDepartment,
        updateDepartment,
        deleteDepartment,

        // announcement
        addAnnouncements,
        allAnnouncements,
        updateAnnouncements,
        deleteAnnouncements,

        // manage grading
        addGrade,
        allGrade,
        deleteGrade,
        updateGrade,

        // attendance
        addAttendance,
        allAttendance,
        deleteAttendance,
        updateAttendance,

        // BSGrade
        addBSGrade,
        allBSGrade,
        deleteBSGrade,
        updateBSGrade,

        // session
        addSession,
        allSession,
        deleteSession,
        updateSession,

        // term
        addTerm,
        allTerm,
        deleteTerm,
        updateTerm,

        // term
        allSessionAndTerm,
        updateSessionAndTerm,
        /*
        ############################################################
        #####ADMIN MODULES IMPORTS ENDS HERE ######################
        ############################################################
        */

        //    ###############################################

        /*
        ############################################################
        #####STUDENT MODULES IMPORTS START HERE ######################
        ############################################################
        */
        //    student modules
        studentDashboard,

        // student login
        studentLogin,

        // student subjects
        allStudentSubjects,

        // student event
        addStudentEvent,
        allStudentEvents,
        updateStudentEvent,

        // student accounting
        allStudentAccounting,
        allStudentFees,
        /*
        ############################################################
        #####STUDENT MODULES IMPORTS Ends HERE ######################
        ############################################################
        */

        /*
        ############################################################
        #####STAFF MODULES IMPORTS STARTS HERE ######################
        ############################################################
        */
        staffLogin
    }
})
