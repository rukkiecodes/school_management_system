const state = {
    allClassroomArray: []
}

const getters = {
    allClassroomArray: state => state.allClassroomArray
}

const mutations = {
    setAllClassroom(state, _class) {
        state.allClassroomArray.push(..._class)
    }
}

const actions = {
    getallClassroom({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allClassroom.allClassroomArray = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/classroom/all' : '/api/v1/classroom/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data?.classroom?.length >= 1) commit('setAllClassroom', data.classroom)
            })
            .catch(error => { })
    }
}

export default { actions, getters, state, mutations }