const axios = require('axios')

export const getComments = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:3000/commentsProducts${id}`)
        .then((res) => {
            resolve(res)
        })
        .catch((err) => {
            reject(err)
            console.error('Всё...')
        })
    })
}