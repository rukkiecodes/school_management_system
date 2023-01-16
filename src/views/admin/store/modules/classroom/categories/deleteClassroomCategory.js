const state = {
    loading: false,
    dialog: false,
}

const actions = {
    deleteClassCategory({ commit, dispatch }, category) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.deleteClassroomCategory.loading = true
        fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/class/category/${category?.id}/delete` : `/api/v1/class/category/${category?.id}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                this.state.deleteClassroomCategory.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'category deleted successfully'
                this.state.snackbar.color = 'success'

                return dispatch('getAllSClassroomCategory')
            })
            .catch(error => {
                this.state.deleteClassroomCategory.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'An error occured'
                this.state.snackbar.color = 'error'
            })
    }
}

export default { actions, state }