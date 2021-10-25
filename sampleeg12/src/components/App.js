
import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_USER_ACTION } from '../action/ActionCreator';
import Tables from './Tables';

function App() {
  const search = React.createRef()
  const dispatch = useDispatch()
  const fetchUser = () => dispatch(FETCH_USER_ACTION(search.current.value))
  const userData = useSelector(state => state.userData)
  return (
    <div className="App">
      <label>Enter user to search</label>
      <input type="text" ref={search} />
      <br />
      <button onClick={fetchUser}>Fetch user</button>
      <br></br>      <Tables userData={userData} />
    </div>
  );
}

export default App;
