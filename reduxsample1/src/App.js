import './App.css';
import React from 'react';
import { connect } from 'react-redux'
class App extends React.Component {
  todoIdRef = React.createRef()

  dispatchFetch = () => {
    this.props.dispatch({ type: 'FETCH_TODO_ID', todoId: this.todoIdRef.current.value })
  }
  dispatchFetchAll = () => {
    this.props.dispatch({ type: 'FETCH_TODOS_ALL' })
  }

  render() {
    return (<div className="App">
      <label>Enter TodoId to fetch</label>
      <input type="number" id="todoId" ref={this.todoIdRef} />
      <br />
      <button onClick={this.dispatchFetch}> Fetch</button>
      <br />

      <button onClick={this.dispatchFetchAll}> Fetch all</button>
      <br />
      Todo id to fetch is {this.props.data.todoId} <br />
      Data fetched is {JSON.stringify(this.props.data.data)}
    </div>)
  }

}
const mapStateToProps = (state) => ({ data: state })

export default connect(mapStateToProps)(App)
