const state = {
    allFunds: []
}
// allFunds
const getters = {
    allFunds: state => state.allFunds
}

const mutations = {
    setAllFunds(state, funds) {
        state.allFunds.push(...funds)
    }
}

const actions = {
    getAllFunds({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allFunds.allFunds = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/funds/all' : '/api/v1/funds/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data?.funds?.length >= 1) {
                    commit('setAllFunds', data.funds)
                }
            })
            .catch(error => {
                console.log('getAllFunds error: ', error)
            })
    }
}

export default { actions, getters, state, mutations }