import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '', describe: '', language: '' }
  }

  captureName = (event) => this.setState({ name: event.target.value })
  captureTextArea = (event) => this.setState({ describe: event.target.value })
  captureLanguage = (event) => this.setState({ language: event.target.value })
  captureFormSubmit = (event) => {
    console.log(JSON.stringify(this.state))
    event.preventDefault()
  }

  render() {
    return (<div>
      <form onSubmit={this.captureFormSubmit}>
        <label>Enter your name</label>
        <input type="text" id="name" onChange={this.captureName} />
        <br />
        <label>Describe yourself </label>
        <textarea id="describe" onChange={this.captureTextArea} />
        <br />
        <label>Languages you know</label>
        <select onChange={this.captureLanguage}>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="telgu">Telgu</option>
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>)
  }
}
export default App;
