import React from 'react';
import logo from './logo.svg';
import './App.css';
import Props from './Props';
class Image extends React.Component<Props, {}> {
  
  render() {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <br/>
        <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
  }
}

export default Image;
