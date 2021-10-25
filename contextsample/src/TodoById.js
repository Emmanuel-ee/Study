import Table from "./Table"
import React, {useState} from "react"

function TodoById(){
 
   const todoIdRef = React.createRef()
   const [table, settable] = useState([])
   const handleClick =()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => settable([json]))
   }

    return(
        <div>
            <label>Enter To do id </label>
            <input type="number" ref={todoIdRef}/>
            <br/>
            <button onClick={handleClick}>Click to Fetch</button>
            <br/>
            <Table tableData={table}></Table>
        </div>
    )


}

export default TodoById