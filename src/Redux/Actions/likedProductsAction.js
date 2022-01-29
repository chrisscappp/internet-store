import {GET_LIKEDPRODUCTS} from "../Constants/likedProducts";
import {LIKEDPRODUCTS} from '../../api/urls/urls'
import {getData} from '../../api/get/getData'
import {SET_IS_LOADING} from "../Constants/products";

export const setLikedProducts = (data) => {
    return {
        type: GET_LIKEDPRODUCTS,
        payload: data
    }
}

export const setIsLoading = (value) => {
    return {
        type: SET_IS_LOADING,
        payload: value
    }
}

export const getLikedProducts = () => {
    return (dispatch) => {
        getData(`${LIKEDPRODUCTS}`)
            .then((response) => {
                dispatch(setLikedProducts(response))
                dispatch(setIsLoading(false))
            })
    }
}