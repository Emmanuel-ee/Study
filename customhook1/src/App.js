import logo from './logo.svg';
import './App.css';
import useCheckNetwork from './useCheckNetwork';
import { useNetworkState} from 'react-use'
function App() {
  const  networkdata=useCheckNetwork()
  return (
    <div className="App">
     {JSON.stringify(networkdata)}
    </div>
  );
}

export default App;
