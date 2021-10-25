
import './App.css';
import React from 'react';
import { connect } from 'react-redux'
class App extends React.Component {
  increment = () => {
    console.log("Inside increment")
    this.props.dispatch({ type: "INCREMENT" })
  }
  decrement = () => {
    console.log("Inside decrement")
    this.props.dispatch({ type: "DECREMENT" })
  }

  incrementByFactor = () => {
    console.log("Inside increment")
    this.props.dispatch({ type: "INCREMENTBYFACTOR" })
  }
  captureFactor = (e) => this.props.dispatch({ type: "FACTOR", factor: e.target.value })

  render() {
    return (<div>
      Counter {this.props.data.counter}<br />
      <label> Enter number to decrement or increment</label>
      <input type="number" onChange={this.captureFactor } />
      <br />
      <button onClick={this.increment}>Increment</button>
      <br/>
      <button onClick={this.decrement}>Decrement</button>
      <br />
      <button onClick={this.incrementByFactor}>Increment</button>
      <br/>
    </div>)

  }


}

const mapStateToProps = state => ({
  data: state
})

export default connect(mapStateToProps)(App)
