const state = {
    name: 'Some name',
    start: '9/10/2020',
    end: '20/07/2021',
    loading: false,
}

const actions = {
    addNewStaffEvent({ commit, dispatch }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.addStaffEvent.name == '' || this.state.addStaffEvent.start == '' || this.state.addStaffEvent.end == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.addStaffEvent.loading = true
            fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/events/add' : '/api/v1/events/add', {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.addStaffEvent.name,
                    start: this.state.addStaffEvent.start,
                    end: this.state.addStaffEvent.end,
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
                        this.state.addStaffEvent.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'Academic event created successfully'
                        this.state.snackbar.color = 'success'

                        this.state.addStaffEvent.name = ''
                        this.state.addStaffEvent.start = ''
                        this.state.addStaffEvent.end = ''

                        return dispatch('getallStaffEvents')
                    } else {
                        this.state.addStaffEvent.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'An error occured'
                        this.state.snackbar.color = 'error'
                    }
                })
                .catch(error => {
                    this.state.addStaffEvent.loading = false
                })
        }
    }
}

export default { state, actions }