const state = {
    name: '',
    code: '',
    parentsubject: '',
    subjectcategory: '',
    showinsubject: '',
    class: '',
    loading: false,
    dialog: false,
}

const mutations = {
    fillSubjectForm(state, subject) {
        console.log({ ...subject })
        state.name = subject.name
        state.code = subject.code
        state.parentsubject = subject.parentsubject
        state.subjectcategory = subject.subjectcategory
        state.showinsubject = subject.showinsubject
        state.class = subject.class
    }
}

const actions = {
    updateSubjectItem({ commit, dispatch }, staff) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.updateSubject.name == '' || this.state.updateSubject.code == '' || this.state.updateSubject.parentsubject == '' || this.state.updateSubject.subjectcategory == '' || this.state.updateSubject.showinsubject == '' || this.state.updateSubject.class == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.updateSubject.loading = true
            fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/subject/${staff?.id}/update` : `/api/v1/subject/${staff?.id}/update`, {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.updateSubject.name,
                    code: this.state.updateSubject.code,
                    parentsubject: this.state.updateSubject.parentsubject,
                    subjectcategory: this.state.updateSubject.subjectcategory,
                    showinsubject: this.state.updateSubject.showinsubject,
                    class: this.state.updateSubject.class,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.state.updateSubject.loading = false
                    this.state.updateSubject.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'Subject updated successfully'
                    this.state.snackbar.color = 'success'

                    this.state.updateSubject.name = ''
                    this.state.updateSubject.code = ''
                    this.state.updateSubject.parentsubject = ''
                    this.state.updateSubject.subjectcategory = ''
                    this.state.updateSubject.showinsubject = ''
                    this.state.updateSubject.class = ''

                    return dispatch('getAllSubject')
                })
                .catch(error => {
                    this.state.updateSubject.loading = false
                    this.state.updateSubject.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions, mutations }
