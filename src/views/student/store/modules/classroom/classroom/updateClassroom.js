const state = {
    name: 'Science',
    level: 'JSS1',
    classtype: 'Art',
    formteacher: 'UDENTA, FLORENCE E',
    promotesto: 'JSS1',
    assignedfee: 15500,
    gradeprofile: 'Secondary',
    loading: false,
    dialog: false,
}

const mutations = {
    fillClassroomForm(state, _class) {
        state.name = _class.name
        state.level = _class.level
        state.classtype = _class.classtype
        state.formteacher = _class.formteacher
        state.promotesto = _class.promotesto
        state.assignedfee = _class.assignedfee
        state.gradeprofile = _class.gradeprofile
    }
}

const actions = {
    updateClassroomItem({ commit, dispatch }, _class) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.updateClassroom.name == '' || this.state.updateClassroom.level == '' || this.state.updateClassroom.classtype == '' || this.state.updateClassroom.formteacher == '' || this.state.updateClassroom.promotesto == '' || this.state.updateClassroom.assignedfee == '' || this.state.updateClassroom.gradeprofile == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        }
        else {
            this.state.updateClassroom.loading = true
            fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/classroom/${_class?.id}/update` : `/api/v1/classroom/${_class?.id}/update`, {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.updateClassroom.name,
                    level: this.state.updateClassroom.level,
                    classtype: this.state.updateClassroom.classtype,
                    formteacher: this.state.updateClassroom.formteacher,
                    promotesto: this.state.updateClassroom.promotesto,
                    assignedfee: this.state.updateClassroom.assignedfee,
                    gradeprofile: this.state.updateClassroom.gradeprofile,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.state.updateClassroom.loading = false
                    this.state.updateClassroom.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'Classroom updated successfully'
                    this.state.snackbar.color = 'success'

                    this.state.updateClassroom.name = ''
                    this.state.updateClassroom.level = ''
                    this.state.updateClassroom.classtype = ''
                    this.state.updateClassroom.formteacher = ''
                    this.state.updateClassroom.promotesto = ''
                    this.state.updateClassroom.assignedfee = ''
                    this.state.updateClassroom.gradeprofile = ''

                    return dispatch('getallClassroom')
                })
                .catch(error => {
                    this.state.updateClassroom.loading = false
                    this.state.updateClassroom.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions, mutations }
