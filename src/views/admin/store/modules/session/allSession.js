const state = {
    allSessionArray: []
}

const getters = {
    allSessionArray: state => state.allSessionArray
}

const mutations = {
    setAllSession(state, Session) {
        state.allSessionArray.push(...Session)
    }
}

const actions = {
    getAllSessions({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allSession.allSessionArray = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/fetchsession' : '/api/v1/fetchsession', {
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
                if (data?.data?.length >= 1) commit('setAllSession', data.data)
            })
            .catch(error => { })
    }
}

export default { actions, getters, state, mutations }