import { takeLatest, call, put } from "redux-saga/effects";


// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("FETCH_BY_ID", fetchByIdSaga);
  yield takeLatest("FETCH_ALL", fetchAllSaga);
}

function fetchData(url) {
  
    return fetch(url)
    .then((response) => response.json())
    .then((json) => (json));

  }

// worker saga: makes the api call when watcher saga sees the action
function* fetchByIdSaga(action) {
  try {
    const response = yield call(fetchData,`https://jsonplaceholder.typicode.com/todos/${action.id}`);
    console.log(response)
    const data = response;

    // dispatch a success action to the store with the new dog
    yield put({ type: "FETCHED_BY_ID", data: data });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}


function* fetchAllSaga(action) {
    try {
      const response = yield call(fetchData,'https://jsonplaceholder.typicode.com/todos/');
      console.log(response)
      const data = response;
  
      // dispatch a success action to the store with the new dog
      yield put({ type: "FETCHED_BY_ID", data: data });
    
    } catch (error) {
      // dispatch a failure action to the store with the error
      yield put({ type: "API_CALL_FAILURE", error });
    }
  }