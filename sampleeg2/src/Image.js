import logo from './logo.svg';
import './App.css';
import React from 'react';
class Image extends React.Component {
    render() {
        return (<img src={logo} className="App-logo" alt="logo" />)
    }
}

export default Image