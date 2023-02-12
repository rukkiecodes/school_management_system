const state = {
    name: 'Some name',
    start: '9/10/2020',
    end: '20/07/2021',
    loading: false,
    dialog: false,
}

const mutations = {
    fillStudentEventForm(state, events) {
        state.name = events.name
        state.start = events.start
        state.end = events.end
    }
}

const actions = {
    updateStudentEventItem({ commit, dispatch }, events) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.updateStudentEvent.name == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        }
        else {
            this.state.updateStudentEvent.loading = true
            fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/events/${events?.id}/update` : `/api/v1/events/${events?.id}/update`, {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.updateStudentEvent.name,
                    start: this.state.updateStudentEvent.start,
                    end: this.state.updateStudentEvent.end,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.state.updateStudentEvent.loading = false
                    this.state.updateStudentEvent.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'Updated successfully'
                    this.state.snackbar.color = 'success'

                    this.state.updateStudentEvent.name = ''

                    return dispatch('getallStudentEvents')
                })
                .catch(error => {
                    this.state.updateStudentEvent.loading = false
                    this.state.updateStudentEvent.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions, mutations }
