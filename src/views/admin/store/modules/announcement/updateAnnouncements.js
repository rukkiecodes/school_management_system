const state = {
    name: 'Science',
    start: '2020-10-10',
    end: '2020-10-10',
    loading: false,
    dialog: false,
}

const mutations = {
    fillAnnouncementForm(state, announcement) {
        state.name = announcement.name
        state.start = announcement.start
        state.end = announcement.end
    }
}

const actions = {
    updateAnnouncementsItem({ commit, dispatch }, announcement) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.updateAnnouncements.name == '' || this.state.updateAnnouncements.start == '' || this.state.updateAnnouncements.end == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        }
        else {
            this.state.updateAnnouncements.loading = true
            fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/events/${announcement?.id}/update` : `/api/v1/events/${announcement?.id}/update`, {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.updateAnnouncements.name,
                    start: this.state.updateAnnouncements.start,
                    end: this.state.updateAnnouncements.end,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message == 'updated successfully') {
                        this.state.updateAnnouncements.loading = false
                        this.state.updateAnnouncements.dialog = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'Updated successfully'
                        this.state.snackbar.color = 'success'

                        this.state.updateAnnouncements.name = ''
                        this.start.updateAnnouncements.start = ''
                        this.state.updateAnnouncements.end = ''

                        return dispatch('getAllAnnouncement')
                    } else {
                        this.state.updateAnnouncements.loading = false
                        this.state.updateAnnouncements.dialog = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'An error occured'
                        this.state.snackbar.color = 'error'
                    }
                })
                .catch(error => { })
        }
    }
}

export default { state, actions, mutations }
