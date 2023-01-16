const state = {
    studentname: 'Tech',
    studentid: '1',
    class: "basic 1",
    subject: "math",
    firstca: 20,
    secondca: 20,
    exam: 50,
    session: '2020/2021',
    term: "1st Term",
    loading: false,
    dialog: false,
}

const mutations = {
    filluUdateGradeForm(state, grade) {
        state.name = grade.name
        state.studentid = grade.studentid
        state.class = grade.class
        state.subject = grade.subject
        state.firstca = grade.firstca
        state.secondca = grade.secondca
        state.exam = grade.exam
        state.session = grade.session
        state.term = grade.term
    }
}

const actions = {
    updateGradeItem({ commit, dispatch }, grade) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.updateGrade.studentname == '' || this.state.updateGrade.studentid == '' || this.state.updateGrade.class == '' || this.state.updateGrade.subject == '' || this.state.updateGrade.firstca == '' || this.state.updateGrade.secondca == '' || this.state.updateGrade.exam == '' || this.state.updateGrade.session == '' || this.state.updateGrade.term == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        }
        else {
            this.state.updateGrade.loading = true
            fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/grade/${grade?.id}/update` : `/api/v1/grade/${grade?.id}/update`, {
                method: 'POST',
                body: JSON.stringify({
                    studentname: this.state.updateGrade.studentname,
                    studentid: this.state.updateGrade.studentid,
                    class: this.state.updateGrade.class,
                    subject: this.state.updateGrade.subject,
                    firstca: this.state.updateGrade.firstca,
                    secondca: this.state.updateGrade.secondca,
                    exam: this.state.updateGrade.exam,
                    session: this.state.updateGrade.session,
                    term: this.state.updateGrade.term,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.state.updateGrade.loading = false
                    this.state.updateGrade.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'Updated successfully'
                    this.state.snackbar.color = 'success'

                    this.state.updateGrade.studentname = ''
                    this.state.updateGrade.studentid = ''
                    this.state.updateGrade.class = ''
                    this.state.updateGrade.subject = ''
                    this.state.updateGrade.firstca = ''
                    this.state.updateGrade.secondca = ''
                    this.state.updateGrade.exam = ''
                    this.state.updateGrade.session = ''
                    this.state.updateGrade.term = ''

                    return dispatch('getAllGrades')
                })
                .catch(error => {
                    this.state.updateGrade.loading = false
                    this.state.updateGrade.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions, mutations }
