const state = {
    session: '2021/2022',
    term: '2nd Term',
    amount: '5000',
    reason: 'Petrol',
    transactiontype: 'outgoing',
    accountingitem: 'asset',
    initiator: 'john ini',
    loading: false,
}

const actions = {
    addFundItem() {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.addFund.session == '' || this.state.addFund.term == '' || this.state.addFund.amount == '' || this.state.addFund.reason == '' || this.state.addFund.transactiontype == '' || this.state.addFund.accountingitem == '' || this.state.addFund.initiator == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.addFund.loading = true
            fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/funds/add' : '/api/v1/funds/add', {
                method: 'POST',
                body: JSON.stringify({
                    session: this.state.addFund.session,
                    term: this.state.addFund.term,
                    amount: this.state.addFund.amount,
                    reason: this.state.addFund.reason,
                    transactiontype: this.state.addFund.transactiontype,
                    accountingitem: this.state.addFund.accountingitem,
                    initiator: this.state.addFund.initiator,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.state.addFund.loading = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'Fee item added successfully'
                    this.state.snackbar.color = 'success'

                    this.state.addFund.session = ''
                    this.state.addFund.term = ''
                    this.state.addFund.amount = ''
                    this.state.addFund.reason = ''
                    this.state.addFund.transactiontype = ''
                    this.state.addFund.accountingitem = ''
                    this.state.addFund.initiator = ''
                })
                .catch(error => {
                    this.state.addFund.loading = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions }