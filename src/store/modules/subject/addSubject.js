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
    addNewSubject() {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.addSubject.firstname == '' || this.state.addSubject.lastname == '' || this.state.addSubject.othername == '' || this.state.addSubject.phone == '' || this.state.addSubject.email == '' || this.state.addSubject.nextofkin == '' || this.state.addSubject.address == '' || this.state.addSubject.gender == '' || this.state.addSubject.classroom == '' || this.state.addSubject.assignedfee == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.addSubject.loading = true
            fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/student/add' : '/api/v1/student/add', {
                method: 'POST',
                body: JSON.stringify({
                    firstname: this.state.addSubject.firstname,
                    lastname: this.state.addSubject.lastname,
                    othername: this.state.addSubject.othername,
                    phone: this.state.addSubject.phone,
                    email: this.state.addSubject.email,
                    nextofkin: this.state.addSubject.nextofkin,
                    address: this.state.addSubject.address,
                    gender: this.state.addSubject.gender,
                    classroom: this.state.addSubject.classroom,
                    assignedfee: this.state.addSubject.assignedfee,
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
                        this.state.addSubject.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'Student added successfully'
                        this.state.snackbar.color = 'success'
                        console.log(data)
                        this.state.addSubject.firstname = ''
                        this.state.addSubject.lastname = ''
                        this.state.addSubject.othername = ''
                        this.state.addSubject.phone = ''
                        this.state.addSubject.email = ''
                        this.state.addSubject.nextofkin = ''
                        this.state.addSubject.address = ''
                        this.state.addSubject.gender = ''
                        this.state.addSubject.classroom = ''
                        this.state.addSubject.assignedfee = ''
                    }
                })
                .catch(error => {
                    this.state.addSubject.loading = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions }