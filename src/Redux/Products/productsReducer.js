import {GET_PRODUCTS} from "../Constants/products";

const defaultState = {
    response: {}
}

export default function productsReducer (state = defaultState, action) {
    switch(action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                response: action.payload
            }
        default:
            return state
    }
}