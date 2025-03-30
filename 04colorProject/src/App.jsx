import { useState } from 'react'



function App() {
  const [color,setcolor] =useState("olive")

  return (
   <div className="w-full h-screen duration-200 "
   style={{backgroundColor: color  }}>

   <div className='fixed flex flex-wrap 
   justify-center bottom-20 inset-x-0 px-2'>
      <div className="flex flex-wrap justify-center gap-3 shadow-lg  px-2 rounded-3xl">
        <button onClick={()=> setcolor("red")}
          className=" outline-none px-4 py-1 rounded-full text-amber-50 shadow-lg "
          style={{backgroundColor:'Red'}}
        >RED</button>
        <button onClick={()=> setcolor("green")}
          className=" outline-none px-4 py-1 rounded-full text-amber-50 shadow-lg "
          style={{backgroundColor:'Green'}}
        >Green</button>
        <button onClick={()=> setcolor("purple")}
          className=" outline-none px-4 py-1 rounded-full text-amber-50 shadow-lg "
          style={{backgroundColor:'Purple'}}
        >Purple</button>
        <button onClick={()=> setcolor("orange")}
          className=" outline-none px-4 py-1 rounded-full text-amber-50 shadow-lg "
          style={{backgroundColor:'orange'}}
        >orange</button>
        <button onClick={()=> setcolor("black")}
          className=" outline-none px-4 py-1 rounded-full text-amber-50 shadow-lg "
          style={{backgroundColor:'black'}}
        >black</button>
        <button onClick={()=> setcolor("brown")}
          className=" outline-none px-4 py-1 rounded-full text-amber-200 shadow-lg "
          style={{backgroundColor:'brown'}}
        >brown</button>
        <button onClick={()=> setcolor("yellow")}
          className=" outline-none px-4 py-1 rounded-full text-bl shadow-lg "
          style={{backgroundColor:'yellow'}}
        >yellow</button>
        <button onClick={()=> setcolor("blue")}
          className=" outline-none px-4 py-1 rounded-full text-amber-50 shadow-lg "
          style={{backgroundColor:'blue'}}
        >blue</button>
       
      </div>
    </div>
   </div>
  )
}

export default App
