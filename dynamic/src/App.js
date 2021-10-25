import './App.css';
import React from 'react';
import Counter from './Counter';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
    this.onIncrement = this.onIncrement.bind(this)
  }

  onIncrement() {
    this.setState({ counter: this.state.counter + 1 })
  }
  onDecrement = () => this.setState({ counter: this.state.counter - 1 })

  render() {
    return (
      <div className="App">
        <Counter counter={this.state.counter}/>
        <br/>
        <button onClick={this.onIncrement}>Increment</button>
        <br />
        <button onClick={this.onDecrement}>Decrement</button>

      </div>
    );
  }

}

export default App;
