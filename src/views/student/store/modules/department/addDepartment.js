const state = {
    name: 'Tech',
    loading: false,
}

const actions = {
    addNewDepartment({ commit, dispatch }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.addDepartment.name == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.addDepartment.loading = true
            fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/department/add' : '/api/v1/department/add', {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.addDepartment.name
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message == 'Added Successfully') {
                        this.state.addDepartment.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'Department added successfully'
                        this.state.snackbar.color = 'success'

                        this.state.addDepartment.name = ''

                        return dispatch('getAllDepartments')
                    } else {
                        this.state.addDepartment.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'An error occured'
                        this.state.snackbar.color = 'error'
                    }
                })
                .catch(error => {
                    this.state.addDepartment.loading = false
                })
        }
    }
}

export default { state, actions }