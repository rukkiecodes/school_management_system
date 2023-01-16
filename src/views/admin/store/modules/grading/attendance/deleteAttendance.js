const state = {
    loading: false,
    dialog: false,
}

const actions = {
    deleteThisAttendance({ commit, dispatch }, attendance) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.deleteAttendance.loading = true
        fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/attendance/${attendance?.id}/delete` : `/api/v1/attendance/${attendance?.id}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                this.state.deleteAttendance.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'Deleted successfully'
                this.state.snackbar.color = 'success'

                return dispatch('getAllAttendance')
            })
            .catch(error => {
                this.state.deleteAttendance.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'An error occured'
                this.state.snackbar.color = 'error'
            })
    }
}

export default { actions, state }