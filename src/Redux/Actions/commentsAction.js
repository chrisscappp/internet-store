import {getData} from '../../api/get/getData'
import {GET_COMMENTS} from '../Constants/comments'
import {COMMENTS} from '../../api/urls/urls'

export const setComments = (comments) => {
    return {
        type: GET_COMMENTS,
        payload: comments
    }
}

export const getComments = (id) => {
    return (dispatch) => {
        getData(`${COMMENTS}${id}`)
            .then((response) => {
                dispatch(setComments(response.data))
            })
    }
}