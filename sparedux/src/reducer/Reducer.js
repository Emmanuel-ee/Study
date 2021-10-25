const Reducer = (state = { arrayData: [], loading: false, formresponse: {} }, action) => {
    switch (action.type) {
        case 'FETCH_ALL_RESOURCE':
        case 'FORM_SUBMIT':
            return { ...state, loading: true }
        case 'FETCHED_ALL_RESOURCE':
            return { ...state, loading: false, arrayData: action.data }
        case 'FORM_RESULT':
            return { ...state, loading: false, formresponse: action.data }
        default:
            return state
    }
}
export default Reducer