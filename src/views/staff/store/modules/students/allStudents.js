const state = {
    allStudentsArray: []
}

const getters = {
    allStudentsArray: state => state.allStudentsArray
}

const mutations = {
    setallStudents(state, Session) {
        state.allStudentsArray.push(...Session)
    }
}

const actions = {
    getallStudents({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allStudents.allStudentsArray = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/staff/student/all' : '/api/v1/staff/student/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('getallStudents: ', data)
                if (data?.Student?.length >= 1) commit('setallStudents', data.Student)
            })
            .catch(error => { })
    }
}

export default { actions, getters, state, mutations }