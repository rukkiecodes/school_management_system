const state = {
    loading: false,
    dialog: false,
}

const actions = {
    deleteThisAnnouncement({ commit, dispatch }, announcement) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.deleteAnnouncements.loading = true
        fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/events/${announcement?.id}/delete` : `/api/v1/events/${announcement?.id}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                this.state.deleteAnnouncements.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'Deleted successfully'
                this.state.snackbar.color = 'success'

                return dispatch('getAllAnnouncement')
            })
            .catch(error => {
                this.state.deleteAnnouncements.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'An error occured'
                this.state.snackbar.color = 'error'
            })
    }
}

export default { actions, state }