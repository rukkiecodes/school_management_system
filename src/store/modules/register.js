import router from '@/router'

const state = {
  credentials: {
    name: "Terry Ochuko",
    email: "rukkiecodes4@gmail.com",
    password: "amagboro",
    subdomain: "https://rukkiecodes.netlify.app/",
    logo: null,
  },

  loading: false,
}

const actions = {
  registerSchool() {
    const { name, email, password, subdomain, logo } = this.state.register.credentials

    if (name == '' || email == '' || password == '' || subdomain == '' || logo == '') {
      this.state.snackbar.active = true
      this.state.snackbar.text = 'Please fill in all fields'
      this.state.snackbar.color = 'red'
    } else {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('subdomain', subdomain)
      formData.append('logo', logo)

      this.state.register.loading = true

      fetch('/api/register', {
        method: 'post',
        body: formData
      })
        .then(response => response.json())
        .then(response => {
          console.log('response: ', response);
          if (response?.token) {
            this.state.register.loading = false
            localStorage.mulitalantToken = JSON.stringify({ tiken: response.token, user: response.user })
            this.state.snackbar.active = true
            this.state.snackbar.text = 'Registration successful'
            this.state.snackbar.color = 'green'
            router.push('/dashboard')
          } else {
            this.state.register.loading = false
            this.state.snackbar.active = true
            this.state.snackbar.text = 'An error occured'
            this.state.snackbar.color = 'red'
          }
        })
        .catch(error => {
          console.error('error: ', error);
          this.state.register.loading = false
          this.state.snackbar.active = true
          this.state.snackbar.text = 'Seems like you are already registered'
          this.state.snackbar.color = 'red'
        });
    }
  }
}

export default { state, actions }
