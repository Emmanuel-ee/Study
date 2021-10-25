import './App.css';
import React from 'react';
import Image from './Image';
import Paragraph from './Paragraph';
import Anchor from './Anchor';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Image></Image>
          <Paragraph></Paragraph>
          <Anchor></Anchor>
        </header>
      </div>
    );
  }
}

export default App;
