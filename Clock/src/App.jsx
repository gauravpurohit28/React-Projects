import React, { useEffect, useState } from 'react'

const formatTime = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  const isAM = hours < 12
  const ampm = isAM ? "AM" : "PM"

  hours = hours % 12
  if (hours===0) hours = 12

  const pad = (n) => String(n).padStart(2,"0")

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`  

}

const App = () => {

  const [now, setNow]= useState(() => new Date())

  useEffect(()=>{
    const id = setTimeout(() => {
      setNow(new Date())
    }, 1000);

    return ()=> clearInterval(id)
  })

  return (
    <div>
      <h1>Digital Clock</h1>
      <h2>{formatTime(now)}</h2>
    </div>
  )
}

export default App