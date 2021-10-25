import './App.css';
import React from 'react';
const axios = require('axios').default;
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { todoid: '', data: { userId: '', id: '', title: '', compoleted: '' }, error: '' }
  }
  captureTodoId = (event) => {
    this.setState({ todoid: event.target.value })
  }

  fetchdata = () => axios.get('https://jsonplaceholder.typicode.com/todos/' + this.state.todoid)
    .then(response => this.setState({ data: response.data }))
    .catch((error) => {
      console.log(error);
      this.setState({ error: error })
    })


  render() {
    return (<div>
      <label> Enter todo id <input type="number" id="todoid" onChange={this.captureTodoId} /></label>
      <br></br>
      <button onClick={this.fetchdata}> Click to fetch</button>
      <br />
      Output {JSON.stringify(this.state.data)}
      {this.state.error === '' ? <div></div> : <div>{JSON.stringify(this.state.error.message)}</div>}

    </div>)
  }
}

export default App;
