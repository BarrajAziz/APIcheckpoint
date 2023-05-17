import logo from './logo.svg';
import React, {useEffect, useState} from 'react'
import './App.css';
import axios from "axios";
import ListOfUser from "./ListOfUser";

function App() {
  const[user,setUsers]=useState([])

  useEffect (()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then ((result)=>{
      setUsers(result.data);
    })
  },[])
  return (
    <div className="App">
      {user.map((user)=>(
        <ListOfUser  user={user}/>
      ))}
    </div>
  );
}

export default App;
