const axios = require('axios')

export const sendComments = (userComment) => {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/products', {
            comment: userComment,
            headers: {
                'Content-Type' : 'text/html; charset=utf-8',
                'Date' : 'Wednesday, 28 July 2021; 28.07.2021'
            }
        })
            .then((res) => {
                if (userComment) {
                    resolve(res)
                    console.log(res)
                }
            })
            .catch((err) => {
                reject(err)
            })
    })
}