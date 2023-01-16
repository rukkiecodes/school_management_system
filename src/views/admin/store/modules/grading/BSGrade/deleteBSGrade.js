const state = {
    loading: false,
    dialog: false,
}

const actions = {
    deleteThisBSGrade({ commit, dispatch }, bsgrades) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.deleteBSGrade.loading = true
        fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.li/api/v1/bsgrades/${bsgrades?.id}/delete` : `/api/v1/bsgrades/${bsgrades?.id}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                this.state.deleteBSGrade.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'Deleted successfully'
                this.state.snackbar.color = 'success'

                return dispatch('getAllBSGrade')
            })
            .catch(error => {
                this.state.deleteBSGrade.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'An error occured'
                this.state.snackbar.color = 'error'
            })
    }
}

export default { actions, state }