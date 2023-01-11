const state = {
    name: 'Basic',
    level: 'Nursery',
    loading: false,
}

const actions = {
    addNewClassroomCategory({ commit, dispatch }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.addClassroomCategory.name == '' || this.state.addClassroomCategory.level == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.addClassroomCategory.loading = true
            fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/class/category/add' : '/api/v1/class/category/add', {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.addClassroomCategory.name,
                    level: this.state.addClassroomCategory.level,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message == 'Category Added Successfully') {
                        this.state.addClassroomCategory.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'Classroom Category added successfully'
                        this.state.snackbar.color = 'success'
                        console.log(data)
                        this.state.addClassroomCategory.name = ''
                        this.state.addClassroomCategory.level = ''

                        return dispatch('getAllSClassroomCategorys')
                    } else {
                        this.state.addClassroomCategory.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'The email has already been taken'
                        this.state.snackbar.color = 'error'
                    }
                })
                .catch(error => {
                    this.state.addClassroomCategory.loading = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions }