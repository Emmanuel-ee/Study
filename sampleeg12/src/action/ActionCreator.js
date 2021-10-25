import { FETCH_USER,FETCHED_USER } from "./ActionConstants";


const FETCH_USER_ACTION =(username)=>({type:FETCH_USER,username})

const FETCHED_USER_ACTION=(data)=>({type:FETCHED_USER,data})

export {FETCH_USER_ACTION,FETCHED_USER_ACTION}