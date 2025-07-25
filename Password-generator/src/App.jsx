import { useCallback, useEffect, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const[numberAllowed, setNumberAllowed] = useState(false)
  const[charAllowed, setCharAllowed] = useState(false)
  const[password, setPassword] = useState('')

  const generatepassword = useCallback(()=>{
    let pass=''
    let str= 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    if(numberAllowed) str += '0123456789'
    if(charAllowed) str += '!@#$%^&*()_+'

    for(let i=0; i<length; i++){
      const char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const CopyPasswordtoClipboard = () => {
    window.navigator.clipboard.writeText(password)
    if(CopyPasswordtoClipboard){
    alert(`password copied ${password}`);
    }
  }


  useEffect(()=>{
    generatepassword()
  },[length, numberAllowed, charAllowed])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3 bg-white'
        placeholder='Password'
        
      />
      <button
      onClick={CopyPasswordtoClipboard}
      className='outline-none bg-value-700 text-white px-3 py-0.5 shrink-0 bg-blue-700 cursor-pointer'>
        copy
      </button>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
        type='range'
        min={6}
        max={100} 
        className='cursor-pointer'
        onChange={(e)=> setLength(e.target.value)}
        name='' id='' />
        <label htmlFor="length">Length: {length}</label>
      <div className='flex items-center gap-x-1'>
        <input
        type='checkbox' 
        defaultChecked={numberAllowed}
        onChange={()=>{
          setNumberAllowed((prev)=> !prev)
        }}
        name=''
        id=''/>
        <label htmlFor='numbers'>Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
        type='checkbox' 
        defaultChecked={charAllowed}
        onChange={()=>{
          setCharAllowed((prev)=> !prev)
        }}
        name=''
        id=''/>
        <label htmlFor='charinput'>Characters</label>
      </div>
      </div>
    </div>
  )
}

export default App
