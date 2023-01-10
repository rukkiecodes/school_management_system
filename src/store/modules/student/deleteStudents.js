const state = {
    loading: false,
    dialog: false,
}

const actions = {
    deleteStudent({ commit, dispatch }, student) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.deleteStudents.loading = true
        fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/student/${student?.id}/delete` : `/api/v1/student/${student?.id}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                this.state.deleteStudents.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'Student deleted successfully'
                this.state.snackbar.color = 'success'

                return dispatch('getAllStudent')
            })
            .catch(error => {
                this.state.deleteStudents.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'An error occured'
                this.state.snackbar.color = 'error'
            })
    }
}

export default { actions, state }