const state = {
    dialog: false,
    loading: false,
}

const actions = {
    removeSingleCategory({ commit, dispatch }, id) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        this.state.deleteSingleCategory.loading = true
        fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/accounting/category/${id}/delete` : `/api/v1/accounting/category/${id}/delete`, {
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
                this.state.deleteSingleCategory.loading = false
                this.state.snackbar.active = true
                this.state.snackbar.text = 'Fund item deleted successfully'
                this.state.snackbar.color = 'success'

                return dispatch('getAllCategories')
            })
            .catch(error => {
                this.state.deleteSingleCategory.loading = false
                console.error('Error:', error)
            })
    }
}

export default { state, actions }