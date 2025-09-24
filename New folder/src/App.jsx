import React, {useState} from 'react'


const App = () => {
  const [Counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(Counter=>Counter+1)
  }

  const decrement = () => {
    setCounter(Counter=>Counter-1)
  }

  return (
    <div>
      <h2>Counter App</h2>
      <h4>{Counter}</h4>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default App