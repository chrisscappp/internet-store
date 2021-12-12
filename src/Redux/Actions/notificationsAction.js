import {getData} from '../../api/get/getData'
import {NOTIFICATIONS} from '../../api/urls/urls'
import {GET_NOTIFICATIONS} from '../Constants/notifications'

export const notification = () => {
    return (dispatch) => {
        getData(`${NOTIFICATIONS}`)
            .then((response) => {
                dispatch({type: GET_NOTIFICATIONS, payload: response.data})
            })
    }
}