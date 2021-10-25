import React from 'react'
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
function App() {
  const dispatch = useDispatch()
  const data = useSelector(state => state)
  const handleClick = () => {
    dispatch({ type: 'FETCH_TODO_ID', todoId: tododIdRef.current.value })
  }

  const handleAllClick =()=>{
    dispatch({ type: 'FETCH_ALL' })

  }

  const tododIdRef = React.useRef(null)
  return (
    <div className="App">
      <label>Enter todoId</label>
      <input type="number" id="todoid" ref={tododIdRef} />
      <br />
      <button onClick={handleClick}>Click to fetch for single todo</button>
      <br />
      <button onClick={handleAllClick}>Click to fetch all data</button>
      <br/>
      Data fetched {JSON.stringify(data.data)}
      <br/>
      Status {JSON.stringify(data.fetching)}
      <br/>
      Todo id {JSON.stringify(data.todoId)}

    </div>
  );
}

export default App;
