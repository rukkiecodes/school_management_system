const state = {
    loading: false,
    dialog: false,
}

const actions = {
    deleteClassLevel({ commit, dispatch }, level) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.deleteClassroomLevel.loading = true
        fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/class/level/${level?.id}/delete` : `/api/v1/class/level/${level?.id}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                this.state.deleteClassroomLevel.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'Level deleted successfully'
                this.state.snackbar.color = 'success'

                return dispatch('getallSClassroomLevel')
            })
            .catch(error => {
                this.state.deleteClassroomLevel.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'An error occured'
                this.state.snackbar.color = 'error'
            })
    }
}

export default { actions, state }