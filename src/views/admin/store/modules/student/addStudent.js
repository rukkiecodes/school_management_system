const state = {
    firstname: 'john',
    lastname: 'bryan',
    othername: 'b',
    phone: '1234343434',
    email: 'ben@ben.com',
    nextofkin: 'Aboy',
    address: 'aba',
    gender: 'male',
    classroom: 'basic 4',
    assignedfee: 20000,
    loading: false,
}

const actions = {
    addNewStudent() {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.addStudent.firstname == '' || this.state.addStudent.lastname == '' || this.state.addStudent.othername == '' || this.state.addStudent.phone == '' || this.state.addStudent.email == '' || this.state.addStudent.nextofkin == '' || this.state.addStudent.address == '' || this.state.addStudent.gender == '' || this.state.addStudent.classroom == '' || this.state.addStudent.assignedfee == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.addStudent.loading = true
            fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/student/add' : '/api/v1/student/add', {
                method: 'POST',
                body: JSON.stringify({
                    firstname: this.state.addStudent.firstname,
                    lastname: this.state.addStudent.lastname,
                    othername: this.state.addStudent.othername,
                    phone: this.state.addStudent.phone,
                    email: this.state.addStudent.email,
                    nextofkin: this.state.addStudent.nextofkin,
                    address: this.state.addStudent.address,
                    gender: this.state.addStudent.gender,
                    classroom: this.state.addStudent.classroom,
                    assignedfee: this.state.addStudent.assignedfee,
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
                        this.state.addStudent.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'Student added successfully'
                        this.state.snackbar.color = 'success'

                        this.state.addStudent.firstname = ''
                        this.state.addStudent.lastname = ''
                        this.state.addStudent.othername = ''
                        this.state.addStudent.phone = ''
                        this.state.addStudent.email = ''
                        this.state.addStudent.nextofkin = ''
                        this.state.addStudent.address = ''
                        this.state.addStudent.gender = ''
                        this.state.addStudent.classroom = ''
                        this.state.addStudent.assignedfee = ''
                    } else {
                        this.state.addStudent.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'The email has already been taken'
                        this.state.snackbar.color = 'error'
                    }
                })
                .catch(error => {
                    this.state.addStudent.loading = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions }