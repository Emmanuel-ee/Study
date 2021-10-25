
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>


          <Switch>
            <Route path='/' exact={true} component={Home}></Route>
            <Route path='/home' exact={true} component={Home}></Route>
            <Route path='/contact' exact={true} component={Contact}>

            </Route>

          </Switch>
          <Link to="/home">Home</Link>
          <br>
          </br>
          <Link to="/contact">Contact</Link>

        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
