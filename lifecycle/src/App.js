import './App.css';
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: {} }
    console.log('Constructor')
  }

  componentDidMount() {
    console.log('Component did mount called')
    document.title ='Life cycle'
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => this.setState({ data: json }))
  }
  componentWillMount() {
    console.log('Component will mount called')

  }

  componentWillUpdate() {
    console.log('Component will update')
  }
  componentDidUpdate() {
    console.log('Component did update')
  }
  componentWillUnmount(){
    alert('unmount')
    console.log('Unmount called')
  }


  render() {
    console.log(" Inside render ")
    
    return (<div>
      {JSON.stringify(this.state.data)} <button onClick={()=>this.setState({data:{}})}>Click to destroy</button></div>)

  }

}

export default App;
