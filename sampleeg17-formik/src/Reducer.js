export const Reducer = (state = { data: {}, loading: false }, action) => {
    switch (action.type) {
        case 'FETCH_BY_ID':
        case 'FETCH_ALL':
            return { ...state, loading: true }
        case 'FETCHED_BY_ID':
        case 'FETCHED_ALL':
            console.log(action.data)
            return { ...state, loading: false, data: action.data }
        default:
            return state
    }
}