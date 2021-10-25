import './App.css';
import React from 'react';
import Counter  from './Counter';
import Message from './Message';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={counter:0,message:'Hello World'}
  }

  increment=()=>this.setState({counter:this.state.counter+1,message:'Increment'})
  render(){
    console.log('inside parent')
    return (
      <div className="App">
       <Counter counter={this.state.counter}/>
       <br/>
       <Message message={this.state.message}/>
       <br/>
       <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
  
}

export default App;
