const axios = require('axios')

export const getProducts = new Promise((resolve, reject) => {
    axios.get('http://localhost:3000/products')
        .then((res) => {
            resolve(res)
        })
        .then((err) => {
            reject(err)
            console.error(err)
        })
})