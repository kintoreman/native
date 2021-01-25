import {combineReducers, createStore} from "redux";
import userReducer from "./resucers/user"
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    user: userReducer
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;