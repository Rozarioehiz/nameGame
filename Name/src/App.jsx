import React, { useState } from 'react'
import './App.css'

const App = () => {

  const[state,setState]=useState("")

  const handlechange =()=>{


  const email ="rose"

  if(email !== state){
    alert("wrong email")
  }
  else{
    alert("email entered is correct")
  }
}

  return (
   <div className='body'>
    <p >Enter name to guess</p>
   <input type="text" 
   placeholder='Name'
   onChange={(e)=>setState(e.target.value)}     
   />
   <button onClick={handlechange}>check</button>
   </div>
  )
}

export default App

