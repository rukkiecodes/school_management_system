const state = {
    allStudentSubjectsArray: []
}

const getters = {
    allStudentSubjectsArray: state => state.allStudentSubjectsArray
}

const mutations = {
    setallStudentSubjects(state, Session) {
        state.allStudentSubjectsArray.push(...Session)
    }
}

const actions = {
    getallStudentSubjects({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allStudentSubjects.allStudentSubjectsArray = []
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
                if (data?.subject?.length >= 1) commit('setallStudentSubjects', data.subject)
            })
            .catch(error => { })
    }
}

export default { actions, getters, state, mutations }