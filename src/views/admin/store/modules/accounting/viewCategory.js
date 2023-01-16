const state = null

const actions = {
    getSingleCategory({ commit }, id) {
        let { token } = JSON.parse(localStorage.mulitalantToken)

        fetch(process.env.NODE_ENV == 'production' ? `https://feed.edu-portal.live/api/v1/accounting/category/${id}/fetch` : `/api/v1/accounting/category/${id}/fetch`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                this.state.viewCategory = { ...data?.data }
            })
            .catch(error => {
                console.error('Error:', error)
            })
    }
}

export default { state, actions }