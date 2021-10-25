import { useState } from 'react'

function App() {
  const [todoData, settodoData] = useState({ data: {} })
  const [todoId, settodoId] = useState()
  const [todoAll, settodoAll] = useState([])

  const handleTodo = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/' + todoId)
      .then(response => response.json())
      .then(sampletodoData => settodoData(Object.assign({}, todoData, { todoData: sampletodoData })))
  }
  const handleFetchAll = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(sampletodoData => settodoAll(sampletodoData))
  }

  const handleChange = (e) => {
    settodoId(e.target.value)
  }
  return (
    <div className="App">
      <label> Enter id </label>
      <input type="number" onChange={handleChange} />
      <button onClick={handleTodo}>Fetch</button>
      <br />
      <button onClick={handleFetchAll}>Fetch All</button>
      <br />
      Data is {todoId} is {todoAll.length === 0 ? JSON.stringify(todoData) : JSON.stringify(todoAll)}
    </div>
  );

}

export default App;
