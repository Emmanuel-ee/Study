import React from "react";

function Counter(props){
    return ( <div className="App">
    Counter {props.counter}<br/>
    <button onClick={props.increment}>Increment</button>
    <button onClick={props.decrement}>Decrement</button>
  </div>)
}

export default Counter