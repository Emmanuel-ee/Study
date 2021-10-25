import React, { useState } from 'react'

function TodoById() {
    const [todoIdData, setTodoIdData] = useState({})
    const todoIdRef = React.useRef()
    const handleToIdClick = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/' + todoIdRef.current.value)
            .then(response => response.json())
            .then(json => setTodoIdData(json))
    }

    return (<div><label>Enter todo id </label>
        <input type="number" ref={todoIdRef} /><br />
        <button onClick={handleToIdClick}>Fetch data</button>
        <br/>
        Data{JSON.stringify(todoIdData)}</div>)
}

export default TodoById