import {GET_LIKEDPRODUCTS} from "../Constants/likedProducts";
import {LIKEDPRODUCTS} from '../../api/urls/urls'
import {getData} from '../../api/get/getData'

export const getLikedProducts = () => {
    return (dispatch) => {
        getData(`${LIKEDPRODUCTS}`)
            .then((response) => {
                dispatch({type: GET_LIKEDPRODUCTS, payload: response.data})
            })
    }
}