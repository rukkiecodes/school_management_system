const state = {
    loading: false,
    dialog: false,
}

const actions = {
    deleteClass({ commit, dispatch }, _class) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.deleteClassroom.loading = true
        fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/classroom/${_class?.id}/delete` : `/api/v1/classroom/${_class?.id}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                this.state.deleteClassroom.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'Classroom deleted successfully'
                this.state.snackbar.color = 'success'

                return dispatch('getallClassroom')
            })
            .catch(error => {
                this.state.deleteClassroom.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'An error occured'
                this.state.snackbar.color = 'error'
            })
    }
}

export default { actions, state }