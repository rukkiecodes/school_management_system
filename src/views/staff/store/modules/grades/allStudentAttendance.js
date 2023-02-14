const state = {
    allStudentAttendanceArray: []
}

const getters = {
    allStudentAttendanceArray: state => state.allStudentAttendanceArray
}

const mutations = {
    setallStudentAttendance(state, Session) {
        state.allStudentAttendanceArray.push(...Session)
    }
}

const actions = {
    getallStudentAttendance({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allStudentAttendance.allStudentAttendanceArray = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/student/attendance' : '/api/v1/student/attendance', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('getallStudentAttendance: ', data)
                if (data?.fees?.length >= 1) commit('setallStudentAttendance', data.fees)
            })
            .catch(error => { })
    }
}

export default { actions, getters, state, mutations }