import './App.css';
import React, { useState } from 'react';
function App() {

  const titleRef = React.createRef()
  const bodyRef = React.createRef()
  const userIdRef = React.createRef()
  const [response, setResponse] = React.useState('Not Submitted')
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({ title: titleRef.current.value, body: bodyRef.current.value, userId: userIdRef.current.value }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => setResponse(json));
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
      Response is {JSON.stringify(response)}
    </div>
  );
}

export default App;
