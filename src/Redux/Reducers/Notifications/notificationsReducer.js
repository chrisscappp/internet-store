import {GET_NOTIFICATIONS} from "../../Constants/notifications";

const defaultState = {
    notifications: []
}

export default function notificationsReducer(state = defaultState, action) {
    switch(action.type) {
        case GET_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.payload
            }
        default:
            return state
    }

}