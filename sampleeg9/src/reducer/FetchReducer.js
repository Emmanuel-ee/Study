import { FETCH_ALL,FETCHED_ALL,FETCHED_BY_ID,FETCH_BY_ID } from "../action/ActionConstants"
const selectionList = ['posts','comments','todos','users']

export const FetchReducer = (state ={loading:false,alldata:[],selectionList:selectionList} , action) => {
    switch (action.type) {
        case FETCH_ALL:
            return  {...state,loading:true}
        case FETCHED_ALL:
            return {...state,loading:false,alldata:action.data}
        case FETCH_BY_ID:
            return  {...state,loading:true}
        case FETCHED_BY_ID:
            return {...state,loading:false,alldata:[action.data]}
        default:
            return state
    }
}