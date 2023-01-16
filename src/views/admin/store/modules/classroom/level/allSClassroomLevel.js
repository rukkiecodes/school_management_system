const state = {
    allClassroomLevel: []
}

const getters = {
    allClassroomLevel: state => state.allClassroomLevel
}

const mutations = {
    setAllClassroomLevel(state, level) {
        state.allClassroomLevel.push(...level)
    }
}

const actions = {
    getallSClassroomLevel({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allSClassroomLevel.allClassroomLevel = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/class/level/all' : '/api/v1/class/level/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data?.level?.length >= 1) commit('setAllClassroomLevel', data.level)
            })
            .catch(error => { })
    }
}

export default { actions, getters, state, mutations }