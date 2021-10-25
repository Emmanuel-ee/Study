import './App.css';
import { useState,useEffect } from 'react'
import Table from './Table';
function App() {
  const [todoAll, settodoAll] = useState([])
  const [select, setselect] = useState("posts")
 
 useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/${select}`)
  .then(response => response.json())
  .then(json => settodoAll(json))
   return () => {
     
   }
 }, [select])

 const handleSelectChange=(e)=>setselect(e.target.value)

  return (
    <div className="App">
      <select onChange={handleSelectChange}>
        <option value="posts">posts</option>
        <option value="comments">comments</option>
        <option value="todos">todos</option>
      </select>
      <br />
    
      <br/>
      <Table alldata={todoAll}></Table>
    </div>
  );
}

export default App;
