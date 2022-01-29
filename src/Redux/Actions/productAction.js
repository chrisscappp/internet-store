import {GET_PRODUCTS, SET_IS_LOADING, SET_PAGES} from "../Constants/products";
import {PRODUCTS} from '../../api/urls/urls'
import {getData} from '../../api/get/getData'


export const setProduct = (data) => {
    return {
        type: GET_PRODUCTS,
        payload : data
    }
}

export const setPages = (data) => {
    return {
        type: SET_PAGES,
        payload: data
    }
}

export const setIsLoading = (value) => {
    return {
        type: SET_IS_LOADING,
        payload: value
    }
}


export const getProducts = (pageNumber) => {
    return (dispatch) => {
        dispatch(setIsLoading(true))
        getData(`${PRODUCTS}${pageNumber}`)
            .then((response) => {
                if (response.status === 200) {
                    dispatch(setProduct(response.data))
                    dispatch(setPages(response.data.countPages))
                    dispatch(setIsLoading(false))
                }
            })
    }
}