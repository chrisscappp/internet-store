const axios = require('axios')

export const sendComments = (id, data) => {
    axios.post(`http://localhost:3000/commentsProducts${id}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}