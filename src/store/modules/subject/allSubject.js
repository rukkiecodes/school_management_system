const state = {
    allSubjectArray: []
}

const getters = {
    allSubjectArray: state => state.allSubjectArray
}

const mutations = {
    setAllSubject(state, subjects) {
        // state.allSubjectArray.push(...subjects)
    }
}

const actions = {
    getAllSubject({ commit }) {
        // let { token } = JSON.parse(localStorage.mulitalantToken)
        // this.state.allSubject.allSubjectArray = []
        // fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/student/1/fetch' : '/api/v1/student/1/fetch', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer ${token}`,
        //         'Accept': 'application/json',
        //     },
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('getAllSubject data: ', data)
        //         // if (data?.Staff?.length >= 1) {
        //         //     commit('setAllSubject', data.Staff)
        //         // }
        //     })
        //     .catch(error => {
        //         console.log('getAllSubject error: ', error)
        //     })
    }
}

export default { actions, getters, state, mutations }