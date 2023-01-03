import router from '@/router'

const actions = {
    logout() {
        localStorage.removeItem('mulitalantToken')
        router.push('/')
    }
}

export default { actions }