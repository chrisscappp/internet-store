import {GET_PRODUCTS} from "../../Constants/products";

const defaultState = {
    products: []
}

export default function productsReducer (state = defaultState, action) {
    switch(action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}