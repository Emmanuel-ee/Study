import './App.css';
import React from 'react';
import Table from './Table';
import Button from '@mui/material/Button';
import Spinner from './Spinner';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: { userId: '', id: '', title: '', completed: '' }, todoId: '', alldata: [], loading: false }
  }

  captureTodoIdChange = (e) => this.setState(Object.assign({}, this.state, { todoId: e.target.value }))
  triggerFetch = (e) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${this.state.todoId}`)
      .then(response => response.json())
      .then(data => this.setState({ ...this.state, data }))
  }

  triggerAllFetch = (e) => {
    this.setState({ ...this.state, loading: true })
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(alldata => this.setState({ ...this.state, alldata, loading: false }))
    }

      , 5000)
  }
  render() {
    return (
      <div>
        <label>Enter todo id to fetch</label>
        <input type="number" onChange={this.captureTodoIdChange} />
        <br />
        <Button variant="contained" onClick={this.triggerFetch}> Fetch</Button>
        <br />
        <Button variant="contained" onClick={this.triggerAllFetch}> Fetch all</Button>
        <Spinner isLoading={this.state.loading}></Spinner>
        <br />
        {JSON.stringify(this.state.data)}
        <br />
        <Table alldata={this.state.alldata} />
      </div>


    )

  }
}

export default App;
