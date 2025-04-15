import { useState } from 'react'
import Input from './component/Input'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setamount] = useState(0)
  const[from,setfrom]=useState('usd')
  const[to,setto]=useState('inr')
  const [convertedAmount,setConvertedAmount]=useState(0)
 const currencyINfo=useCurrencyInfo(from)
 const options=Object.keys(currencyINfo)

 const swap=()=>{
  setfrom(to)
  setto(from)
  setConvertedAmount(amount)
  setamount(convertedAmount)
 }

 const consvert=()=>{setConvertedAmount(amount*currencyINfo[to])}


  return (
    <div className='w-full h-screen flex flex-wrap justify-center
    items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`}}>
    
     <div className='"w-full'>
      <div className="w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5
      backdrop-blue-sm bg-white/30 "></div>

      <form onSubmit={(e)=>{
        e.preventDefault();
        consvert();
        }}>
          <div className="w-full mb-1">
            <Input 
            label="From"
            amount={amount}
            currencyOption={options}
            oncurrencyChange={(currency)=>{
                  setamount(amount)
            }}/>

          </div>
        </form>
     </div>

    </div>
  )
}

export default App
