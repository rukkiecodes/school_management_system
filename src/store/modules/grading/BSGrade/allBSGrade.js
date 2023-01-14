const state = {
    allBSGradesArray: []
}

const getters = {
    allBSGradesArray: state => state.allBSGradesArray
}

const mutations = {
    setallBSGrades(state, bsgrades) {
        state.allBSGradesArray.push(...bsgrades)
    }
}

const actions = {
    getAllBSGrade({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allBSGrade.allBSGradesArray = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/bsgrades/all' : '/api/v1/bsgrades/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data?.bsgrades?.length >= 1) commit('setallBSGrades', data.bsgrades)
            })
            .catch(error => { })
    }
}

export default { actions, getters, state, mutations }