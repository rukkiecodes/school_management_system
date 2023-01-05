const state = {
    allFees: []
}

const getters = {
    allFees: state => state.allFees
}

const mutations = {
    setAllFees(state, fees) {
        state.allFees.push(...fees)
    }
}

const actions = {
    getAllFees({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allFees.allFees = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/fees/all' : '/api/v1/fees/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data?.fees?.length >= 1) {
                    commit('setAllFees', data.fees)
                }
            })
            .catch(error => {
                console.log('getAllFees error: ', error)
            })
    }
}

export default { actions, getters, state, mutations }