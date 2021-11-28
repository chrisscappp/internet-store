import {getNotifications} from '../../api/getNotifications/getNotifications'
import {NOTIFICATIONS} from '../Constants/notifications'

export const notification = () => {
    return (dispatch) => {
        getNotifications
            .then((response) => {
                dispatch({type: NOTIFICATIONS, payload: response.data})
            })
    }
}