const state = {
    address: "aba",//
    assignedfee: "none",//
    classroom: "basic 4",//
    email: "test@test.commm",//
    firstname: "john",//
    gender: "male",//
    lastname: "bryan",//
    nextofkin: "Aboy",//
    othername: "b",//
    phone: "1234343434",//
    loading: false,
    dialog: false,
}

const mutations = {
    fillStudentForm(state, student) {
        state.address = student.address
        state.assignedfee = student.assignedfee
        state.classroom = student.classroom
        state.email = student.email
        state.firstname = student.firstname
        state.gender = student.gender
        state.lastname = student.lastname
        state.nextofkin = student.nextofkin
        state.othername = student.othername
        state.phone = student.phone
    }
}

const actions = {
    updateStudentItem({ commit, dispatch }, student) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.updateStudent.address == '' || this.state.updateStudent.assignedfee == '' || this.state.updateStudent.classroom == '' || this.state.updateStudent.email == '' || this.state.updateStudent.firstname == '' || this.state.updateStudent.gender == '' || this.state.updateStudent.lastname == '' || this.state.updateStudent.nextofkin == '' || this.state.updateStudent.othername == '' || this.state.updateStudent.phone == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.updateStudent.loading = true
            fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/student/${student?.id}/update` : `/api/v1/student/${student?.id}/update`, {
                method: 'POST',
                body: JSON.stringify({
                    firstname: this.state.updateStudent.firstname,
                    lastname: this.state.updateStudent.lastname,
                    othername: this.state.updateStudent.othername,
                    phone: this.state.updateStudent.phone,
                    email: this.state.updateStudent.email,
                    nextofkin: this.state.updateStudent.nextofkin,
                    address: this.state.updateStudent.address,
                    gender: this.state.updateStudent.gender,
                    classroom: this.state.updateStudent.classroom,
                    assignedfee: this.state.updateStudent.assignedfee,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.state.updateStudent.loading = false
                    this.state.updateStudent.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'Subject updated successfully'
                    this.state.snackbar.color = 'success'

                    this.state.updateStudent.firstname = ''
                    this.state.updateStudent.lastname = ''
                    this.state.updateStudent.othername = ''
                    this.state.updateStudent.phone = ''
                    this.state.updateStudent.email = ''
                    this.state.updateStudent.nextofkin = ''
                    this.state.updateStudent.address = ''
                    this.state.updateStudent.gender = ''
                    this.state.updateStudent.classroom = ''
                    this.state.updateStudent.assignedfee = ''

                    return dispatch('getAllStudent')
                })
                .catch(error => {
                    this.state.updateStudent.loading = false
                    this.state.updateStudent.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions, mutations }
