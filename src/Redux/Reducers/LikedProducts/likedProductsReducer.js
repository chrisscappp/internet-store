import {GET_LIKEDPRODUCTS} from "../../Constants/likedProducts";
import {SET_IS_LOADING} from "../../Constants/products";
import {SET_IS_ERROR} from "../../Constants/error";

const defaultState = {
    likedProducts: {},
    isLoading: true,
    isError: false
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
        case SET_IS_ERROR:
            return {
                ...state,
                isError: !state.isError
            }

        default:
            return state

    }
}