const state = {
    firstname: 'john',
    lastname: 'bryan',
    othername: 'b',
    phone: '1234343434',
    email: 'ben@ben.com',
    nextofkin: 'Aboy',
    address: 'aba',
    department: 'ict',
    role: 'form teacher',
    loading: false,
}

const actions = {
    addNewStaff({ commit, dispatch }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.addStaff.firstname == '' || this.state.addStaff.lastname == '' || this.state.addStaff.othername == '' || this.state.addStaff.phone == '' || this.state.addStaff.email == '' || this.state.addStaff.nextofkin == '' || this.state.addStaff.address == '' || this.state.addStaff.department == '' || this.state.addStaff.role == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.addStaff.loading = true
            fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/staff/add' : '/api/v1/staff/add', {
                method: 'POST',
                body: JSON.stringify({
                    firstname: this.state.addStaff.firstname,
                    lastname: this.state.addStaff.lastname,
                    othername: this.state.addStaff.othername,
                    phone: this.state.addStaff.phone,
                    email: this.state.addStaff.email,
                    nextofkin: this.state.addStaff.nextofkin,
                    address: this.state.addStaff.address,
                    department: this.state.addStaff.department,
                    role: this.state.addStaff.role,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message == 'The given data was invalid.') {
                        this.state.addStaff.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'The email has already been taken.'
                        this.state.snackbar.color = 'error'
                    } else {
                        this.state.addStaff.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'Fee item added successfully'
                        this.state.snackbar.color = 'success'

                        this.state.addStaff.firstname = ''
                        this.state.addStaff.lastname = ''
                        this.state.addStaff.othername = ''
                        this.state.addStaff.phone = ''
                        this.state.addStaff.email = ''
                        this.state.addStaff.nextofkin = ''
                        this.state.addStaff.address = ''
                        this.state.addStaff.department = ''
                        this.state.addStaff.role = ''

                        return dispatch('getAllStaff')
                    }

                })
                .catch(error => {
                    this.state.addStaff.loading = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions }