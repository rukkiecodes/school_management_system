const state = {
    sessionname: 'Some name',
    startdate: '9/10/2020',
    enddate: '20/07/2021',
    loading: false,
}

const actions = {
    addNewSession({ commit, dispatch }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.addSession.sessionname == '' || this.state.addSession.startdate == '' || this.state.addSession.enddate == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.addSession.loading = true
            fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/addsession' : '/api/v1/addsession', {
                method: 'POST',
                body: JSON.stringify({
                    sessionname: this.state.addSession.sessionname,
                    startdate: this.state.addSession.startdate,
                    enddate: this.state.addSession.enddate
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message == 'Academic session created successfully') {
                        this.state.addSession.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'Academic session created successfully'
                        this.state.snackbar.color = 'success'

                        this.state.addSession.sessionname = ''
                        this.state.addSession.startdate = ''
                        this.state.addSession.enddate = ''

                        return dispatch('getAllSessions')
                    } else {
                        this.state.addSession.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'An error occured'
                        this.state.snackbar.color = 'error'
                    }
                })
                .catch(error => {
                    this.state.addSession.loading = false
                })
        }
    }
}

export default { state, actions }