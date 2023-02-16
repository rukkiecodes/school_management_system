const state = {
    name: 'School Bus',
    description: 'fees for the academic session',
    firstTerm: '1400',
    secondTerm: '359',
    thirdTerm: '3093',
    class: 'JSS 1',
    session: '2020/2021',
    loading: false,
}

const actions = {
    addFeeItem({ commit, dispatch }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.addFee.name == '' || this.state.addFee.description == '' || this.state.addFee.firstTerm == '' || this.state.addFee.secondTerm == '' || this.state.addFee.thirdTerm == '' || this.state.addFee.class == '' || this.state.addFee.session == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.addFee.loading = true
            fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/fees/add' : '/api/v1/fees/add', {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.addFee.name,
                    description: this.state.addFee.description,
                    firsttermamount: this.state.addFee.firstTerm,
                    secondtermamount: this.state.addFee.secondTerm,
                    thirdtermamount: this.state.addFee.thirdTerm,
                    class: this.state.addFee.class,
                    session: this.state.addFee.session,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.state.addFee.loading = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'Fee item added successfully'
                    this.state.snackbar.color = 'success'

                    this.state.addFee.name = ''
                    this.state.addFee.description = ''
                    this.state.addFee.firstTerm = ''
                    this.state.addFee.secondTerm = ''
                    this.state.addFee.thirdTerm = ''
                    this.state.addFee.class = ''
                    this.state.addFee.session = ''

                    return dispatch('getAllFees')
                })
                .catch(error => {
                    this.state.addFee.loading = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions }