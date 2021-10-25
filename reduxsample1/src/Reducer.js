
const Reducer = (state = { data: {}, todoId: '' }, action) => {
    if (action.type === 'FETCH_TODO_ID') {
        return Object.assign({}, state, { todoId: action.todoId })
    }
    else
        if (action.type === 'TODO_ID_FETCHED') {
            return Object.assign({}, state, { data: action.data })
        }
        else
            if (action.type === 'FETCH_TODOS_ALL') {
                return Object.assign({}, state, { todoId: -1 })
            }
            else
                if (action.type === 'TODO_ALL_FETCHED') {
                    console.log('TODO_ALL_FETCHED')
                    return Object.assign({}, state, { data: action.data })
                }
    return state
}


export default Reducer