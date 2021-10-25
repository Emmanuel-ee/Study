import { combineReducers,applyMiddleware, createStore } from "redux";
import { apiMiddleware } from "../middlewares/middleware";
import Reducers from '../reducers/Reducers'
const store= createStore(Reducers,applyMiddleware(apiMiddleware))
export default store