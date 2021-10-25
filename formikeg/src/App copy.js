import './App.css';
import { Formik, Field, Form } from 'formik';
import React from 'react';
class App extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          picked: '',

        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" type="email" />

          <label>
            <Field type="radio" name="picked" value="One" />
            One
          </label>
          <label>
            <Field type="radio" name="picked" value="Two" />
            Two
          </label>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    )
  }
}
export default App;
