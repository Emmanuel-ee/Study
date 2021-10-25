import './App.css';
import React from 'react';
import Table from './Table';
import Button from '@mui/material/Button';
import SelectItems from './SelectItems';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tabledata: [], type: '' ,header:[]}
  }

  captureChange = (event) => this.setState({ type: event.target.value })

  fetchalldata = () => fetch('https://jsonplaceholder.typicode.com/' + this.state.type)
    .then(response => response.json())
    .then(json => this.setState({ tabledata: json, header :this.getrowheader(json) }))

  getrowheader =(dataarray)  =>{
     let header =[]
     for(let h in dataarray[0]){
       header.push( { field: h, headerName: h.toUpperCase(),width:200 })
     }
     return header
  }


  render() {
    return (
      <div>
        <SelectItems captureChange={this.captureChange}></SelectItems>
        <Button variant="contained" onClick={this.fetchalldata}>Click to get data</Button><br />
        <Table type={this.state.type} tabledata={this.state.tabledata} header={this.state.header} />

      </div>
    )
  }

}

export default App;
