const state = {
    allTermArray: []
}

const getters = {
    allTermArray: state => state.allTermArray
}

const mutations = {
    setAllTerm(state, term) {
        state.allTermArray.push(...term)
    }
}

const actions = {
    getAllTerms({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allTerm.allTermArray = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/fetchterm' : '/api/v1/fetchterm', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data?.data?.length >= 1) commit('setAllTerm', data.data)
            })
            .catch(error => { })
    }
}

export default { actions, getters, state, mutations }