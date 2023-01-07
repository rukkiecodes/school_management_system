const state = {
    dialog: false,
    loading: false,
}

const actions = {
    removeSingleFund({ commit, dispatch }, id) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        this.state.deleteSingleFund.loading = true
        fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/funds/${id}/delete` : `/api/v1/funds/${id}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.state.deleteSingleFund.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'Fund item deleted successfully'
                this.state.snackbar.color = 'success'

                return dispatch('getAllFunds')
            })
            .catch(error => {
                this.state.deleteSingleFund.loading = false
                console.error('Error:', error)
            })
    }
}

export default { state, actions }