import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("FETCH_TODO_ID", fetchTodoIdSaga);
  yield takeLatest("FETCH_ALL", fetchAllSaga);
}

// function that makes the api request and returns a Promise for response
function fetchTodoId(todoid) {
  let fetchurl = "https://jsonplaceholder.typicode.com/todos/"
  if (todoid) {
    fetchurl = fetchurl + todoid
  }
  return axios({
    method: "get",
    url: fetchurl
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* fetchTodoIdSaga(action) {
  try {
    const response = yield call(fetchTodoId, action.todoId);
    const data = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type: "FETCHED_TODO_ID_SUCCESS", data });

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "FETCHED_TODO_ID_FAILURE", error });
  }
}


function* fetchAllSaga() {
  try {
    const response = yield call(fetchTodoId, null);
    const data = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type: "FETCHED_TODO_ALL_SUCCESS", data });

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "FETCHED_TODO_ALL_FAILURE", error });
  }
}