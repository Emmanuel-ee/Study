import React from 'react';
import './App.css';
import {useDispatch,useSelector} from 'react-redux'

function App() {
  const titleRef = React.useRef(null)
  const bodyRef = React.useRef(null)
  const userIdRef = React.useRef(null)
  const dispatch = useDispatch()
  const response = useSelector(state => state)
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch({
      type: 'FORM_SUBMIT', formdata: {
        title: titleRef.current.value,
        body: bodyRef.current.value,
        userId: userIdRef.current.value
      }
    })

  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Enter title</label>
        <input type="text" name='title' ref={titleRef} ></input>
        <br />
        <label>Enter body</label>
        <input type="text" name='body' ref={bodyRef} ></input>
        <br />
        <label>Enter userId</label>
        <input type="number" name='userId' ref={userIdRef} ></input>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      Response is {JSON.stringify(response.responsedata)}
      <br/>
      Status is {response.message}
    </div>

  );
}

export default App;
