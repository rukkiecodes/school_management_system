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
    fillSubjectCategoryForm(state, subject) {
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
    updateSubjectCategoryItem({ commit, dispatch }, subject) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.updateSubjectCategory.name == '' || this.state.updateSubjectCategory.code == '' || this.state.updateSubjectCategory.parentsubject == '' || this.state.updateSubjectCategory.subjectcategory == '' || this.state.updateSubjectCategory.showinsubject == '' || this.state.updateSubjectCategory.class == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.updateSubjectCategory.loading = true
            fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/subject/category/${subject?.id}/update` : `/api/v1/subject/category/${subject?.id}/update`, {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.updateSubjectCategory.name,
                    code: this.state.updateSubjectCategory.code,
                    parentsubject: this.state.updateSubjectCategory.parentsubject,
                    subjectcategory: this.state.updateSubjectCategory.subjectcategory,
                    showinsubject: this.state.updateSubjectCategory.showinsubject,
                    class: this.state.updateSubjectCategory.class,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.state.updateSubjectCategory.loading = false
                    this.state.updateSubjectCategory.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'Subject category updated successfully'
                    this.state.snackbar.color = 'success'

                    this.state.updateSubjectCategory.name = ''
                    this.state.updateSubjectCategory.code = ''
                    this.state.updateSubjectCategory.parentsubject = ''
                    this.state.updateSubjectCategory.subjectcategory = ''
                    this.state.updateSubjectCategory.showinsubject = ''
                    this.state.updateSubjectCategory.class = ''

                    return dispatch('getAllSubjectCategory')
                })
                .catch(error => {
                    this.state.updateSubjectCategory.loading = false
                    this.state.updateSubjectCategory.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions, mutations }
