
import React from 'react';
import './App.css';
import { useState } from 'react';
function App() {
  const [toDos,setToDos]=useState([])
  const [toDo,setToDo]=useState('')
  return (
  <div>
   <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text"  value={toDo} onChange={(e)=>setToDo(e.target.value)}     placeholder="🖊️ Add item..." />
        <i  onClick={()=>setToDos([...toDos,{text :toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos?.map((value)=>{


        
      return  <div className="todo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p>{value.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>})}
      </div>
    </div>
    </div>
  );
}

export default App;
