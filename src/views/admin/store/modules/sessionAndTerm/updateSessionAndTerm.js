const state = {
    session: 'Science',
    term: 'Science',
    loading: false,
    dialog: false,
}

const mutations = {
    fillSessionAndTermForm(state, term) {
        state.name = term.name
    }
}

const actions = {
    updateSessionAndTermItem({ commit, dispatch }, term) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.updateSessionAndTerm.name == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        }
        else {
            this.state.updateSessionAndTerm.loading = true
            fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/currentsess/update` : `/api/v1/currentsess/update`, {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.updateSessionAndTerm.name
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.state.updateSessionAndTerm.loading = false
                    this.state.updateSessionAndTerm.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'Term updated successfully'
                    this.state.snackbar.color = 'success'

                    this.state.updateSessionAndTerm.name = ''

                    return dispatch('getAllTerms')
                })
                .catch(error => {
                    this.state.updateSessionAndTerm.loading = false
                    this.state.updateSessionAndTerm.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions, mutations }
