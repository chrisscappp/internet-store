import {getProducts} from "../../api/getProduct/getProduct";
import {GET_PRODUCTS} from "../Constants/products";

export const product = () => {
    return (dispatch) => {
        getProducts
            .then((data) => {
                dispatch({type: GET_PRODUCTS, payload: data})
            })
    }
}