const state = {
    allStaffSubjectsArray: []
}

const getters = {
    allStaffSubjectsArray: state => state.allStaffSubjectsArray
}

const mutations = {
    setallStaffSubjects(state, Session) {
        state.allStaffSubjectsArray.push(...Session)
    }
}

const actions = {
    getallStaffSubjects({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allStaffSubjects.allStaffSubjectsArray = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/student/subjects' : '/api/v1/student/subjects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data?.subject?.length >= 1) commit('setallStaffSubjects', data.subject)
            })
            .catch(error => { })
    }
}

export default { actions, getters, state, mutations }