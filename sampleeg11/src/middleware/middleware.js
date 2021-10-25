import { FETCHED_ALL_DATA_ACTION,FETCHED_BY_ID_ACTION } from '../action/ActionCreator'
import {FETCH_BY_ID} from '../action/ActionConstants'
const apiMiddleware = ({ dispatch }) => next => action => {
  console.log(action.type)
  if (action.type === "FETCH_ALL") {
    fetch(`https://jsonplaceholder.typicode.com/${action.selectTo}`)
      .then(response => response.json())
      .then(json => dispatch(FETCHED_ALL_DATA_ACTION(json)))
  }
  else{
    if(action.type===FETCH_BY_ID){
      fetch(`https://jsonplaceholder.typicode.com/${action.selectTo}/${action.todoId}`)
      .then(response => response.json())
      .then(json => dispatch(FETCHED_BY_ID_ACTION(json)))
    }
  }

  next(action);
};

export { apiMiddleware }
