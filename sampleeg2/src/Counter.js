import React from "react"
class Counter extends React.Component {
    render() {
        return (<div>
            <button onClick={this.props.incrementClick}>Increment</button>
            <button onClick={this.props.decrementClick}>Decrement</button>
            <br />
            Counter is {this.props.counter}</div>)
    }
}

export default Counter