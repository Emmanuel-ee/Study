import React from 'react';
import logo from './logo.svg';
import './App.css';
import Props from './Props';

const Image: React.FunctionComponent <Props>=({title})=> {
  return  (
    <div>
      <h1>{title}</h1><br />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default Image;
