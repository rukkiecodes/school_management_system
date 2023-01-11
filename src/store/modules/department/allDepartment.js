const state = {
    allDepartmentArray: []
}

const getters = {
    allDepartmentArray: state => state.allDepartmentArray
}

const mutations = {
    setAllDepartment(state, department) {
        state.allDepartmentArray.push(...department)
    }
}

const actions = {
    getAllDepartments({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allDepartment.allDepartmentArray = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/department/all' : '/api/v1/department/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data?.Departments?.length >= 1) commit('setAllDepartment', data.Departments)
            })
            .catch(error => { })
    }
}

export default { actions, getters, state, mutations }