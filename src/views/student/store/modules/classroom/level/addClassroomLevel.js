const state = {
    name: 'Basic',
    category: 'Nursery',
    graduationlevel: 'No',
    loading: false,
}

const actions = {
    addNewClassroomLevel({ commit, dispatch }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.addClassroomLevel.name == '' || this.state.addClassroomLevel.category == '' || this.state.addClassroomLevel.graduationlevel == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.addClassroomLevel.loading = true
            fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/class/level/add' : '/api/v1/class/level/add', {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.addClassroomLevel.name,
                    category: this.state.addClassroomLevel.category,
                    graduationlevel: this.state.addClassroomLevel.graduationlevel,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message == 'level Added Successfully') {
                        this.state.addClassroomLevel.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'Classroom level added successfully'
                        this.state.snackbar.color = 'success'
                        this.state.addClassroomLevel.name = ''
                        this.state.addClassroomLevel.category = ''
                        this.state.addClassroomLevel.graduationlevel = ''

                        return dispatch('getallSClassroomLevel')
                    } else {
                        this.state.addClassroomLevel.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'An error occured'
                        this.state.snackbar.color = 'error'
                    }
                })
                .catch(error => {
                    this.state.addClassroomLevel.loading = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions }