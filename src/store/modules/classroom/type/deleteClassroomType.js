const state = {
    loading: false,
    dialog: false,
}

const actions = {
    deleteClassType({ commit, dispatch }, type) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.deleteClassroomType.loading = true
        fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/class/type/${type?.id}/delete` : `/api/v1/class/type/${type?.id}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                this.state.deleteClassroomType.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'Type deleted successfully'
                this.state.snackbar.color = 'success'

                return dispatch('getallSClassroomType')
            })
            .catch(error => {
                this.state.deleteClassroomType.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'An error occured'
                this.state.snackbar.color = 'error'
            })
    }
}

export default { actions, state }