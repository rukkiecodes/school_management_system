const actions = {
    getAllFees() {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        fetch('/api/v1/fees/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('getAllFees: ', data)
            })
            .catch(error => {
                console.log('getAllFees error: ', error)
            })
    }
}

export default { actions }