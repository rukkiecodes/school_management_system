import {
    createStore
} from 'vuex'
import register from './modules/register'
import dashboard from './modules/dashboard'
import snackbar from './modules/snackbar'
import staffLogin from './modules/staffLogin'
import logout from './modules/logout'

// Accounting
import addFee from './modules/addFee'
import updateFee from './modules/updateFee'
import allFees from './modules/allFees'
import deleteFees from './modules/deleteFees'
import addFund from './modules/addFund'
import allFunds from './modules/allFunds'
import updateFund from './modules/updateFund'
import viewFund from './modules/viewFund'
import deleteSingleFund from './modules/deleteSingleFund'
import createCategoies from './modules/createCategoies'
import allCategory from './modules/allCategory'
import updateCategory from './modules/updateCategory'
import deleteSingleCategory from './modules/deleteSingleCategory'
import viewCategory from './modules/viewCategory'

export default createStore({
    strict: false,

    modules: {
        register,
        dashboard,
        snackbar,
        staffLogin,
        logout,
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
        viewCategory
    }
})
