
import { useFormik } from 'formik';
import './App.css';
import { useState } from 'react'

function App() {
  const [response, setresponse] = useState()
  const formik = useFormik({
    initialValues: {
      title: '',
      body: '',
      userId: '',
    },
    onSubmit: values => {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => setresponse(json));
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Enter title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <br />
        <label htmlFor="body">Enter body</label>
        <input
          id="body"
          name="body"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.body}
        />
        <br />
        <label htmlFor="userId">Enter user id</label>
        <input
          id="userId"
          name="userId"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.userId}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      {JSON.stringify(response)}
    </div>
  )
}
export default App;
