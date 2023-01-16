const state = {
    allGradeArray: []
}

const getters = {
    allGradeArray: state => state.allGradeArray
}

const mutations = {
    setallGrade(state, grade) {
        state.allGradeArray.push(...grade)
    }
}

const actions = {
    getAllGrades({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allGrade.allGradeArray = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/grade/all' : '/api/v1/grade/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data?.Grades?.length >= 1) commit('setallGrade', data.Grades)
            })
            .catch(error => { })
    }
}

export default { actions, getters, state, mutations }