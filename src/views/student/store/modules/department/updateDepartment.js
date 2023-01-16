const state = {
    name: 'Science',
    loading: false,
    dialog: false,
}

const mutations = {
    fillDepartmentForm(state, department) {
        state.name = department.name
    }
}

const actions = {
    updateDepartmentItem({ commit, dispatch }, department) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.updateDepartment.name == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        }
        else {
            this.state.updateDepartment.loading = true
            fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/department/${department?.id}/update` : `/api/v1/department/${department?.id}/update`, {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.updateDepartment.name
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.state.updateDepartment.loading = false
                    this.state.updateDepartment.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'Department updated successfully'
                    this.state.snackbar.color = 'success'

                    this.state.updateDepartment.name = ''

                    return dispatch('getAllDepartments')
                })
                .catch(error => {
                    this.state.updateDepartment.loading = false
                    this.state.updateDepartment.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions, mutations }
