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

const mutations = {
    fillFundForm(state, fund) {
        state.session = fund.session
        state.term = fund.term
        state.amount = fund.amount
        state.reason = fund.reason
        state.transactiontype = fund.transactiontype
        state.accountingitem = fund.accountingitem
        state.initiator = fund.initiator
    }
}

const actions = {
    updateFundItem({ commit, dispatch }, fund) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.updateFund.session == '' || this.state.updateFund.term == '' || this.state.updateFund.amount == '' || this.state.updateFund.reason == '' || this.state.updateFund.transactiontype == '' || this.state.updateFund.accountingitem == '' || this.state.updateFund.initiator == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.updateFund.loading = true
            fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/funds/${fund?.id}/update` : `/api/v1/funds/${fund?.id}/update`, {
                method: 'POST',
                body: JSON.stringify({
                    session: this.state.updateFund.session,
                    term: this.state.updateFund.term,
                    amount: this.state.updateFund.amount,
                    reason: this.state.updateFund.reason,
                    transactiontype: this.state.updateFund.transactiontype,
                    accountingitem: this.state.updateFund.accountingitem,
                    initiator: this.state.updateFund.initiator,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.state.updateFund.loading = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'Fund item added successfully'
                    this.state.snackbar.color = 'success'

                    this.state.updateFund.session = ''
                    this.state.updateFund.term = ''
                    this.state.updateFund.amount = ''
                    this.state.updateFund.reason = ''
                    this.state.updateFund.transactiontype = ''
                    this.state.updateFund.accountingitem = ''
                    this.state.updateFund.initiator = ''

                    return dispatch('getAllFunds')
                })
                .catch(error => {
                    this.state.updateFund.loading = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions, mutations }







// const state = {
//     name: '',
//     description: '',
//     firstTerm: '',
//     secondTerm: '',
//     thirdTerm: '',
//     loading: false,
//     dialog: false,
// }

// const mutations = {
//     fillForm(state, fee) {
//         state.name = fee.name
//         state.description = fee.description
//         state.firstTerm = fee.firsttermamount
//         state.secondTerm = fee.secondtermamount
//         state.thirdTerm = fee.thirdtermamount
//     }
// }

// const actions = {
//     updateFundItem({ commit, dispatch }, fee) {
//         let { token } = JSON.parse(localStorage.mulitalantToken)

//         if (this.state.updateFund.name == '' || this.state.updateFund.description == '' || this.state.updateFund.firstTerm == '' || this.state.updateFund.secondTerm == '' || this.state.updateFund.thirdTerm == '') {
//             this.state.snackbar.active = true
//             this.state.snackbar.text = 'Please fill all fields'
//             this.state.snackbar.color = 'error'
//         } else {
//             this.state.updateFund.loading = true
//             fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/fees/${fee?.id}/update` : `/api/v1/fees/${fee?.id}/update`, {
//                 method: 'POST',
//                 body: JSON.stringify({
//                     name: this.state.updateFund.name,
//                     description: this.state.updateFund.description,
//                     firsttermamount: this.state.updateFund.firstTerm,
//                     secondtermamount: this.state.updateFund.secondTerm,
//                     thirdtermamount: this.state.updateFund.thirdTerm,
//                 }),
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${token}`,
//                     'Accept': 'application/json',
//                 }
//             })
//                 .then(response => response.json())
//                 .then(data => {
//                     this.state.updateFund.loading = false
//                     this.state.snackbar.active = true
//                     this.state.snackbar.text = 'Fee item added successfully'
//                     this.state.snackbar.color = 'success'

//                     this.state.updateFund.name = ''
//                     this.state.updateFund.description = ''
//                     this.state.updateFund.firstTerm = ''
//                     this.state.updateFund.secondTerm = ''
//                     this.state.updateFund.thirdTerm = ''
//                     this.state.updateFund.dialog = false

//                     return dispatch('getAllFees')
//                 })
//                 .catch(error => {
//                     this.state.updateFund.loading = false
//                     this.state.snackbar.active = true
//                     this.state.snackbar.text = 'An error occured'
//                     this.state.snackbar.color = 'error'
//                     this.state.updateFund.dialog = false
//                 })
//         }
//     }
// }

// export default { state, actions, mutations }