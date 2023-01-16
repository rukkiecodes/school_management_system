const state = {
    loading: false,
    dialog: false,
}

const actions = {
    deleteThisDepartment({ commit, dispatch }, department) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.deleteDepartment.loading = true
        fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/department/${department?.id}/delete` : `/api/v1/department/${department?.id}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                this.state.deleteDepartment.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'Department deleted successfully'
                this.state.snackbar.color = 'success'

                return dispatch('getAllDepartments')
            })
            .catch(error => {
                this.state.deleteDepartment.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'An error occured'
                this.state.snackbar.color = 'error'
            })
    }
}

export default { actions, state }