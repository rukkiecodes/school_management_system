const state = {
    session: '2021/2022',
    firstterm: '200',
    secondterm: '5000',
    thirdterm: '2012',
    accountingitem: 'asset',
    loading: false,
    dialog: false,
}

const mutations = {
    fillUpdateBudgetForm(state, budget) {
        console.log({ ...budget })
        // state.session = budget.session
        // state.firstterm = budget.firstterm
        // state.secondterm = budget.secondterm
        // state.thirdterm = budget.thirdterm
        // state.accountingitem = budget.accountingitem
    }
}

const actions = {
    updateBudgetItem({ commit, dispatch }, budget) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.updateBudget.session == '' || this.state.updateBudget.firstterm == '' || this.state.updateBudget.secondterm == '' || this.state.updateBudget.thirdterm == '' || this.state.updateBudget.accountingitem == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.updateBudget.loading = true
            fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/budget/${budget?.id}/update` : `/api/v1/budget/${budget?.id}/update`, {
                method: 'POST',
                body: JSON.stringify({
                    session: this.state.updateBudget.session,
                    firstterm: this.state.updateBudget.firstterm,
                    secondterm: this.state.updateBudget.secondterm,
                    thirdterm: this.state.updateBudget.thirdterm,
                    accountingitem: this.state.updateBudget.accountingitem,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.state.updateBudget.loading = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'Budget item added successfully'
                    this.state.snackbar.color = 'success'

                    this.state.updateBudget.name = ''
                    this.state.updateBudget.description = ''
                    this.state.updateBudget.firstTerm = ''
                    this.state.updateBudget.secondTerm = ''
                    this.state.updateBudget.thirdTerm = ''
                    this.state.updateBudget.dialog = false

                    return dispatch('getAllFees')
                })
                .catch(error => {
                    this.state.updateBudget.loading = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                    this.state.updateBudget.dialog = false
                })
        }
    }
}

export default { state, actions, mutations }