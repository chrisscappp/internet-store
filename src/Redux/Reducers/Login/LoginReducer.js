import {GET_LOGIN, GET_USER} from "../../Constants/login";


const defaultState = {
    isLogin: false,
    user: null
}

export default function loginReducer (state = defaultState, action) {
    switch(action.type) {
        case GET_LOGIN:
            return {
                ...state,
                isLogin: action.payload
            }
        case GET_USER :
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}