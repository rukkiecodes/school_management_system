const state = null

const actions = {
    getSingleSubject({ commit }, id) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/subject/${id}/fetch` : `/api/v1/subject/${id}/fetch`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                this.state.viewSubject = { ...data?.data }
            })
            .catch(error => {
                console.error('Error:', error)
            })
    }
}

export default { state, actions }