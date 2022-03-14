import {GET_LOGIN, GET_USER} from "../Constants/login";

export const setLogin = (value) => {
    return {
        type: GET_LOGIN,
        payload : value
    }
}

export const setUserAboba = (data) => {
    return {
        type: GET_USER,
        payload : data
    }
}