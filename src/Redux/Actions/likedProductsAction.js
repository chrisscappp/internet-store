import {GET_LIKEDPRODUCTS} from "../Constants/likedProducts";
import {LIKEDPRODUCTS} from '../../api/urls/urls'
import {getData} from '../../api/get/getData'
import {SET_IS_LOADING} from "../Constants/products";
import {SET_IS_ERROR} from "../Constants/error"

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

const setIsError = () => {
    return {
        type: SET_IS_ERROR
    }
}

export const getLikedProducts = () => {
    return (dispatch) => {
        getData(`${LIKEDPRODUCTS}`)
            .then((response) => {
                dispatch(setLikedProducts(response))
                dispatch(setIsLoading(false))
            })
            .catch((err) => {
                dispatch(setIsError())
                dispatch(setIsLoading(false))
            })
    }
}