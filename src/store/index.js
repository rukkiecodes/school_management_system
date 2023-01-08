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
        viewStaff
    }
})
