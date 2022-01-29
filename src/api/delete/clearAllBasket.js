import {LIKEDPRODUCTS} from '../urls/urls'

const axios = require('axios')

// export const sendData = (data) => {
//     axios.post(`http://localhost:3000/likedProducts`, data, {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//         .catch((err) => {
//             console.error('Всё...',err)
//         })
// }

export const clearAllBasket = () => {
    axios.delete(`${process.env.REACT_APP_URL}${LIKEDPRODUCTS}`)
}