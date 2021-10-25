import React from 'react';
import './App.css';
import Image from './Image';
import Counter from './Counter';
import Props from './Props';

class App extends React.Component<{}, Counter> {
  constructor(props: any) {
    super(props)
    let object: Counter = { count: 0 }
    this.state = (object)
  }

  increment = (e: React.MouseEvent<HTMLElement>) => {
    let counterObject: Counter = { count: this.state.count + 1 }
    this.setState(counterObject)

  }
  render() {
    return (
      <div className="App">
        <h1>From Typescript</h1><br />
        <Image title="Image sample" />
        <br />
        <button onClick={this.increment}>Increment</button>
        <br />
        Counter is {this.state.count}
      </div>
    );
  }
}

export default App;
