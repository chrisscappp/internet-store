import {GET_COMMENTS} from '../Constants/products'

const defaultState = {
    comments: []
}

export default function commentsReducer (state = defaultState, action) {
    switch(action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload
            }
        default:
            return state
    }
}