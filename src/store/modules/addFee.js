const state = {
    name: '',
    description: '',
    firstTerm: '',
    secondTerm: '',
    thirdTerm: '',
    loading: false,
}

const actions = {
    addFeeItem() {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.addFee.name == '' || this.state.addFee.description == '' || this.state.addFee.firstTerm == '' || this.state.addFee.secondTerm == '' || this.state.addFee.thirdTerm == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.addFee.loading = true
            fetch('/api/v1/fees/add', {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.addFee.name,
                    description: this.state.addFee.description,
                    firsttermamount: this.state.addFee.firstTerm,
                    secondtermamount: this.state.addFee.secondTerm,
                    thirdtermamount: this.state.addFee.thirdTerm,
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