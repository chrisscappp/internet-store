import {getData} from '../../api/get/getData'
import {NOTIFICATIONS} from '../../api/urls/urls'
import {GET_NOTIFICATIONS} from '../Constants/notifications'

export const setNotifications = (data) => {
    return {
        type: GET_NOTIFICATIONS,
        payload: data
    }
}

export const notification = () => {
    return (dispatch) => {
        getData(`${NOTIFICATIONS}`)
            .then((response) => {
                dispatch(setNotifications(response.data))
            })
    }
}