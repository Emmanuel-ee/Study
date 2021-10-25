import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {username:''}
  }

  captureUsername =(event)=>{
    this.setState({username:event.target.value})
  }
  render(){
  return (
    <div className="App">
      <label> Enter username
      <input type="text" id="username" onChange={this.captureUsername}/>
      </label>
      <br/>
      <label>
        User entered {this.state.username}
      </label>

    </div>
  );
}
}

export default App;
