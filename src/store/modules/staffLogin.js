import router from '@/router'

const state = {
    email: 'rukkiecodes@gmail.com',
    password: 'amagboro',
    loading: false,
}

const actions = {
    signinUser() {
        if (this.state.staffLogin.email == '' || this.state.staffLogin.password == '') {
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Please fill in all fields'
            this.state.snackbar.color = 'red'
        } else {
            const formData = new FormData()
            formData.append('email', this.state.staffLogin.email)
            formData.append('password', this.state.staffLogin.password)

            this.state.staffLogin.loading = true

            fetch(process.env.NODE_ENV == 'production' ? 'http://feed.edu-portal.live/api/login' : '/api/login', {
                method: 'post',
                body: formData
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    if (response.message == 'Invalid credentials') {
                        this.state.staffLogin.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'Invalid credentials'
                        this.state.snackbar.color = 'red'
                    } else {
                        this.state.staffLogin.loading = false
                        localStorage.mulitalantToken = JSON.stringify({ token: response.token, user: response.user })
                        this.state.snackbar.active = true
                        this.state.snackbar.text = 'Login successful'
                        this.state.snackbar.color = 'green'
                        router.push('/dashboard')
                    }
                })
                .catch(error => {
                    console.error('error: ', error);
                    this.state.staffLogin.loading = false
                    this.state.snackbar.active = true
                    this.state.snackbar.text = 'Seems like you are not registered'
                    this.state.snackbar.color = 'red'
                });
        }
    }
}

export default { state, actions }