const state = {
    loading: false,
    dialog: false,
}

const actions = {
    deleteThisTerm({ commit, dispatch }, term) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.deleteTerm.loading = true
        fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/term/${term?.id}/delete` : `/api/v1/term/${term?.id}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                this.state.deleteTerm.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'Term deleted successfully'
                this.state.snackbar.color = 'success'

                return dispatch('getAllTerms')
            })
            .catch(error => {
                this.state.deleteTerm.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'An error occured'
                this.state.snackbar.color = 'error'
            })
    }
}

export default { actions, state }