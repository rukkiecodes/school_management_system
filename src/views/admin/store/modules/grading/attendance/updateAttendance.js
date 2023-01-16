const state = {
    studentname: 'Tech',
    studentid: '1',
    classlevel: "basic 1",
    classroom: "basic",
    attendancescore: 20,
    session: '2020/2021',
    term: "1st Term",
    loading: false,
    dialog: false,
}

const mutations = {
    filluUdateAttendanceForm(state, attendance) {
        state.studentname = attendance.studentname
        state.studentid = attendance.studentid
        state.classlevel = attendance.classlevel
        state.classroom = attendance.classroom
        state.attendancescore = attendance.attendancescore
        state.session = attendance.session
        state.term = attendance.term
    }
}

const actions = {
    updateAttendanceItem({ commit, dispatch }, attendance) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.updateAttendance.studentname == '' || this.state.updateAttendance.studentid == '' || this.state.updateAttendance.classlevel == '' || this.state.updateAttendance.classroom == '' || this.state.updateAttendance.attendancescore == '' || this.state.updateAttendance.session == '' || this.state.updateAttendance.term == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        }
        else {
            this.state.updateAttendance.loading = true
            fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/attendance/${attendance?.id}/update` : `/api/v1/attendance/${attendance?.id}/update`, {
                method: 'POST',
                body: JSON.stringify({
                    studentname: this.state.updateAttendance.studentname,
                    studentid: this.state.updateAttendance.studentid,
                    classlevel: this.state.updateAttendance.classlevel,
                    classroom: this.state.updateAttendance.classroom,
                    attendancescore: this.state.updateAttendance.attendancescore,
                    session: this.state.updateAttendance.session,
                    term: this.state.updateAttendance.term,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.state.updateAttendance.loading = false
                    this.state.updateAttendance.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'Updated successfully'
                    this.state.snackbar.color = 'success'

                    this.state.updateAttendance.studentname = ''
                    this.state.updateAttendance.studentid = ''
                    this.state.updateAttendance.classlevel = ''
                    this.state.updateAttendance.classroom = ''
                    this.state.updateAttendance.attendancescore = ''
                    this.state.updateAttendance.session = ''
                    this.state.updateAttendance.term = ''

                    return dispatch('getAllAttendance')
                })
                .catch(error => {
                    this.state.updateAttendance.loading = false
                    this.state.updateAttendance.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions, mutations }
