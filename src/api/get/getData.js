const axios = require('axios')

export const getData = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(`${process.env.REACT_APP_URL}${url}`)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
                console.error('Всё...')
            })
    })
}