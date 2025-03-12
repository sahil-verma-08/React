import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setcounter]=useState(0)
  const addcounter= function(){
    if (counter<20){
      counter=counter+1;
      setcounter(counter)
      console.log("clicked")
    }
  }
  const remove= function(){
    if (counter>0){
        counter=counter-1;
       setcounter(counter)
       console.log("clicked")
    }
  }

  return (
    <>
     
     <h1>change the counter value </h1>
     <h2>counter:{counter}</h2>
     <button onClick={addcounter}>add {counter}</button>
     <br/>
     <button onClick={remove}>Sub{counter}</button>
    </>
  )
}

export default App
