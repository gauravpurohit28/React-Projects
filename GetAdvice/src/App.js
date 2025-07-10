import { useEffect, useState } from "react";


export default function App() {
  const [advice, setAdvice] = useState("")
  const [count, setCount] = useState(0)
  useEffect(function() {
    getadvice()
  },[])

  async function getadvice() {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    setAdvice(data.slip.advice)
    setCount(count=>count+1)
  }

  return (
    <>
    <h1>{advice}</h1>
    <button onClick={getadvice}> Get Advice</button>
    <Message count={count}/>
    </>
  );
}

function Message(props){
  return(
  <p>you've generated <strong>{props.count}</strong> number of advices</p>
  )
}
