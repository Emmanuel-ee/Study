import './App.css';
import { useEffect, useState } from 'react'
function App() {
  const [data, setData] = useState({ data: [], header: [] })
  const [type, setType] = useState('todos')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/' + type)
      .then((response) => response.json())
      .then((json) => {
        let customHeader = []
        for (let h in json[0]) {
          customHeader.push(h)
        }
        setData({ header: customHeader, data: json })
      })
    return () => {

    }
  }, [type])
  return (
    <div className="App">
      <label>Select to fetch</label>
      <select onChange={(event) => setType(event.target.value)}>
        <option value="todos">Todos</option>
        <option value="posts">Posts</option>
      </select>
      <br />
      <table border={1}>
        <thead>
          <tr>
            {data.header.map(h => (<th>{h.toUpperCase()}</th>))}
          </tr>
        </thead>
        <tbody>
          {data.data.map(row => (<tr>{data.header.map(h => <td>{row[h]}</td>)}</tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
