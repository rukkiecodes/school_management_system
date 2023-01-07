const state = {
    allCategories: []
}

const getters = {
    allCategories: state => state.allCategories
}

const mutations = {
    allCategories(state, categories) {
        state.allCategories.push(...categories)
    }
}

const actions = {
    getAllCategories({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allCategory.allCategories = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/accounting/category/all' : '/api/v1/accounting/category/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data?.category?.length >= 1) {
                    commit('allCategories', data.category)
                }
            })
            .catch(error => {
                console.log('getAllCategories error: ', error)
            })
    }
}

export default { actions, getters, state, mutations }