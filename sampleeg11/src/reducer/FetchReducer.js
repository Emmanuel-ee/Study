import { FETCH_ALL,FETCHED_ALL,FETCHED_BY_ID,FETCH_BY_ID,CAPTURE_ID,CAPTURE_SELECT } from "../action/ActionConstants"
const selectionList = ['posts','comments','todos','users']

export const FetchReducer = (state =
    {loading:false,alldata:[],selectionList:selectionList,selected:'posts',todoId:''} , action) => {
    switch (action.type) {
        case CAPTURE_SELECT:
            return {...state,selected:action.select}
         case CAPTURE_ID:
                return {...state,todoId:action.todoId} 
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