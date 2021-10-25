import { Reducer } from "./Reducer";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { watcherSaga } from "./middleware";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();
const Store = createStore(Reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watcherSaga)
export default Store