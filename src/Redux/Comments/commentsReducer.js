import {GET_COMMENTS} from "../Constants/comments";

const defaultState = {
    response: []
}

export default function commentsReducer (state = defaultState, action) {
    switch(action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                response: action.payload
            }
        default:
            return state
    }
}