 const Reducers = (state = {userData:{}}, action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return state
        case 'FETCED_USER':
            return {...state,userData:action.data}
        default:
            return state
    }
}


export default Reducers