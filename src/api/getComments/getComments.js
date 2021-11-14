const axios = require('axios')

export const getComments = new Promise((resolve, reject) => {
    axios.get(`http://localhost:3000/comments`)
        .then((res) => {
            resolve(res.data)
        })
        .then((err) => {
            reject(err)
        })
})