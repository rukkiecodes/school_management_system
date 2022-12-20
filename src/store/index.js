import {
    createStore
} from 'vuex'
import routes from './dashboardRoutes'

export default createStore({
    state: {
        dashboardRoutes: routes
    },

    getters: {
        dashboardRoutes: state => state.dashboardRoutes
    },

    mutations: {},

    actions: {},
})
