const actions = {
    deleteFees() {
        let { token } = JSON.parse(localStorage.mulitalantToken)
        fetch('/api/v1/fees/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('deleteFees: ', data)
            })
            .catch(error => {
                console.log('deleteFees error: ', error)
            })
    }
}

export default { actions }