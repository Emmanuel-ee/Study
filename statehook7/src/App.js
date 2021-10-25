import {useRef} from 'react'
import './App.css';

function App() {
  const usernameIdRef = useRef(null)
  return (
    <div>
      <label>Enter username</label>
      <input type='text' id="username" ref={usernameIdRef}/>
      <button onClick={()=>alert(usernameIdRef.current.value)}>Click</button>
    </div>
  );
}

export default App;
