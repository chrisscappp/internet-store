import {GET_PRODUCTS, SET_PAGES} from "../Constants/products";
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


export const getProducts = (pageNumber) => {
    return (dispatch) => {
        getData(`${PRODUCTS}${pageNumber}`)
            .then((response) => {
                dispatch(setProduct(response.data))
                dispatch(setPages(response.data.countPages))
            })
    }
}