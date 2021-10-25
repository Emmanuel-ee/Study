import './App.css';
import ColorContext from './ColorContext';
import Child from './Child';
function App() {
  return (
    <ColorContext.Provider value="red">
    <div className="App">
     <Child></Child>
    </div>
    </ColorContext.Provider>
  );
}

export default App;
