import {
    createStore
} from 'vuex'
import register from './modules/register'
import dashboard from './modules/dashboard'
import snackbar from './modules/snackbar'
import staffLogin from './modules/staffLogin'
import logout from './modules/logout'

// Accounting
import addFee from './modules/accounting/addFee'
import updateFee from './modules/accounting/updateFee'
import allFees from './modules/accounting/allFees'
import deleteFees from './modules/accounting/deleteFees'
import addFund from './modules/accounting/addFund'
import allFunds from './modules/accounting/allFunds'
import updateFund from './modules/accounting/updateFund'
import viewFund from './modules/accounting/viewFund'
import deleteSingleFund from './modules/accounting/deleteSingleFund'
import createCategoies from './modules/accounting/createCategoies'
import allCategory from './modules/accounting/allCategory'
import updateCategory from './modules/accounting/updateCategory'
import deleteSingleCategory from './modules/accounting/deleteSingleCategory'
import viewCategory from './modules/accounting/viewCategory'
import addBudget from './modules/accounting/addBudget'
import updateBudget from './modules/accounting/updateBudget'
import allPaymentReport from './modules/accounting/allPaymentReport'

// staff
import addStaff from './modules/staff/addStaff'
import allStaffs from './modules/staff/allStaffs'
import updateStaff from './modules/staff/updateStaff'
import deleteStaffs from './modules/staff/deleteStaffs'
import viewStaff from './modules/staff/viewStaff'

// subject
import addSubject from './modules/subject/addSubject'
import allSubject from './modules/subject/allSubject'
import updateSubject from './modules/subject/updateSubject'
import deleteSubjects from './modules/subject/deleteSubjects'
import viewSubject from './modules/subject/viewSubject'

// subject category
import addSubjectCategory from './modules/subjectCategory/addSubjectCategory'
import allSubjectCategory from './modules/subjectCategory/allSubjectCategory'
import updateSubjectCategory from './modules/subjectCategory/updateSubjectCategory'
import deleteSubjectsCategory from './modules/subjectCategory/deleteSubjectsCategory'
import viewSubjectCategory from './modules/subjectCategory/viewSubjectCategory'

// Student
import addStudent from './modules/student/addStudent'
import allStudent from './modules/student/allStudent'
import updateStudent from './modules/student/updateStudent'
import deleteStudents from './modules/student/deleteStudents'
import viewStudent from './modules/student/viewStudent'

// classroom category
import addClassroomCategory from './modules/classroom/categories/addClassroomCategory'
import allSClassroomCategory from './modules/classroom/categories/allSClassroomCategory'
import updateClassroomCategory from './modules/classroom/categories/updateClassroomCategory'
import deleteClassroomCategory from './modules/classroom/categories/deleteClassroomCategory'

// classroom level
import addClassroomLevel from './modules/classroom/level/addClassroomLevel'
import allSClassroomLevel from './modules/classroom/level/allSClassroomLevel'
import updateClassroomLevel from './modules/classroom/level/updateClassroomLevel'
import deleteClassroomLevel from './modules/classroom/level/deleteClassroomLevel'

// classroom type
import addClassroomType from './modules/classroom/type/addClassroomType'
import allSClassroomType from './modules/classroom/type/allSClassroomType'
import updateClassroomType from './modules/classroom/type/updateClassroomType'
import deleteClassroomType from './modules/classroom/type/deleteClassroomType'

// classroom
import addClassroom from './modules/classroom/classroom/addClassroom'
import allClassroom from './modules/classroom/classroom/allClassroom'
import updateClassroom from './modules/classroom/classroom/updateClassroom'
import deleteClassroom from './modules/classroom/classroom/deleteClassroom'

// department
import addDepartment from './modules/department/addDepartment'
import allDepartment from './modules/department/allDepartment'
import updateDepartment from './modules/department/updateDepartment'
import deleteDepartment from './modules/department/deleteDepartment'

// announcement
import addAnnouncements from './modules/announcement/addAnnouncements'
import allAnnouncements from './modules/announcement/allAnnouncements'
import updateAnnouncements from './modules/announcement/updateAnnouncements'
import deleteAnnouncements from './modules/announcement/deleteAnnouncements'

// manage grading
import addGrade from './modules/grading/manage/addGrade'
import allGrade from './modules/grading/manage/allGrade'
import deleteGrade from './modules/grading/manage/deleteGrade'
import updateGrade from './modules/grading/manage/updateGrade'

import addAttendance from './modules/grading/attendance/addAttendance'
import allAttendance from './modules/grading/attendance/allAttendance'
import deleteAttendance from './modules/grading/attendance/deleteAttendance'
import updateAttendance from './modules/grading/attendance/updateAttendance'

export default createStore({
    strict: false,

    modules: {
        register,
        dashboard,
        snackbar,
        staffLogin,
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
    }
})
