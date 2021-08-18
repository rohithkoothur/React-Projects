
import React from 'react';
import './App.css';
import { useState } from 'react';
import { date } from 'check-types';
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
        <i  onClick={()=>setToDos([...toDos,{id:Date.now() ,text :toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos?.map((value)=>{


        
      return  <div className="todo">
          <div className="left">

            <input onChange={(e)=>{
              console.log(e.target.value)
              console.log(value)
              setToDos(toDos.filter(obj2=>{
                if(obj2.id===value.id){
                  obj2.status=e.target.value
                }
              }))

            }} value={value.status} type="checkbox" name="" id="" />
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
