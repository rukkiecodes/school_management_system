const state = {
    allStudentAccountingArray: []
}

const getters = {
    allStudentAccountingArray: state => state.allStudentAccountingArray
}

const mutations = {
    setallStudentAccounting(state, Session) {
        state.allStudentAccountingArray.push(...Session)
    }
}

const actions = {
    getallStudentAccounting({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allStudentAccounting.allStudentAccountingArray = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/student/invoices' : '/api/v1/student/invoices', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('getallStudentAccounting: ', data)
                if (data?.invoice?.length >= 1) commit('setallStudentAccounting', data.invoice)
            })
            .catch(error => { })
    }
}

export default { actions, getters, state, mutations }