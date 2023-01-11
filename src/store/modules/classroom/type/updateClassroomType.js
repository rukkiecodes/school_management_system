const state = {
    name: 'Science',
    loading: false,
    dialog: false,
}

const mutations = {
    fillClassroomTypeForm(state, type) {
        console.log('fillClassroomTypeForm: ', { ...type })
        state.name = type.name
    }
}

const actions = {
    updateClassroomTypeItem({ commit, dispatch }, type) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.updateClassroomType.category == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        }
        else {
            this.state.updateClassroomType.loading = true
            fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/class/type/${type?.id}/update` : `/api/v1/class/type/${type?.id}/update`, {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.updateClassroomType.name
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.state.updateClassroomType.loading = false
                    this.state.updateClassroomType.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'Subject updated successfully'
                    this.state.snackbar.color = 'success'

                    this.state.updateClassroomType.name = ''

                    return dispatch('getallSClassroomType')
                })
                .catch(error => {
                    this.state.updateClassroomType.loading = false
                    this.state.updateClassroomType.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions, mutations }
