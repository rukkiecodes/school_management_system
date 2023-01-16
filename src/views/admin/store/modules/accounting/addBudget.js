const state = {
    session: '2021/2022',
    firstterm: '200',
    secondterm: '5000',
    thirdterm: '2012',
    accountingitem: 'asset',
    loading: false,
}

const actions = {
    addBudgetItem() {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.addBudget.session == '' || this.state.addBudget.firstterm == '' || this.state.addBudget.secondterm == '' || this.state.addBudget.thirdterm == '' || this.state.addBudget.accountingitem == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.addBudget.loading = true
            fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/budget/add' : '/api/v1/budget/add', {
                method: 'POST',
                body: JSON.stringify({
                    session: this.state.addBudget.session,
                    firstterm: this.state.addBudget.firstterm,
                    secondterm: this.state.addBudget.secondterm,
                    thirdterm: this.state.addBudget.thirdterm,
                    accountingitem: this.state.addBudget.accountingitem
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.state.addBudget.loading = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'Budget added successfully'
                    this.state.snackbar.color = 'success'

                    this.state.addBudget.session = ''
                    this.state.addBudget.firstterm = ''
                    this.state.addBudget.secondterm = ''
                    this.state.addBudget.thirdterm = ''
                    this.state.addBudget.accountingitem = ''
                })
                .catch(error => {
                    this.state.addBudget.loading = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions }