const state = {
    sessionname: 'Some name',
    startdate: '9/10/2020',
    enddate: '20/07/2021',
    loading: false,
    dialog: false,
}

const mutations = {
    fillSessionForm(state, session) {
        state.sessionname = session.sessionname
        state.startdate = session.startdate
        state.enddate = session.enddate
    }
}

const actions = {
    updateSessionItem({ commit, dispatch }, session) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.updateSession.name == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        }
        else {
            this.state.updateSession.loading = true
            fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/session/${session?.id}/update` : `/api/v1/session/${session?.id}/update`, {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.updateSession.name
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.state.updateSession.loading = false
                    this.state.updateSession.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'Session updated successfully'
                    this.state.snackbar.color = 'success'

                    this.state.updateSession.name = ''

                    return dispatch('getAllSessions')
                })
                .catch(error => {
                    this.state.updateSession.loading = false
                    this.state.updateSession.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions, mutations }
