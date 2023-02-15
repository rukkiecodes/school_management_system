const state = {
    loading: false,
    dialog: false,
}

const actions = {
    deleteThisSession({ commit, dispatch }, session) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.deleteSession.loading = true
        fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/session/${session?.id}/delete` : `/api/v1/session/${session?.id}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                this.state.deleteSession.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'Session deleted successfully'
                this.state.snackbar.color = 'success'

                return dispatch('getAllSessions')
            })
            .catch(error => {
                this.state.deleteSession.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'An error occured'
                this.state.snackbar.color = 'error'
            })
    }
}

export default { actions, state }