import {combineReducers} from "redux";
import productsReducer from "./Products/productsReducer";
import notificationsReducer from './Notifications/notificationsReducer'

export default combineReducers({
    productsReducer,
    notificationsReducer,
})