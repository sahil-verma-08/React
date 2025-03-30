import { useState ,useCallback,useEffect, useRef} from 'react'


function App() {
  const [length, setlength] = useState(6)
  const [numberAllowed, setNumberAllowed]=useState(false)
  const [charAllowed, setcharAllowed]=useState(false)
  const[Password,setPassword]=useState("")
                                               //useREF hook
  const passwordRef=useRef(null)

                                               // funtion for genrate a password
  const PasswordGenretor=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   if (numberAllowed) str+="0123456789"
   if (charAllowed ) str+="!@#$%^&*()`[]{}_=+"

   for(let i=1;i<=length;i++ ){
    let char =Math.floor(Math.random()*str.length+1)
   
     pass +=str.charAt(char)
   }
   setPassword(pass)                                     
  },[length,numberAllowed,charAllowed,setPassword])           //use for optimize the vlaue (save in chache memmory)
                        
                                            // for copy button
  const copypassToclipboard=useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)                 //( select in a range)
    window.navigator.clipboard.writeText(Password)
  },[Password])

                                
 useEffect(()=>{
          PasswordGenretor()
 },[length,numberAllowed,charAllowed,PasswordGenretor])           //for re run after change
  
  return (
    <>
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 align-middle">
    <h1 className='text-white text-center'>password genrator</h1> 
     <div className="flex shadow rounded-lg overflow-hidden md-4">
      <input type="text"
      value={Password}
      className="outline-none  bg-white w-full py-1 px-3"  
      placeholder='Password'
      readOnly
      ref={passwordRef}
      />
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      onClick={copypassToclipboard}>copy</button>
     </div>
                                                 {/* //length cursor */}
<div className="flex text-sm gap-x-2  py-5">
    <div className="flex items-center gap-x-1">
      <input 
      type='range'
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>{setlength(e.target.value)}}
      />
      <label>length: {length}</label>
    </div>
                                                {/* number checkbox  */}
    <div className="flex items-center gap-x-1">
      <input
      type='checkbox'
      defaultChecked={numberAllowed}
      id="numberInput"
      onChange={()=>{
        setNumberAllowed((prev)=>!prev)
      }}/>
      <label htmlFor='numberInput'>Numbers</label>
    </div>
                                                  {/* character button  */}
    <div className="flex items-center gap-x-1">
      <input
      type='checkbox'
      defaultChecked={charAllowed}
      id="charInput"
      onChange={()=>{
        setNumberAllowed((prev)=>!prev)
      }}/>
      <label htmlFor='charInput'>special character</label>
    </div>
  </div>
  </div>


       
    </>
  )
}

export default App
