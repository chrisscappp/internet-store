import {LIKEDPRODUCTS} from '../urls/urls'

const axios = require('axios')

export const clearOneCardFromBasket = (id) => {
    axios.delete(`${process.env.REACT_APP_URL}${LIKEDPRODUCTS}/${id}`)
}