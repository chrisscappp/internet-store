import {getData} from '../../api/get/getData'
import {GET_COMMENTS} from '../Constants/comments'
import {COMMENTS} from '../../api/urls/urls'

export const comments = (id) => {
    return (dispatch) => {
        getData(`${COMMENTS}${id}`)
            .then((response) => {
                dispatch({type: GET_COMMENTS, payload: response})
            })
    }
}