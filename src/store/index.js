import {
    createStore
} from 'vuex'
import routes from './dashboardRoutes'

export default createStore({
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
})
