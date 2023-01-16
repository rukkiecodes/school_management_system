import routes from './routes'

const state = {
    drawer: true,
    dashboardRoutes: routes
}

const getters = {
    dashboardRoutes: state => state.dashboardRoutes
}

export default { state, getters }