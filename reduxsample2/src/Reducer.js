
const Reducer = (state = { responsedata:{},message:'' }, action) => {
    if (action.type === 'FORM_SUBMIT') {
        return Object.assign({}, state, { message:'LOADING' })
    }
    else
        if (action.type === 'SUBMITTED') {
            return Object.assign({}, state, { responsedata: action.responsedata,message:'LOADED' })
        }
       
    return state
}


export default Reducer