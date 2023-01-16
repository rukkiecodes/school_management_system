const state = {
    name: 'attention to details',
    category: 'attention',
    loading: false,
    dialog: false,
}

const mutations = {
    filluUdateBSGradeForm(state, bsgrades) {
        state.name = bsgrades.name
        state.category = bsgrades.category
    }
}

const actions = {
    updateBSGradeItem({ commit, dispatch }, bsgrades) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.updateBSGrade.name == '' || this.state.updateBSGrade.category == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        }
        else {
            this.state.updateBSGrade.loading = true
            fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/bsgrades/${bsgrades?.id}/update` : `/api/v1/bsgrades/${bsgrades?.id}/update`, {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.updateBSGrade.name,
                    category: this.state.updateBSGrade.category,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.state.updateBSGrade.loading = false
                    this.state.updateBSGrade.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'Updated successfully'
                    this.state.snackbar.color = 'success'

                    this.state.updateBSGrade.name = ''
                    this.state.updateBSGrade.category = ''

                    return dispatch('getAllBSGrade')
                })
                .catch(error => {
                    this.state.updateBSGrade.loading = false
                    this.state.updateBSGrade.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions, mutations }
