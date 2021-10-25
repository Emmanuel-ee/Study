import './App.css';
import { Formik, Field, Form } from 'formik';
import React from 'react';
import ValidationSchema from './ValidationSchema';
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
        validationSchema={ValidationSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="firstName">Enter first name</label>
            <Field name="firstName" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <br />
            <label htmlFor="lastName">Enter last name</label>

            <Field name="lastName" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <br />
            <label htmlFor="email">Enter email</label>
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}</Formik>
    )
  }
}
export default App;
