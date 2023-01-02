import {
    createStore
} from 'vuex'
import register from './modules/register'
import dashboard from './modules/dashboard'
import snackbar from './modules/snackbar'

export default createStore({
    strict: false,

    modules: {
        register,
        dashboard,
        snackbar
    }
})
