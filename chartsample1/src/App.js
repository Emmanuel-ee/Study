
import './App.css';
import BarChart from './BarChart';
import {useState} from 'react'
function App() {
const [serverData, setServerData] = useState([])
const handleClick =()=>{
  fetch('https://sampletraining.free.beeceptor.com/my/api/path')
  .then(response => response.json())
  .then(json => setServerData(json))

  
}
  return (
    <div className="App">
      <button onClick={handleClick}>Click for chart</button>
      <br/>
       <BarChart data={serverData}/>
    </div>
  );
}

export default App;
