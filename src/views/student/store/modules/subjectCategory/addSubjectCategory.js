const state = {
    code: 2000,
    parentsubject: '',
    subjectcategory: '',
    showinsubject: '',
    class: '',
    name: '',
    showinresult: 'no',
    showscores: 'yes',
    loading: false,
}

const actions = {
    addNewSubjectCategory() {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.addSubjectCategory.name == '' || this.state.addSubjectCategory.showinresult == '' || this.state.addSubjectCategory.showscores == '' || this.state.addSubjectCategory.code == '' || this.state.addSubjectCategory.parentsubject == '' || this.state.addSubjectCategory.subjectcategory == '' || this.state.addSubjectCategory.showinsubject == '' || this.state.addSubjectCategory.class == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        } else {
            this.state.addSubjectCategory.loading = true
            fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/subject/category/add' : '/api/v1/subject/category/add', {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.addSubjectCategory.name,
                    showinresult: this.state.addSubjectCategory.showinresult,
                    showscores: this.state.addSubjectCategory.showscores,
                    code: this.state.addSubjectCategory.code,
                    parentsubject: this.state.addSubjectCategory.parentsubject,
                    subjectcategory: this.state.addSubjectCategory.subjectcategory,
                    showinsubject: this.state.addSubjectCategory.showinsubject,
                    class: this.state.addSubjectCategory.class,
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
                        this.state.addSubjectCategory.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'Student added successfully'
                        this.state.snackbar.color = 'success'

                        this.state.addSubjectCategory.name = ''
                        this.state.addSubjectCategory.showinresult = ''
                        this.state.addSubjectCategory.showscores = ''
                        this.state.addSubjectCategory.code = ''
                        this.state.addSubjectCategory.parentsubject = ''
                        this.state.addSubjectCategory.subjectcategory = ''
                        this.state.addSubjectCategory.showinsubject = ''
                        this.state.addSubjectCategory.class = ''
                    } else {
                        this.state.addSubjectCategory.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'An error occured'
                        this.state.snackbar.color = 'error'
                    }
                })
                .catch(error => {
                    this.state.addSubjectCategory.loading = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions }