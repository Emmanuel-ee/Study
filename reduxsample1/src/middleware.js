import axios from 'axios'

  
  function fetchData(url, callback) {
    axios.get(url)
      .then(callback)
      .catch((err) => console.log(`Error fetching recipes: ${ err }`))
  }
  const URL = 'https://jsonplaceholder.typicode.com/todos/'
  const apiMiddleware = ({ dispatch }) => next => action => {
    if (action.type === 'FETCH_TODO_ID') {
      fetchData(URL+action.todoId, ({ data }) => dispatch({type:'TODO_ID_FETCHED',data:data}));
    }
    if(action.type==='FETCH_TODOS_ALL'){
        fetchData(URL, ({ data }) => dispatch({type:'TODO_ALL_FETCHED',data:data}));

    }
  
    next(action);
  };
  
  export {apiMiddleware}