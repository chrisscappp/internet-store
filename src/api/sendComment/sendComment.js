import {COMMENTS} from '../urls/urls'

const axios = require('axios')

export const sendComments = (id, data) => {
    axios.post(`${process.env.REACT_APP_URL}${COMMENTS}${id}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}