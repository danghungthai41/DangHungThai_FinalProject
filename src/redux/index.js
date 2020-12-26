import {createStore, combineReducers, applyMiddleware} from 'redux';
import courseReducer from './reducers/courseReducer';
import thunk from "redux-thunk"; 
import credentials from "./reducers/credentials";
const rootReducer = combineReducers({
    //Object chân phương (object literals)
    courseReducer,
    //Thông tin đăng nhập
    credentials,
    
})
    // state in storee
const store = createStore(rootReducer, applyMiddleware(thunk)
    // , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;