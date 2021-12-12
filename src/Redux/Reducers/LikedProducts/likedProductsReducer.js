import {GET_LIKEDPRODUCTS} from "../../Constants/likedProducts";

const defaultState = {
    likedProducts: []
}

export default function likedProductsReducer (state = defaultState, action) {
    switch(action.type) {
        case GET_LIKEDPRODUCTS:
            return {
                ...state,
                likedProducts: action.payload
            }
        default:
            return state
    }
}