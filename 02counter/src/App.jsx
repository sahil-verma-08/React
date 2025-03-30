import { useState } from 'react'

import './App.css'

function App() {
  
  let [counter,setcounter]=useState(0)      // hook
  const addcounter= function(){
    if (counter<20){
      counter=counter+1;
      setcounter(counter+1)
      console.log("clicked")

    }
                                    //                 // interviwe question
                                    //                 // (this is not a working for all becouse the uppdate go in a bundales)
                                    //    setcounter(counter+1)
                                    //   setcounter(counter+1 )
                                    //    setcounter(counter+1)    
                                    //   setcounter(counter+1)
                                
                                    //                       // so that use the call funtion
                                    // setcounter(prevCounter =>prevCounter+1)
                                    // setcounter(prevCounter =>prevCounter+1 )
                                    // setcounter(prevCounter =>prevCounter+1)    
                                    // setcounter(prevCounter =>prevCounter+1)
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
