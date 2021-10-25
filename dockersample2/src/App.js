import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  const [counter, setcounter] = useState(0)
  const handleClick = ()=>setcounter(counter+1)
  return (
    <div className="App">
      <header className="App-header">
        Counter {counter}
        <br/>
        <button onClick={handleClick}>Increment</button>
      </header>
    </div>
  );
}

export default App;
