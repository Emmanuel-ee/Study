import React from "react";
class Message extends React.PureComponent{
    render(){
        console.log("Pure ")
        return (<b>{this.props.message}</b>)
    }
}
export default Message