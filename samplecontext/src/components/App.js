import './App.css'
import React from 'react'
import Child from './Child'

import ColorContext from '../context/ColorContext';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { userData: { color: 'red', background: 'black' } }
  }

  changeColor = () => {
    if (this.state.userData.color === 'red') {
      this.setState(Object.assign({},this.state,{userData:{color:'green',background:this.state.userData.background}}))
    }
    else {
      this.setState(Object.assign({},this.state,{userData:{color:'red',background:this.state.userData.background}}))

    }
  }

  render() {
    return (<div>
      <ColorContext.Provider value={this.state}>
        <Child></Child>
        <button onClick={this.changeColor}>Click to change color</button>
      </ColorContext.Provider>
    </div>)
  }

}
export default App
