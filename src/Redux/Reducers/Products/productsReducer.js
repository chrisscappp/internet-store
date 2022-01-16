import {GET_PRODUCTS, SET_PAGES} from "../../Constants/products";

const defaultState = {
    products: {},
    pages: 1
}

export default function productsReducer (state = defaultState, action) {
    switch(action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case SET_PAGES:
            return {
                ...state,
                pages: action.payload
            }
        default:
            return state
    }
}