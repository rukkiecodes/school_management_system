import {
    createStore
} from 'vuex'

export default createStore({
    state: {
        dashboardRoutes: [
            {
                to: '/dashboard',
                title: 'Dashboard',
                icon: 'mdi-home'
            }
        ]
    },

    getters: {
        dashboardRoutes: state => state.dashboardRoutes
    },

    mutations: {},

    actions: {},
})
