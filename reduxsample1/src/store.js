import Reducer from "./Reducer";
import { createStore, applyMiddleware } from 'redux'
import { apiMiddleware } from "./middleware";
const store = createStore(Reducer, applyMiddleware(apiMiddleware))
export default store