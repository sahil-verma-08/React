import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Sahil from './Sahil.jsx'

                        // direct function also woks
function MyApp(){
return (
  <h1> haan ji londe</h1>
)

}
             // becouse we know that funtion difine as a object if we give obj?
 const ReacteElement={
 type : "a",
 props:{
 href : "https://google.com",
 target : "_blank"
   },
 children :"click me to visit google"
          }

  // but we chnge the syntax 
  const AnotherElement=(
    <a href="https://google.com" target="_blank">visit google</a>
  )
                                   //create element by React 

const Element= React.createElement (
  'a',
  {href:"https://google.com",target:"_blank"},

  " click me to visit google"
)

createRoot(document.getElementById('root')).render(
  
  // Element
  <>
  <App/>
  </>
  
       
   )

// createRoot(document.getElementById('root')).render(
 
//  ReacteElement
// )

// createRoot(document.getElementById('root')).render(
 
//   AnotherElement
//  )