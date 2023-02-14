const state = {
    allStudentEventsArray: []
}

const getters = {
    allStudentEventsArray: state => state.allStudentEventsArray
}

const mutations = {
    setallStudentEvents(state, Session) {
        state.allStudentEventsArray.push(...Session)
    }
}

const actions = {
    getallStudentEvents({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allStudentEvents.allStudentEventsArray = []
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
                if (data?.events?.length >= 1) commit('setallStudentEvents', data.events)
            })
            .catch(error => { })
    }
}

export default { actions, getters, state, mutations }