import {getNotifications} from '../../api/getNotifications/getNotifications'
import {NOTIFICATIONS} from '../Constants/notifications'

export const notification = () => {
    return (dispatch) => {
        getNotifications
            .then((data) => {
                dispatch({type: NOTIFICATIONS, payload: data})
            })
    }
}