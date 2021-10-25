import { useSelector } from 'react-redux';
import  { useDispatch } from 'react-redux'
import React from 'react';
import './App.css';

function App() {
  const handleClick = (event) => { dispatch({ id: todoIdRef.current.value ,type:'FETCH_BY_ID'}) }
  const handleAllClick = (event) => { dispatch({type:'FETCH_ALL'}) }

  const dispatch = useDispatch()
  const todoIdRef = React.createRef()
  const data = useSelector(state => state)

  return (
    <div className="App">
      <label>Enter to do id</label>
      <input type="number" ref={todoIdRef} />
      <br>
      </br>
      <button onClick={handleClick}>Click to fetch todo id</button>
      <br />
      <button onClick={handleAllClick}>Click to fetch all</button>
      <br/>
      Fetched is {JSON.stringify(data)}
    </div>
  );
}

export default App;
