import './App.css';
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.name = React.createRef()
    this.describe = React.createRef()
    this.language = React.createRef()
  }
  captureFormSubmit = (event) => {
    let formdata = {}
    formdata['name'] = this.name.current.value
    formdata['describe'] = this.describe.current.value
    formdata['language'] = this.language.current.value
    console.log(JSON.stringify(formdata))
    event.preventDefault()
  }

  render() {
    return (<div>
      <form onSubmit={this.captureFormSubmit}>
        <label>Enter your name</label>
        <input type="text" id="name" ref={this.name} />
        <br />
        <label>Describe yourself </label>
        <textarea id="describe" ref={this.describe} />
        <br />
        <label>Languages you know</label>
        <select ref={this.language}>
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
