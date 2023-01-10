const state = {
    allSubjectCategoryArray: []
}

const getters = {
    allSubjectCategoryArray: state => state.allSubjectCategoryArray
}

const mutations = {
    setAllSubjectCategory(state, subjects) {
        state.allSubjectCategoryArray.push(...subjects)
        console.log('allSubjectCategoryArray: ', state.allSubjectCategoryArray)
    }
}

const actions = {
    getAllSubjectCategory({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allSubjectCategory.allSubjectCategoryArray = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/subject/category/all' : '/api/v1/subject/category/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('allSubjectCategory data: ', data)
                if (data?.subject?.length >= 1) {
                    commit('setAllSubjectCategory', data.subject)
                }
            })
            .catch(error => {
                console.log('allSubjectCategory error: ', error)
            })
    }
}

export default { actions, getters, state, mutations }