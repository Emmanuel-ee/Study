import logo from './logo.svg';
import './App.css';
import useCheckOnline from './useCheckOnline';

function App() {
  const onlineStatus = useCheckOnline()
  return (
    <div className="App">
      <header className="App-header">
        Online {JSON.stringify(onlineStatus)}
      </header>
    </div>
  );
}

export default App;
