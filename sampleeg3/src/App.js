import './App.css';
import React from 'react';
import Table from './Table';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: { userId: '', id: '', title: '', completed: '' }, todoId: '', alldata: [] }
  }

  captureTodoIdChange = (e) => this.setState(Object.assign({}, this.state, { todoId: e.target.value }))
  triggerFetch = (e) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${this.state.todoId}`)
      .then(response => response.json())
      .then(data => this.setState({ ...this.state, data }))
  }

  triggerAllFetch = (e) => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(alldata => this.setState({ ...this.state, alldata }))
  }
  render() {
    return (
      <div>
        <label>Enter todo id to fetch</label>
        <input type="number" onChange={this.captureTodoIdChange} />
        <br />
        <button onClick={this.triggerFetch}> Fetch</button>
        <br />
        <button onClick={this.triggerAllFetch}> Fetch all</button>
        <br />
        {JSON.stringify(this.state.data)}
        <br />
        <Table alldata={this.state.alldata} />
      </div>


    )

  }
}

export default App;
