import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import ListResource from './ListResource';
import CreateUser from './CreateUser';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} ><Home /></Route>
          <Route path="/lr" component={ListResource} exact={true} ></Route>
          <Route path="/cr" exact={true} ><CreateUser /></Route>
        </Switch>
        <Link to="/">Home</Link> <br />
        <Link to="/lr">List Resource</Link><br/>
        <Link to="/cr">Create user</Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
