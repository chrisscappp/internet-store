import {GET_LIKEDPRODUCTS} from "../../Constants/likedProducts";
import {SET_IS_LOADING} from "../../Constants/products";

const defaultState = {
    likedProducts: {},
    isLoading: true
}

export default function likedProductsReducer (state = defaultState, action) {
    switch(action.type) {
        case GET_LIKEDPRODUCTS:
            return {
                ...state,
                likedProducts: action.payload
            }
        case SET_IS_LOADING :
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state

    }
}