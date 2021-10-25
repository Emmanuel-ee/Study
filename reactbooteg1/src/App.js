import './App.css';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import TableComponent from './TableComponent';
import SpinnerComponent from './SpinnerComponent';
function App() {
  const todoIdRef = React.useRef()
  const [todoData, settodoData] = useState([])
  const [spin, setspin] = useState(false)
  const handleClick = (event) => {
    setspin(true)
    event.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/todos/' + todoIdRef.current.value)
      .then(response => response.json())
      .then(json => { settodoData([json]); setspin(false) })

  }
  return (
    <div className="App">
      <header>
        < Form onSubmit={handleClick}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter todo id</Form.Label>
            <Form.Control type="text" ref={todoIdRef} />
            <Form.Text className="text-muted">
              Enter todo id to fetch
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" >
            Submit
          </Button>
        </Form>
        <br />
        <SpinnerComponent isSpin={spin} />
        <br />
        <TableComponent todoData={todoData} />
      </header>

    </div>
  );
}

export default App;
