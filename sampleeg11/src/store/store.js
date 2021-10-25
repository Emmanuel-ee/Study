import { createStore, applyMiddleware, combineReducers } from "redux";
import { apiMiddleware } from "../middleware/middleware";
import { FetchReducer } from "../reducer/FetchReducer";

const store = createStore(combineReducers({ FetchReducer: FetchReducer }), applyMiddleware(apiMiddleware))
export default store