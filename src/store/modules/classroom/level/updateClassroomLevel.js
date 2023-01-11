const state = {
    name: 'Basic',
    category: 'Nursery',
    graduationlevel: 'no',
    loading: false,
    dialog: false,
}

const mutations = {
    fillClassroomLevelForm(state, level) {
        state.name = level.name
        state.category = level.category
        state.graduationlevel = level.graduationlevel
    }
}

const actions = {
    updateClassroomLevelItem({ commit, dispatch }, level) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        if (this.state.updateClassroomLevel.category == '' || this.state.updateClassroomLevel.name == '' || this.state.updateClassroomLevel.graduationlevel == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill all fields'
            this.state.snackbar.color = 'error'
        }
        else {
            this.state.updateClassroomLevel.loading = true
            fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/class/level/${level?.id}/update` : `/api/v1/class/level/${level?.id}/update`, {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.updateClassroomLevel.name,
                    category: this.state.updateClassroomLevel.category,
                    graduationlevel: this.state.updateClassroomLevel.graduationlevel,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.state.updateClassroomLevel.loading = false
                    this.state.updateClassroomLevel.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'Subject updated successfully'
                    this.state.snackbar.color = 'success'

                    this.state.updateClassroomLevel.name = ''
                    this.state.updateClassroomLevel.category = ''
                    this.state.updateClassroomLevel.graduationlevel = ''

                    return dispatch('getallSClassroomLevel')
                })
                .catch(error => {
                    this.state.updateClassroomLevel.loading = false
                    this.state.updateClassroomLevel.dialog = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'An error occured'
                    this.state.snackbar.color = 'error'
                })
        }
    }
}

export default { state, actions, mutations }
