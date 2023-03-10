import router from '@/router'

const state = {
    logincode: '0110039188',
    loading: false,
}

const actions = {
    signinStudent() {
        let { logincode } = this.state.studentLogin

        if (logincode == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill in all fields'
            this.state.snackbar.color = 'red'
        } else {
            this.state.studentLogin.loading = true

            fetch(process.env.NODE_ENV == 'production' ? 'https://feed.edu-portal.live/api/student/login' : '/api/student/login', {
                method: 'post',
                body: JSON.stringify({
                    logincode: logincode,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    if (response?.token) {
                        this.state.studentLogin.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'Welcome back'
                        this.state.snackbar.color = 'green'
                        localStorage.setItem('student', JSON.stringify(response?.user))
                        router.push('/student/dashboard/overview')
                    } else {
                        this.state.studentLogin.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'Seems like you are not registered'
                        this.state.snackbar.color = 'red'
                    }
                })
                .catch(error => {
                    console.error('error: ', error);
                    this.state.studentLogin.loading = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'Seems like you are not registered'
                    this.state.snackbar.color = 'red'
                });
        }
    }
}

export default { state, actions }