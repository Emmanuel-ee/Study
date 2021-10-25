
import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import TodoById from './TodoById';
import TodoAll from './TodoAll';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} ><Home></Home></Route>
          <Route path="/todoid" exact={true}><TodoById></TodoById></Route>
          <Route path="/todoall" exact={true}><TodoAll></TodoAll></Route>
        </Switch>
        <Link to="/">Home</Link><br />
        <Link to="/todoall" >Fetch all</Link><br />
        <Link to="/todoid">Fetch by ID</Link><br />
      </BrowserRouter>

    </div>
  );
}

export default App;
