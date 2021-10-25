import {FETCHED_USER_ACTION} from '../action/ActionCreator'
const apiMiddleware = ({ dispatch }) => next => action => {
  console.log(action.type)
  if (action.type === "FETCH_USER") {
    fetch(`https://api.github.com/users/${action.username}`)
      .then(response => response.json())
      .then(json => dispatch(FETCHED_USER_ACTION(json)))
  }
 
  

  next(action);
};

export { apiMiddleware }
