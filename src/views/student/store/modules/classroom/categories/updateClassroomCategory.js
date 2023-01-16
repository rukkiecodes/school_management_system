const state = {
    name: 'Basic',
    level: 'Nursery',
    loading: false,
    dialog: false,
}

const mutations = {
    fillClassroomCategoryForm(state, category) {
        state.name = category.name
        state.level = category.level
    }
}

const actions = {
    updateClassroomCategoryItem({ commit, dispatch }, category) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.updateClassroomCategory.level == '' || this.state.updateClassroomCategory.name == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        }
        else {
            this.state.updateClassroomCategory.loading = true
            fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/class/category/${category?.id}/update` : `/api/v1/class/category/${category?.id}/update`, {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.updateClassroomCategory.name,
                    level: this.state.updateClassroomCategory.level,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.state.updateClassroomCategory.loading = false
                    this.state.updateClassroomCategory.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'Subject updated successfully'
                    this.state.snackbar.color = 'success'

                    this.state.updateClassroomCategory.name = ''
                    this.state.updateClassroomCategory.level = ''

                    return dispatch('getAllSClassroomCategory')
                })
                .catch(error => {
                    this.state.updateClassroomCategory.loading = false
                    this.state.updateClassroomCategory.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions, mutations }
