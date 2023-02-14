const state = {
    allStudentBSGradesArray: []
}

const getters = {
    allStudentBSGradesArray: state => state.allStudentBSGradesArray
}

const mutations = {
    setallStudentBSGrades(state, Session) {
        state.allStudentBSGradesArray.push(...Session)
    }
}

const actions = {
    getallStudentBSGrades({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allStudentBSGrades.allStudentBSGradesArray = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/student/attendance' : '/api/v1/student/attendance', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('getallStudentBSGrades: ', data)
                if (data?.fees?.length >= 1) commit('setallStudentBSGrades', data.fees)
            })
            .catch(error => { })
    }
}

export default { actions, getters, state, mutations }