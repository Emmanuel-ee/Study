import './App.css';
import { useState } from 'react'
function App() {
  const [formData, setFormData] = useState({ title: '', body: '', userId: '' })
  const [response, setResponse] = useState('Not submitted')
  const captureTitle = (event) => setFormData(Object.assign({}, formData, { title: event.target.value }))
  const captureBody = (event) => setFormData(Object.assign({}, formData, { body: event.target.value }))
  const captureUserId = (event) => setFormData(Object.assign({}, formData, { userId: event.target.value }))
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(JSON.stringify(formData))
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(formData),
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
        <input type="text" name='title' onChange={captureTitle}></input>
        <br />
        <label>Enter body</label>
        <input type="text" name='body' onChange={captureBody}></input>
        <br />
        <label>Enter userId</label>
        <input type="number" name='userId' onChange={captureUserId}></input>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      Response is {JSON.stringify(response)}
    </div>
  );
}

export default App;
