import { connect } from 'react-redux';
import './App.css';
import React from 'react';

class App extends React.Component {
  todoIdRef = React.createRef()
  handleTodoIdClick = () => {
    this.props.dispatch({ type: 'FETCH_BY_ID', id: this.todoIdRef.current.value })
  }
  handleClick = () => {
    this.props.dispatch({ type: 'FETCH_ALL'})
  }
  render() {
    return (<div>
      <label>Enter todo id</label>
      <input type="number" ref={this.todoIdRef} />
      <br />
      <button onClick={this.handleTodoIdClick}>Fetch single todo id</button>
      <br />
      <button onClick={this.handleClick}>Fetch all</button>
      <br />
      Data fetched {JSON.stringify(this.props.data)}
    </div>)
  }
}

const mapStateToProps = state => ({ data: state })
export default connect(mapStateToProps)(App)
