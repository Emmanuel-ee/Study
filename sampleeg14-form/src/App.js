
import './App.css';
import React, { useState } from 'react'

function App() {
  const userIdRef = React.createRef()
  const titleRef = React.createRef()
  const bodyRef = React.createRef()



  const [response, setresponse] = useState({})
  const handleFormSubmit = (event) => {
    event.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: titleRef.current.value,
        body: bodyRef.current.value,
        userId: userIdRef.current.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => setresponse(json));
  }
  return (
    <div className="App">
      <h1>UnControlled Component</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Enter user id</label>
        <input type="number" ref={userIdRef} />
        <br />
        <label>Enter title</label>
        <input type="text" ref={titleRef} />
        <br />
        <label>Enter body</label>
        <input type="text" ref={bodyRef} />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      {JSON.stringify(response)}
    </div>
  );
}

export default App;
