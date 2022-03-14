import {combineReducers} from "redux";
import productsReducer from "./Reducers/Products/productsReducer";
import notificationsReducer from './Reducers/Notifications/notificationsReducer'
import commentsReducer from './Reducers/Comments/commentsReducer'
import likedProductsReducer from './Reducers/LikedProducts/likedProductsReducer'
import loginReducer from "./Reducers/Login/LoginReducer";

export default combineReducers({
    productsReducer,
    notificationsReducer,
    commentsReducer,
    likedProductsReducer,
    loginReducer,
})