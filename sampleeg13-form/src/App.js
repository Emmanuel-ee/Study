
import './App.css';
import { useState } from 'react'

function App() {

  const [formData, setFormData] = useState({ userId: '', title: '', body: '' })
  const [response, setresponse] = useState({})
  const handleFormSubmit = (event) => {
    event.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: formData.title,
        body: formData.body,
        userId: formData.userId,
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
      <h1>Controlled Component</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Enter user id</label>
        <input type="number" onChange={(event) => setFormData({ ...formData, userId: event.target.value })} />
        <br />
        <label>Enter title</label>
        <input type="text" onChange={(event) => setFormData({ ...formData, title: event.target.value })} />
        <br />
        <label>Enter body</label>
        <input type="text" onChange={(event) => setFormData({ ...formData, body: event.target.value })} />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      {JSON.stringify(response)}
    </div>
  );
}

export default App;
