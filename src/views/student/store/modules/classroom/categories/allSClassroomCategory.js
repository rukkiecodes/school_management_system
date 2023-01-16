const state = {
    allClassroomCategories: []
}

const getters = {
    allClassroomCategories: state => state.allClassroomCategories
}

const mutations = {
    getAllClassroomCategory(state, category) {
        state.allClassroomCategories.push(...category)
    }
}

const actions = {
    getAllSClassroomCategory({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allSClassroomCategory.allClassroomCategories = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/class/category/all' : '/api/v1/class/category/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data?.category?.length >= 1) commit('getAllClassroomCategory', data.category)
            })
            .catch(error => { })
    }
}

export default { actions, getters, state, mutations }