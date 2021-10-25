
import './App.css';
import React from 'react';
import Counter from './Counter';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
    this.incrementClick = this.incrementClick.bind(this)
  }
  incrementClick() {
    this.setState({ counter: this.state.counter + 1 })
  }
  decrementClick = () => this.setState({ counter: this.state.counter - 1 })

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <Counter counter={this.state.counter} incrementClick={this.incrementClick} decrementClick={this.decrementClick}></Counter>

        </header>
      </div>
    );
  }
}

export default App;
