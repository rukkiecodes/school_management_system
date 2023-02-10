const state = {
    termname: 'Science',
    loading: false,
    dialog: false,
}

const mutations = {
    fillTermForm(state, term) {
        state.termname = term.termname
    }
}

const actions = {
    updateTermItem({ commit, dispatch }, term) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.updateTerm.termname == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        }
        else {
            this.state.updateTerm.loading = true
            fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/term/${term?.id}/update` : `/api/v1/term/${term?.id}/update`, {
                method: 'POST',
                body: JSON.stringify({
                    termname: this.state.updateTerm.termname
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.state.updateTerm.loading = false
                    this.state.updateTerm.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'Term updated successfully'
                    this.state.snackbar.color = 'success'

                    this.state.updateTerm.termname = ''

                    return dispatch('getAllTerms')
                })
                .catch(error => {
                    this.state.updateTerm.loading = false
                    this.state.updateTerm.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions, mutations }
