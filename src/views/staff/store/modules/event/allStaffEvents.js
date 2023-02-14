const state = {
    allStaffEventsArray: []
}

const getters = {
    allStaffEventsArray: state => state.allStaffEventsArray
}

const mutations = {
    setallStaffEvents(state, Session) {
        state.allStaffEventsArray.push(...Session)
    }
}

const actions = {
    getallStaffEvents({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allStaffEvents.allStaffEventsArray = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/events/all' : '/api/v1/events/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('data: ', data)
                if (data?.events?.length >= 1) commit('setallStaffEvents', data.events)
            })
            .catch(error => { })
    }
}

export default { actions, getters, state, mutations }