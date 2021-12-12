import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from "./Redux/RootReducer";
import ReduxThunk from 'redux-thunk'
import {Provider} from "react-redux";
import { BrowserRouter } from "react-router-dom";

const composeEnhancers =
    typeof window === 'object' &&
    window.REDUX_DEVTOOLS_EXTENSION_COMPOSE ?
        window.REDUX_DEVTOOLS_EXTENSION_COMPOSE({
        }) : compose;

const store = createStore(RootReducer, composeEnhancers(applyMiddleware(ReduxThunk)))

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>,
    </BrowserRouter>,
  document.getElementById('root')
);

