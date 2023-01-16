const state = {
    name: 'Science',
    level: 'JSS1',
    classtype: 'Art',
    formteacher: 'UDENTA, FLORENCE E',
    promotesto: 'JSS1',
    assignedfee: 15500,
    gradeprofile: 'Secondary',
    loading: false,
}

const actions = {
    addNewClassroom({ commit, dispatch }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.addClassroom.name == '' || this.state.addClassroom.level == '' || this.state.addClassroom.classtype == '' || this.state.addClassroom.formteacher == '' || this.state.addClassroom.promotesto == '' || this.state.addClassroom.assignedfee == '' || this.state.addClassroom.gradeprofile == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.addClassroom.loading = true
            fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/classroom/add' : '/api/v1/classroom/add', {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.addClassroom.name,
                    level: this.state.addClassroom.level,
                    classtype: this.state.addClassroom.classtype,
                    formteacher: this.state.addClassroom.formteacher,
                    promotesto: this.state.addClassroom.promotesto,
                    assignedfee: this.state.addClassroom.assignedfee,
                    gradeprofile: this.state.addClassroom.gradeprofile,
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
                        this.state.addClassroom.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'Classroom added successfully'
                        this.state.snackbar.color = 'success'
                        this.state.addClassroom.name = ''
                        this.state.addClassroom.level = null
                        this.state.addClassroom.classtype = null
                        this.state.addClassroom.formteacher = null
                        this.state.addClassroom.promotesto = null
                        this.state.addClassroom.assignedfee = ''
                        this.state.addClassroom.gradeprofile = null

                        return dispatch('getallClassroom')
                    } else {
                        this.state.addClassroom.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'An error occured'
                        this.state.snackbar.color = 'error'
                    }
                })
                .catch(error => {
                    this.state.addClassroom.loading = false
                })
        }
    }
}

export default { state, actions }