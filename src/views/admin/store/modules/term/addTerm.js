const state = {
    termname: '1st Term',
    loading: false,
}

const actions = {
    addNewTerm({ commit, dispatch }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.addTerm.termname == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.addTerm.loading = true
            fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/addterm' : '/api/v1/addterm', {
                method: 'POST',
                body: JSON.stringify({
                    termname: this.state.addTerm.termname
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data.message == 'Term added successfully') {
                        this.state.addTerm.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'Term added successfully'
                        this.state.snackbar.color = 'success'

                        this.state.addTerm.termname = ''

                        return dispatch('getAllTerms')
                    } else {
                        this.state.addTerm.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'An error occured'
                        this.state.snackbar.color = 'error'
                    }
                })
                .catch(error => {
                    this.state.addTerm.loading = false
                })
        }
    }
}

export default { state, actions }