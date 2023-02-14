const state = {
    allStudentFeesArray: []
}

const getters = {
    allStudentFeesArray: state => state.allStudentFeesArray
}

const mutations = {
    setallStudentFees(state, Session) {
        state.allStudentFeesArray.push(...Session)
    }
}

const actions = {
    getallStudentFees({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allStudentFees.allStudentFeesArray = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/student/fees' : '/api/v1/student/fees', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('getallStudentFees: ', data)
                if (data?.fees?.length >= 1) commit('setallStudentFees', data.fees)
            })
            .catch(error => { })
    }
}

export default { actions, getters, state, mutations }