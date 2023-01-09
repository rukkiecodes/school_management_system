const state = {
    loading: false,
    dialog: false,
}

const actions = {
    deleteSubject({ commit, dispatch }, subject) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.deleteSubjects.loading = true
        fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/subject/${subject}/delete` : `/api/v1/subject/${subject}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                this.state.deleteSubjects.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'Subject deleted successfully'
                this.state.snackbar.color = 'success'

                return dispatch('getAllSubject')
            })
            .catch(error => {
                this.state.deleteSubjects.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'An error occured'
                this.state.snackbar.color = 'error'
            })
    }
}

export default { actions, state }