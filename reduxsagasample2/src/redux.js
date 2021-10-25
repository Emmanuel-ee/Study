

// reducer with initial state
const initialState = {
  fetching: false,
  data: null,
  error: null,
  todoId: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_TODO_ID':
      return { ...state, fetching: true, data: null, error: null, todoId: action.todoId };
    case 'FETCH_ALL':
      return { ...state, fetching: true, data: null, error: null, todoId: null };
    case 'FETCHED_TODO_ALL_SUCCESS':
    case 'FETCHED_TODO_ID_SUCCESS':
      return { ...state, fetching: false, data: action.data };
    case "FETCHED_TODO_ALL_FAILURE":
    case "FETCHED_TODO_ID_FAILURE":
      return { ...state, fetching: false, data: null, error: action.error };
    default:
      return state;
  }
}