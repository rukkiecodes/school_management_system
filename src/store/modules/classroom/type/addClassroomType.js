const state = {
    name: 'Science',
    loading: false,
}

const actions = {
    addNewClassroomType({ commit, dispatch }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.addClassroomType.name == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.addClassroomType.loading = true
            fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/class/type/add' : '/api/v1/class/type/add', {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.addClassroomType.name
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
                        this.state.addClassroomType.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'Classroom type added successfully'
                        this.state.snackbar.color = 'success'
                        console.log(data)
                        this.state.addClassroomType.name = ''

                        return dispatch('getallSClassroomType')
                    } else {
                        this.state.addClassroomType.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'An error occured'
                        this.state.snackbar.color = 'error'
                    }
                })
                .catch(error => {
                    this.state.addClassroomType.loading = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions }