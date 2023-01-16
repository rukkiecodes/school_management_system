const state = {
    name: 'attention to details',
    category: 'attention',
    loading: false,
}

const actions = {
    addNewBSGrade({ commit, dispatch }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.addBSGrade.name == '' || this.state.addBSGrade.category == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.addBSGrade.loading = true
            fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/bsgrades/add' : '/api/v1/bsgrades/add', {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.addBSGrade.name,
                    category: this.state.addBSGrade.category,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message == 'Added Successfully') {
                        this.state.addBSGrade.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'Added successfully'
                        this.state.snackbar.color = 'success'

                        this.state.addBSGrade.name = ''
                        this.state.addBSGrade.category = null

                        return dispatch('getAllBSGrade')
                    } else {
                        this.state.addBSGrade.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'An error occured'
                        this.state.snackbar.color = 'error'
                    }
                })
                .catch(error => {
                    this.state.addBSGrade.loading = false
                })
        }
    }
}

export default { state, actions }