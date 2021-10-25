import { takeLatest, call, put } from "redux-saga/effects";


// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {

  yield takeLatest("FETCH_ALL_RESOURCE", fetchAllSaga);
  yield takeLatest("FORM_SUBMIT", formSubmitSaga);
}

function fetchData(url) {
  
    return fetch(url)
    .then((response) => response.json())
    .then((json) => (json));

  }

function postData(url,data){
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => (json));
}

function* formSubmitSaga(action) {
  try {
    const response = yield call(postData,'https://reqres.in/api/users',action.data);
  
    const data = response;

    // dispatch a success action to the store with the new dog
    yield put({ type: "FORM_RESULT", data: data });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }

}

function* fetchAllSaga(action) {
    try {
      const response = yield call(fetchData,'https://reqres.in/api/unknown');
    
      const data = response;
  
      // dispatch a success action to the store with the new dog
      yield put({ type: "FETCHED_ALL_RESOURCE", data: data.data });
    
    } catch (error) {
      // dispatch a failure action to the store with the error
      yield put({ type: "API_CALL_FAILURE", error });
    }
  }