import createSagaMiddleware from 'redux-saga'
import {createStore,applyMiddleware} from 'redux'
import { watcherSaga } from "../middleware/middleware";
import Reducer from '../reducer/Reducer'
const sagaMiddleware = createSagaMiddleware();

// 

// create a redux store with our reducer above and middleware
let Store = createStore(
    Reducer,
  applyMiddleware(sagaMiddleware)
);

// run the saga
sagaMiddleware.run(watcherSaga);

export default Store
