const state = {
    studentname: 'Tech',
    studentid: '1',
    classlevel: "basic 1",
    classroom: "basic",
    attendancescore: 20,
    session: '2020/2021',
    term: "1st Term",
    loading: false,
}

const actions = {
    addNewAttendance({ commit, dispatch }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.addAttendance.studentname == '' || this.state.addAttendance.studentid == '' || this.state.addAttendance.classlevel == '' || this.state.addAttendance.classroom == '' || this.state.addAttendance.attendancescore == '' || this.state.addAttendance.session == '' || this.state.addAttendance.term == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.addAttendance.loading = true
            fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/attendance/add' : '/api/v1/attendance/add', {
                method: 'POST',
                body: JSON.stringify({
                    studentname: this.state.addAttendance.studentname,
                    studentid: this.state.addAttendance.studentid,
                    classlevel: this.state.addAttendance.classlevel,
                    classroom: this.state.addAttendance.classroom,
                    attendancescore: this.state.addAttendance.attendancescore,
                    session: this.state.addAttendance.session,
                    term: this.state.addAttendance.term,
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
                        this.state.addAttendance.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'Added successfully'
                        this.state.snackbar.color = 'success'

                        this.state.addAttendance.studentname = ''
                        this.state.addAttendance.studentid = ''
                        this.state.addAttendance.classlevel = ''
                        this.state.addAttendance.classroom = ''
                        this.state.addAttendance.attendancescore = ''
                        this.state.addAttendance.session = ''
                        this.state.addAttendance.term = ''

                        return dispatch('getAllAttendance')
                    } else {
                        this.state.addAttendance.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'An error occured'
                        this.state.snackbar.color = 'error'
                    }
                })
                .catch(error => {
                    this.state.addAttendance.loading = false
                })
        }
    }
}

export default { state, actions }