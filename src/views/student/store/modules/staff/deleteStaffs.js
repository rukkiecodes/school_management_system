const state = {
    loading: false,
    dialog: false,
}

const actions = {
    deleteStaff({ commit, dispatch }, staff) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.deleteStaffs.loading = true
        fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/staff/${staff?.id}/delete` : `/api/v1/staff/${staff?.id}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                this.state.deleteStaffs.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'Staff deleted successfully'
                this.state.snackbar.color = 'success'

                return dispatch('getAllStaff')
            })
            .catch(error => {
                this.state.deleteStaffs.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'An error occured'
                this.state.snackbar.color = 'error'
            })
    }
}

export default { actions, state }