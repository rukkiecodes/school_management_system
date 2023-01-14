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
}

const actions = {
    addNewGrade({ commit, dispatch }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.addGrade.studentname == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.addGrade.loading = true
            fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/grade/add' : '/api/v1/grade/add', {
                method: 'POST',
                body: JSON.stringify({
                    studentname: this.state.addGrade.studentname,
                    studentid: this.state.addGrade.studentid,
                    class: this.state.addGrade.class,
                    subject: this.state.addGrade.subject,
                    firstca: this.state.addGrade.firstca,
                    secondca: this.state.addGrade.secondca,
                    exam: this.state.addGrade.exam,
                    session: this.state.addGrade.session,
                    term: this.state.addGrade.term,
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
                        this.state.addGrade.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'Added successfully'
                        this.state.snackbar.color = 'success'

                        this.state.addGrade.studentname = ''
                        this.state.addGrade.studentid = ''
                        this.state.addGrade.class = ''
                        this.state.addGrade.subject = ''
                        this.state.addGrade.firstca = ''
                        this.state.addGrade.secondca = ''
                        this.state.addGrade.exam = ''
                        this.state.addGrade.session = ''
                        this.state.addGrade.term = ''

                        return dispatch('getAllGrades')
                    } else {
                        this.state.addGrade.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'An error occured'
                        this.state.snackbar.color = 'error'
                    }
                })
                .catch(error => {
                    this.state.addGrade.loading = false
                })
        }
    }
}

export default { state, actions }