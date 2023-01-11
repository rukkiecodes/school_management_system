const state = {
    allAnnouncementArray: []
}

const getters = {
    allAnnouncementArray: state => state.allAnnouncementArray
}

const mutations = {
    setAllAnnouncements(state, announcement) {
        state.allAnnouncementArray.push(...announcement)
    }
}

const actions = {
    getAllAnnouncement({ commit }) {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        this.state.allAnnouncements.allAnnouncementArray = []
        fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/v1/events/all' : '/api/v1/events/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data?.events?.length >= 1) commit('setAllAnnouncements', data.events)
            })
            .catch(error => { })
    }
}

export default { actions, getters, state, mutations }