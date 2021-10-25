
import './App.css';
import {useState} from 'react'
import useClippy from 'use-clippy';
import { useNetworkState} from 'react-use'
import { useSpeechSynthesis } from 'react-speech-kit';
function App() {
  const { speak } = useSpeechSynthesis();
  const [name, setName] = useState('')
  const [clipboard, setClipboard] = useClippy()
  const networkData = useNetworkState()
  const captureName=(event)=>{
    setName(event.target.value)
    //setClipboard(name)
  }
  return (
    <div className="App">
      <label>Enter name </label>
      <input type="text" name="username" onChange={captureName}/>
      <br/>
      Network data is {JSON.stringify(networkData)}

      <br/>
      <button onClick={()=>speak({text:name})}>Speak</button>
    </div>
  );
}

export default App;
