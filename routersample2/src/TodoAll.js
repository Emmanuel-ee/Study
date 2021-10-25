import React, { useState } from 'react'
function TodoAll() {
    const [todoData, setTodoData] = useState([])

    const handleTodo = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => setTodoData(json))
    }

    return (<div>
        <button onClick={handleTodo}>Fetch data</button>
        <br/>
        Data{JSON.stringify(todoData)}</div>)
}


export default TodoAll