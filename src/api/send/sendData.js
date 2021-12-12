const axios = require('axios')

export const sendData = (data) => {
    axios.post(`http://localhost:3000/likedProducts`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .catch((err) => {
            console.error('Всё...',err)
        })
}