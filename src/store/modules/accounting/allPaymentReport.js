const state = {
    allPaymentReports: []
}

const getters = {
    allPaymentReports: state => state.allPaymentReports
}

const mutations = {
    setAllPaymentReports(state, report) {
        state.allPaymentReports.push(...report)
    }
}

const actions = {
    getAllPaymentReports({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allPaymentReport.allPaymentReports = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/reports/student' : '/api/v1/reports/student', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                term: "2nd Term",
                session: "2020/2021",
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data?.data?.length >= 1) commit('setAllPaymentReports', data.data)
            })
            .catch(error => { })
    }
}

export default { actions, getters, state, mutations }