import routes from './dashboardRoutes'

const state = {
    drawer: true,
    dashboardRoutes: routes
}

const getters = {
    dashboardRoutes: state => state.dashboardRoutes
}

export default { state, getters }