const state = {
    name: 'Tech',
    start: '2020-10-10',
    end: '2020-10-10',
    loading: false,
}

const actions = {
    addNewAnnouncements({ commit, dispatch }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.addAnnouncements.name == '' || this.state.addAnnouncements.start == '' || this.state.addAnnouncements.end == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.addAnnouncements.loading = true
            fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/events/add' : '/api/v1/events/add', {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.addAnnouncements.name,
                    start: this.state.addAnnouncements.start,
                    end: this.state.addAnnouncements.end,
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
                        this.state.addAnnouncements.loading = false
                        console.log(data)
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'Added successfully'
                        this.state.snackbar.color = 'success'

                        this.state.addAnnouncements.name = ''

                        return dispatch('getAllAnnouncement')
                    } else {
                        this.state.addAnnouncements.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'An error occured'
                        this.state.snackbar.color = 'error'
                    }
                })
                .catch(error => {
                    this.state.addAnnouncements.loading = false
                })
        }
    }
}

export default { state, actions }