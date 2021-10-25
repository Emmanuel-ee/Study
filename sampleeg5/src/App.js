import './App.css';
import {useState} from 'react'
import Counter from './Counter';
function App() {

  const [counter, setcounter] = useState(0)
  const increment=()=>setcounter(counter+1)
  const decrement=()=>setcounter(counter-1)

  return (
   <Counter counter={counter} increment={increment} decrement={decrement}></Counter>
  );
}

export default App;
