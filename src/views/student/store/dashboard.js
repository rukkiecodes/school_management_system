import routes from './routes'

const state = {
    drawer: true,
    studentDashboardRoutes: routes
}

const getters = {
    studentDashboardRoutes: state => state.studentDashboardRoutes
}

export default { state, getters }