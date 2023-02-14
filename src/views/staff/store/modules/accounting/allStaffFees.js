const state = {
    allStaffFeesArray: []
}

const getters = {
    allStaffFeesArray: state => state.allStaffFeesArray
}

const mutations = {
    setallStaffFees(state, Session) {
        state.allStaffFeesArray.push(...Session)
    }
}

const actions = {
    getallStaffFees({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allStaffFees.allStaffFeesArray = []
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
                console.log('getallStaffFees: ', data)
                if (data?.fees?.length >= 1) commit('setallStaffFees', data.fees)
            })
            .catch(error => { })
    }
}

export default { actions, getters, state, mutations }