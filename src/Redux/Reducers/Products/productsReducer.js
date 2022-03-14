import {GET_PRODUCTS, SET_PAGES, SET_IS_LOADING} from "../../Constants/products";
import {SET_IS_ERROR} from "../../Constants/error"

const defaultState = {
    products: {},
    pages: 1,
    isLoading: true,
    isError: false,
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
        case SET_IS_LOADING :
            return {
                ...state,
                isLoading: action.payload
            }
        case SET_IS_ERROR :
            return {
                ...state,
                isError: !state.isError
            }
        default:
            return state
    }
}