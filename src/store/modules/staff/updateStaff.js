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
    dialog: false,
}

const mutations = {
    fillStaffUpdateForm(state, staff) {
        state.firstname = staff.firstname
        state.lastname = staff.lastname
        state.othername = staff.othername
        state.phone = staff.phone
        state.email = staff.email
        state.nextofkin = staff.nextofkin
        state.address = staff.address
        state.department = staff.department
        state.role = staff.role
    }
}

const actions = {
    updateStaffItem({ commit, dispatch }, staff) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.updateStaff.firstname == '' || this.state.updateStaff.lastname == '' || this.state.updateStaff.othername == '' || this.state.updateStaff.phone == '' || this.state.updateStaff.email == '' || this.state.updateStaff.nextofkin == '' || this.state.updateStaff.address == '' || this.state.updateStaff.department == '' || this.state.updateStaff.role == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.updateStaff.loading = true
            fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/staff/${staff.id}/update` : `/api/v1/staff/${staff.id}/update`, {
                method: 'POST',
                body: JSON.stringify({
                    firstname: this.state.updateStaff.firstname,
                    lastname: this.state.updateStaff.lastname,
                    othername: this.state.updateStaff.othername,
                    phone: this.state.updateStaff.phone,
                    email: this.state.updateStaff.email,
                    nextofkin: this.state.updateStaff.nextofkin,
                    address: this.state.updateStaff.address,
                    department: this.state.updateStaff.department,
                    role: this.state.updateStaff.role,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.state.updateStaff.loading = false
                    this.state.updateStaff.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'Fund item added successfully'
                    this.state.snackbar.color = 'success'
                    
                    this.state.updateStaff.firstname = ''
                    this.state.updateStaff.lastname = ''
                    this.state.updateStaff.othername = ''
                    this.state.updateStaff.phone = ''
                    this.state.updateStaff.email = ''
                    this.state.updateStaff.nextofkin = ''
                    this.state.updateStaff.address = ''
                    this.state.updateStaff.department = ''
                    this.state.updateStaff.role = ''
                    
                    return dispatch('getAllStaff')
                })
                .catch(error => {
                    this.state.updateStaff.loading = false
                    this.state.updateStaff.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions, mutations }
