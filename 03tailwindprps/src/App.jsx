import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"sahil",
    age:21
  }
  let myArry=[1,2,3,4,5]
  return (
    <>
      <h1 className='bg-green-200  text-black p-4 rounded-xl mb-1.5 '>Hello tailwaind</h1>
      <Card username="sahil"  someobj={myobj}  someArray={myArry}/>
      <Card username="verma" image="https://th.bing.com/th/id/OIP.P9Kzp2IPFCDSIyPCGMkP_wHaHa?rs=1&pid=ImgDetMain"/>
    </>
  )
}

export default App
