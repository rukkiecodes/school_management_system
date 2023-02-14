import routes from './routes'

const state = {
    drawer: true,
    staffDashboardRoutes: routes
}

const getters = {
    staffDashboardRoutes: state => state.staffDashboardRoutes
}

export default { state, getters }