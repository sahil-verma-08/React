import React,{useId} from 'react'

function Input(
  { label,
    amount,
    onAmountchange,
    oncurrencyChange,
    currencyOption=[],
    seletCurrency="usd", 
    amountDisable= false,
    currencyDisable= false,
   className='',
  }
) {
   const amountInputId= useId()
  return (
    <div className={`bg-white p-5 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
      <label htmlFor={amountInputId} className='text-black mb-3 inline-block'>
      {label}</label>
      <input 
      id={amountInputId}
      className='"outline-none w-full bg-transparent py-1.5'
      type="number"
      placeholder='Amount'
      disabled={amountDisable}
      value={amount}
      onChange={(e)=>onAmountchange && onAmountchange(Number(e.target.value))}
      />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
      <p className='text-black mb-2 w-full'>Currency Type</p>
      <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
      value={seletCurrency}
      onChange={(e)=>oncurrencyChange && oncurrencyChange(e.target.value)}
      disabled={currencyDisable}>
        
       {currencyOption.map((currency)=>(
        <option key={currency} value={currency}>
           usd                              {/*     remmember the key in react when loop is using */}
        </option>
       ))}
        </select>
         </div>
    </div>
  )
}

export default Input