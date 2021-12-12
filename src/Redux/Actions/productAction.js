import {GET_PRODUCTS} from "../Constants/products";
import {PRODUCTS} from '../../api/urls/urls'
import {getData} from '../../api/get/getData'

export const getProducts = () => {
    return (dispatch) => {
        getData(`${PRODUCTS}`)
            .then((response) => {
                dispatch({type: GET_PRODUCTS, payload: response.data})
            })
    }
}