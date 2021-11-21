const axios = require('axios')

export const getNotifications = new Promise((resolve, reject) => {
    axios.get('http://localhost:3000/notifications')
        .then((res) => {
            resolve(res)
        })
        .catch((err) => {
            reject(err)
        })
})