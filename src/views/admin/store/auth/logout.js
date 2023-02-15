const actions = {
    logout() {
        localStorage.removeItem('mulitalantToken')
        location.replace('/')
    }
}

export default { actions }