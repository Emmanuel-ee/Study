import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_ALL_ACTION, FETCH_BY_ID_ACTION ,CAPTURE_SELECT_ACTION,CAPTURE_ID_ACTION} from '../action/ActionCreator'
import CircularProgress from '@mui/material/CircularProgress';
import Table from './Table';
function App() {

  const dispatch = useDispatch()
  const data = useSelector(state => state.FetchReducer)


  const handleClick = () => dispatch(FETCH_ALL_ACTION(data.selected))
  const handleIdClick = () => dispatch(FETCH_BY_ID_ACTION(data.todoId, data.selected))
  const handleSelectChange =(e)=>dispatch(CAPTURE_SELECT_ACTION(e.target.value))
  const handleTodoIdRef=(e)=>dispatch(CAPTURE_ID_ACTION(e.target.value))

  return (
    <div className="App">
      <label>Select to fetch </label>
      <select onChange={handleSelectChange}>
        {data.selectionList.map(item => <option value={item}>{item}</option>)}
      </select>
      <br />
      <button onClick={handleClick}>Fetch all</button>
      <br />
      <label>Enter todo id to fetch</label>
      <input type="number" onChange={handleTodoIdRef} />
      <button onClick={handleIdClick}>Fetch by id</button>
      <br />
      {data.loading ? <CircularProgress color="success" /> : ''}
      <Table alldata={(data.alldata)} />
    </div>
  );

}

export default App