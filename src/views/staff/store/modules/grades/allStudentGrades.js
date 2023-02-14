const state = {
    allStudentGradesArray: []
}

const getters = {
    allStudentGradesArray: state => state.allStudentGradesArray
}

const mutations = {
    setallStudentGrades(state, Session) {
        state.allStudentGradesArray.push(...Session)
    }
}

const actions = {
    getallStudentGrades({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allStudentGrades.allStudentGradesArray = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/student/grades' : '/api/v1/student/grades', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('getallStudentGrades: ', data)
                if (data?.fees?.length >= 1) commit('setallStudentGrades', data.fees)
            })
            .catch(error => { })
    }
}

export default { actions, getters, state, mutations }