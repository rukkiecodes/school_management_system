const state = {
    loading: false,
    name: 'Dues',
    description: 'fees category',
    maincategory: 'asset',
}

const actions = {
    createCategory() {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        // console.log('createCategory', this.state.createCategoies.name)
        if (!this.state.createCategoies.name || !this.state.createCategoies.description || !this.state.createCategoies.maincategory) {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill in all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.createCategoies.loading = true
            fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/accounting/category/add' : '/api/v1/accounting/category/add', {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.createCategoies.name,
                    description: this.state.createCategoies.description,
                    maincategory: this.state.createCategoies.maincategory,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.state.createCategoies.loading = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'Category created successfully'
                    this.state.snackbar.color = 'success'

                    this.state.createCategoies.name = ''
                    this.state.createCategoies.description = ''
                    this.state.createCategoies.maincategory = ''
                })
                .catch(error => {
                    this.state.createCategoies.loading = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { actions, state }