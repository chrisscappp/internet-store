import {getComments} from '../../api/getComments/getComments'
import {GET_COMMENTS} from '../Constants/products'

export const comment = () => {
    return (dispatch) => {
        getComments
            .then((data) => {
                dispatch({type: GET_COMMENTS, payload: data})
            })
    }
}