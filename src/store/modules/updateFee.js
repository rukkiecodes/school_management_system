const state = {
    name: '',
    description: '',
    firstTerm: '',
    secondTerm: '',
    thirdTerm: '',
    loading: false,
    dialog: false,
}

const mutations = {
    fillForm(state, fee) {
        state.name = fee.name
        state.description = fee.description
        state.firstTerm = fee.firsttermamount
        state.secondTerm = fee.secondtermamount
        state.thirdTerm = fee.thirdtermamount
    }
}

const actions = {
    updateFeeItem({ commit, dispatch }, fee) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.updateFee.name == '' || this.state.updateFee.description == '' || this.state.updateFee.firstTerm == '' || this.state.updateFee.secondTerm == '' || this.state.updateFee.thirdTerm == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.updateFee.loading = true
            fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/fees/${fee?.id}/update` : `/api/v1/fees/${fee?.id}/update`, {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.updateFee.name,
                    description: this.state.updateFee.description,
                    firsttermamount: this.state.updateFee.firstTerm,
                    secondtermamount: this.state.updateFee.secondTerm,
                    thirdtermamount: this.state.updateFee.thirdTerm,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.state.updateFee.loading = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'Fee item added successfully'
                    this.state.snackbar.color = 'success'

                    this.state.updateFee.name = ''
                    this.state.updateFee.description = ''
                    this.state.updateFee.firstTerm = ''
                    this.state.updateFee.secondTerm = ''
                    this.state.updateFee.thirdTerm = ''
                    this.state.updateFee.dialog = false

                    return dispatch('getAllFees')
                })
                .catch(error => {
                    this.state.updateFee.loading = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                    this.state.updateFee.dialog = false
                })
        }
    }
}

export default { state, actions, mutations }