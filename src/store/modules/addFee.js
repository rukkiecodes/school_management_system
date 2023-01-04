const state = {
    name: 'name',
    description: 'description',
    firstTerm: 'firstTerm',
    secondTerm: 'secondTerm',
    thirdTerm: 'thirdTerm',
    loading: false,
}

const actions = {
    addFeeItem() {
        let { name, description, firstTerm, secondTerm, thirdTerm } = this.state.addFee
        let { token } = JSON.parse(localStorage.mulitalantToken)

        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('firsttermamount', firstTerm)
        formData.append('secondtermamount', secondTerm)
        formData.append('thirdtermamount', thirdTerm)

        if (name == '' || description == '' || firstTerm == '' || secondTerm == '' || thirdTerm == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.addFee.loading = true
            fetch('/api/v1/fees/add', {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Connection': 'keep-alive'
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