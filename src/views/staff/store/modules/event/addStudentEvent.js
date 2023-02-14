const state = {
    name: 'Some name',
    start: '9/10/2020',
    end: '20/07/2021',
    loading: false,
}

const actions = {
    addNewStudentEvent({ commit, dispatch }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.addStudentEvent.name == '' || this.state.addStudentEvent.start == '' || this.state.addStudentEvent.end == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.addStudentEvent.loading = true
            fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/events/add' : '/api/v1/events/add', {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.addStudentEvent.name,
                    start: this.state.addStudentEvent.start,
                    end: this.state.addStudentEvent.end,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message == 'Added Successfully') {
                        this.state.addStudentEvent.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'Academic event created successfully'
                        this.state.snackbar.color = 'success'

                        this.state.addStudentEvent.name = ''
                        this.state.addStudentEvent.start = ''
                        this.state.addStudentEvent.end = ''

                        return dispatch('getallStudentEvents')
                    } else {
                        this.state.addStudentEvent.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'An error occured'
                        this.state.snackbar.color = 'error'
                    }
                })
                .catch(error => {
                    this.state.addStudentEvent.loading = false
                })
        }
    }
}

export default { state, actions }