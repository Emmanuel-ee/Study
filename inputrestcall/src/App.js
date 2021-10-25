import './App.css';
import React from 'react';
import Table from './Table';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { todoid: '', data: { userId: '', id: '', title: '', completed: '' }, alldata: [] }
  }

  captureTodoId = (event) => this.setState({ todoid: event.target.value })


  fetchalldata = () => fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => this.setState({ alldata: json }))


  fetchdata = () => fetch('https://jsonplaceholder.typicode.com/todos/' + this.state.todoid)
    .then(response => response.json())
    .then(json => this.setState({ data: json }))

  render() {
    return (
      <div>
        <label> Enter todo id <input type="number" id="todoid" onChange={this.captureTodoId} /></label>
        <br />
        <button onClick={this.fetchdata}>Click to get data</button>
        <br />
        Data fetched {JSON.stringify(this.state.data)}

        <br />
        <button onClick={this.fetchalldata}>Click to get entire data</button>
        <br />
        <Table tabledata={this.state.alldata}></Table>
      </div>

    )
  }
}

export default App;
