import {combineReducers} from "redux";
import productsReducer from "./Products/productsReducer";
import commentsReducer from "./Comments/commentsReducer";

export default combineReducers({
    productsReducer,
    commentsReducer
})