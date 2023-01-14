const state = {
    allAttendanceArray: []
}

const getters = {
    allAttendanceArray: state => state.allAttendanceArray
}

const mutations = {
    setallAttendance(state, attendance) {
        state.allAttendanceArray.push(...attendance)
    }
}

const actions = {
    getAllAttendance({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allAttendance.allAttendanceArray = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/attendance/all' : '/api/v1/attendance/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data?.attendance?.length >= 1) commit('setallAttendance', data.attendance)
            })
            .catch(error => { })
    }
}

export default { actions, getters, state, mutations }