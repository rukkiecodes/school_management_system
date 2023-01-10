const state = {
    allStudentArray: []
}

const getters = {
    allStudentArray: state => state.allStudentArray
}

const mutations = {
    setAllStudent(state, student) {
        state.allStudentArray.push(...student)
    }
}

const actions = {
    getAllStudent({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allStudent.allStudentArray = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/student/all' : '/api/v1/student/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('getAllStudent data: ', data)
                if (data?.Student?.length >= 1) {
                    commit('setAllStudent', data.Student)
                }
            })
            .catch(error => {
                console.log('getAllStudent error: ', error)
            })
    }
}

export default { actions, getters, state, mutations }