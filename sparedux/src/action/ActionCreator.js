const fetchAll =()=>({type:"FETCH_ALL_RESOURCE"})

const fetchedAll=(data)=>({type:"FETCHED_ALL_RESOURCE",data:data})
const formSubmit=(data)=>({type:"FORM_SUBMIT",data:data})
export {fetchAll,fetchedAll,formSubmit}