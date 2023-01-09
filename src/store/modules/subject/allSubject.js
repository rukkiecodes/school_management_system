const state = {
    allSubjectArray: []
}

const getters = {
    allSubjectArray: state => state.allSubjectArray
}

const mutations = {
    setAllSubject(state, subjects) {
        state.allSubjectArray.push(...subjects)
    }
}

const actions = {
    getAllSubject({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allSubject.allSubjectArray = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/subject/all' : '/api/v1/subject/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('getAllSubject data: ', data)
                if (data?.subject?.length >= 1) {
                    commit('setAllSubject', data.subject)
                }
            })
            .catch(error => {
                console.log('getAllSubject error: ', error)
            })
    }
}

export default { actions, getters, state, mutations }