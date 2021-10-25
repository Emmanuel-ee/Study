import './App.css';
import React from 'react';
import { connect } from 'react-redux'
import { FETCH_ALL_ACTION, FETCH_BY_ID_ACTION } from '../action/ActionCreator'
import CircularProgress from '@mui/material/CircularProgress';
import Table from './Table';
class App extends React.Component {

  todoIdRef = React.createRef()
  selectRef = React.createRef()
  handleClick = () => this.props.dispatch(FETCH_ALL_ACTION(this.selectRef.current.value))
  handleIdClick = () => this.props.dispatch(FETCH_BY_ID_ACTION(this.todoIdRef.current.value, this.selectRef.current.value))


  render() {
    return (
      <div className="App">
        <label>Select to fetch </label>
        <select ref={this.selectRef}>
          {this.props.data.FetchReducer.selectionList.map(item => <option value={item}>{item}</option>)}
        </select>
        <br />
        <button onClick={this.handleClick}>Fetch all</button>
        <br />
        <label>Enter todo id to fetch</label>
        <input type="number" ref={this.todoIdRef} />
        <button onClick={this.handleIdClick}>Fetch by id</button>
        <br />
        {this.props.data.FetchReducer.loading ? <CircularProgress color="success" /> : ''}
        <Table alldata={(this.props.data.FetchReducer.alldata)} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(JSON.stringify(state))
  return ({ data: state })
}

export default connect(mapStateToProps)(App)
