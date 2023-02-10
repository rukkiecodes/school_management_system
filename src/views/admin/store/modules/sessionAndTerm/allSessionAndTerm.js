const state = {
    allSessionAndTermArray: []
}

const getters = {
    allSessionAndTermArray: state => state.allSessionAndTermArray
}

const mutations = {
    setAllSessionAndTerm(state, term) {
        state.allSessionAndTermArray.push(...term)
    }
}

const actions = {
    getAllSessionAndTerms({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allSessionAndTerm.allSessionAndTermArray = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/currentsess/fetch' : '/api/v1/currentsess/fetch', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data?.data?.length >= 1) commit('setAllSessionAndTerm', data.data)
            })
            .catch(error => { })
    }
}

export default { actions, getters, state, mutations }