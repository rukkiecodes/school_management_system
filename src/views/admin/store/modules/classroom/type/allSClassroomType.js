const state = {
    allClassroomType: []
}

const getters = {
    allClassroomType: state => state.allClassroomType
}

const mutations = {
    setAllClassroomType(state, type) {
        state.allClassroomType.push(...type)
    }
}

const actions = {
    getallSClassroomType({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allSClassroomType.allClassroomType = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/class/type/all' : '/api/v1/class/type/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data?.classtype?.length >= 1) commit('setAllClassroomType', data.classtype)
            })
            .catch(error => { })
    }
}

export default { actions, getters, state, mutations }