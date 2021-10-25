import './App.css';
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  const increment = () => setCounter(counter + 1)
  const decrement =()=>setCounter(counter-1)
  return (
    <div className="App">
      Counter is {counter}
      <br />
      <button onClick={increment}>Increment</button>
      <br/>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
