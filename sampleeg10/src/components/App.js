import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_ALL_ACTION, FETCH_BY_ID_ACTION } from '../action/ActionCreator'
import CircularProgress from '@mui/material/CircularProgress';
import Table from './Table';
function App() {

  const dispatch = useDispatch()
  const data = useSelector(state => state.FetchReducer)

  const todoIdRef = React.createRef()
  const selectRef = React.createRef()
  const handleClick = () => dispatch(FETCH_ALL_ACTION(selectRef.current.value))
  const handleIdClick = () => dispatch(FETCH_BY_ID_ACTION(todoIdRef.current.value, selectRef.current.value))



  return (
    <div className="App">
      <label>Select to fetch </label>
      <select ref={selectRef}>
        {data.selectionList.map(item => <option value={item}>{item}</option>)}
      </select>
      <br />
      <button onClick={handleClick}>Fetch all</button>
      <br />
      <label>Enter todo id to fetch</label>
      <input type="number" ref={todoIdRef} />
      <button onClick={handleIdClick}>Fetch by id</button>
      <br />
      {data.loading ? <CircularProgress color="success" /> : ''}
      <Table alldata={(data.alldata)} />
    </div>
  );

}

export default App