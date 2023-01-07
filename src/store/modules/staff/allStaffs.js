const state = {
    allStaffArray: []
}

const getters = {
    allStaffArray: state => state.allStaffArray
}

const mutations = {
    setAllStaff(state, staffs) {
        state.allStaffArray.push(...staffs)
    }
}

const actions = {
    getAllStaff({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allStaffs.allStaffArray = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/staff/all' : '/api/v1/staff/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('getAllStaff data: ', data)
                if (data?.Staff?.length >= 1) {
                    commit('setAllStaff', data.Staff)
                }
            })
            .catch(error => {
                console.log('getAllStaff error: ', error)
            })
    }
}

export default { actions, getters, state, mutations }