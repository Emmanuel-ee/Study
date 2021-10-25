import './App.css';
import { useState, useEffect } from 'react'
import DisplayDate from './DisplayDate';
import UserDetails from './UserDetails';
import MemoUserDetails from './MemoUserDetails';

function App() {

  const [data, setdata] = useState()
  useEffect(() => {
    setInterval(() => {
      setdata(new Date())
    }, 5000);   
    return () => {

    }
  }, [data])

 
  return (
    <div className="App">
      <DisplayDate date={data}></DisplayDate>
      <br />
      <UserDetails username="abcd" />
      <br />
      <MemoUserDetails username="abcd" />

    </div>
  );
}

export default App;
