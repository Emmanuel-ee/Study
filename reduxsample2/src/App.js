import { connect } from 'react-redux'
import './App.css';
import React from 'react';

class App extends React.Component {
  titleRef = React.createRef()
  bodyRef = React.createRef()
  userIdRef = React.createRef()

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.dispatch({
      type: 'FORM_SUBMIT', formdata: {
        title: this.titleRef.current.value,
        body: this.bodyRef.current.value,
        userId: this.userIdRef.current.value
      }
    })
  }


  render() {
    return (<div>
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>Enter title</label>
          <input type="text" name='title' ref={this.titleRef} ></input>
          <br />
          <label>Enter body</label>
          <input type="text" name='body' ref={this.bodyRef} ></input>
          <br />
          <label>Enter userId</label>
          <input type="number" name='userId' ref={this.userIdRef} ></input>
          <br />
          <button type="submit">Submit</button>
        </form>
        <br />
        Status is {this.props.data.message}
        <br />
        Response is {JSON.stringify(this.props.data.responsedata)}
      </div>

    </div>)
  }

}

const mapStateToProps = (state) => ({ data: state })
export default connect(mapStateToProps)(App)