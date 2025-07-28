import { useState } from 'react'
import StockPrice from './component/StockPrice'

function App() {

    const [tickers,setTickers] = useState(["NVDA", "MSFT","GOOGL"]);
    const [input,setInput] = useState("");

    const addTicker = () =>{
      const value = input.trim().toUpperCase()
      if(val && !tickers.includes(value)){
          setTickers([...tickers, value]);
      }    
    };
    return(

    <>
    <div className='flex flex-wrap justify-center gap-6 w-full max-w-4xl'>
      {tickers.map((ticker)=>(
        <StockPrice key={ticker} ticker={ticker}/>

      ))}

      
    </div>
      
    </>
)}

export default App
