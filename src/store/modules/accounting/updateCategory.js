const state = {
    name: '',
    description: '',
    maincategory: '',
    loading: false,
}

const mutations = {
    fillCategoryForm(state, category) {
        state.name = category.name
        state.description = category.description
        state.maincategory = category.maincategory
    }
}

const actions = {
    updateCategoryItem({ commit, dispatch }, category) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        console.log(category?.id)

        if (this.state.updateCategory.name == '' || this.state.updateCategory.description == '' || this.state.updateCategory.maincategory == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        }
        else {
            this.state.updateCategory.loading = true
            fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/accounting/category/${category?.id}/update` : `/api/v1/accounting/category/${category?.id}/update`, {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.updateCategory.name,
                    description: this.state.updateCategory.description,
                    maincategory: this.state.updateCategory.maincategory,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.state.updateCategory.loading = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'Category updated successfully'
                    this.state.snackbar.color = 'success'

                    this.state.updateCategory.name = ''
                    this.state.updateCategory.description = ''
                    this.state.updateCategory.maincategory = ''

                    return dispatch('getAllCategories')
                })
                .catch(error => {
                    this.state.updateCategory.loading = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions, mutations }
