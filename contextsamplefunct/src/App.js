import ColorContext from './ColorContext';
import './App.css';
import { useState } from 'react'
import TodoById from './TodoById';


function App() {
  const [color, setcolor] = useState({ color: "red", border: 0 })
 
  const handleClick = () => {
    if (color.color === "red") {
      setcolor({ color: "yellow", border: 1 })
    } else {
      setcolor({ color: "red", border: 0 })
    }

  }
  console.log('color',color)
  return (
    <ColorContext.Provider value={color}>
      <div>
        <div style={{ backgroundColor: color.color }}>
          <label>Press to change Theme</label>
          <button onClick={handleClick}>Change Theme using functional</button>
        </div>
        <TodoById></TodoById>
      </div>
    </ColorContext.Provider>
  );
}

export default App;
