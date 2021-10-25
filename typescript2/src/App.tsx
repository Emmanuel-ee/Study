import React from 'react';
import Image from './Image';
import './App.css';
import Counter from './Counter';
import { useState } from 'react'

function App() {
  const [countData, setCountData] = useState<Counter>({ count: 0 })
  const increment = () => setCountData({ count: countData.count + 1 })

  return (
    <div className="App">
      <header className="App-header">
        <Image title="Image from FC" />
        <br />
        <button onClick={increment}>Increment</button>
        <br />
        Counter {countData.count}
      </header>
    </div>
  );
}

export default App;
