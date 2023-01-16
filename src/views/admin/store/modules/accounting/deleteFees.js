const state = {
    loading: false,
    dialog: false,
}

const actions = {
    deleteFee({ commit, dispatch }, fee) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.deleteFees.loading = true
        fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/fees/${fee?.id}/delete` :  `/api/v1/fees/${fee?.id}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                this.state.deleteFees.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'Fee item deleted successfully'
                this.state.snackbar.color = 'success'

                return dispatch('getAllFees')
            })
            .catch(error => {
                this.state.deleteFees.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'An error occured'
                this.state.snackbar.color = 'error'
            })
    }
}

export default { actions, state }