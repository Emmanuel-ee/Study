import React from "react";
class Counter extends React.Component{
 render(){
     console.log("Counter rendered")
     return (<div>Counter is {this.props.counter}</div>)
 }
}

export default Counter