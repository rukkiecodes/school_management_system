import {
    createStore
} from 'vuex'
import routes from './dashboardRoutes'
import register from './modules/register'
import dashboard from './modules/dashboard'

export default createStore({
    strict: false,

    state: {
        appDrawer: true,
        dashboardRoutes: routes
    },

    getters: {
        dashboardRoutes: state => state.dashboardRoutes
    },

    mutations: {
        toggleAppDrawer: state => state.appDrawer = !state.appDrawer
    },

    actions: {},

    modules: {
        register,
        dashboard
    }
})
