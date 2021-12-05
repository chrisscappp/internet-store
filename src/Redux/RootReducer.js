import {combineReducers} from "redux";
import productsReducer from "./Products/productsReducer";
import notificationsReducer from './Notifications/notificationsReducer'
import commentsReducer from './Comments/commentsReducer'

export default combineReducers({
    productsReducer,
    notificationsReducer,
    commentsReducer,
})