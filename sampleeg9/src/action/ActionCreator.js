import { FETCH_ALL,FETCHED_ALL,FETCH_BY_ID,FETCHED_BY_ID } from "./ActionConstants"
const FETCH_ALL_ACTION=(selectTo) =>({type:FETCH_ALL,selectTo})
const FETCHED_ALL_DATA_ACTION =(data)=>({type:FETCHED_ALL,data})
const FETCH_BY_ID_ACTION=(todoId,selectTo)=>({type:FETCH_BY_ID,todoId,selectTo})
const FETCHED_BY_ID_ACTION =(data)=>({type:FETCHED_BY_ID,data})


export {FETCH_ALL_ACTION,FETCHED_ALL_DATA_ACTION,FETCH_BY_ID_ACTION,FETCHED_BY_ID_ACTION}