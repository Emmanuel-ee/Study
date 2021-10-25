import './App.css';
import { Formik, Field, Form } from 'formik';
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: {} }
  }
 render() {
    return (
      <div>
        <Formik
          initialValues={{
            todoid: '',
          }}
          onSubmit={(values) => {
            fetch('https://jsonplaceholder.typicode.com/todos/' + values.todoid)
              .then(response => response.json())
              .then(json => this.setState({ data: json }))
          }}
        >
          <Form>
            <label htmlFor="todoid">Enter todo id</label>
            <Field id="todoid" name="todoid" />
            <br />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
        <br />
        Data fetched {JSON.stringify(this.state.data)}
      </div>
    )
  }
}
export default App;
