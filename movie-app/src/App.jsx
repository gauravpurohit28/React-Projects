import React, { useState } from 'react'
import Search from './components/Search'

const App = () => {

  const [SearchTerm, setSearchTerm] = useState('');
  return (
    <main>
      <div className='pattern' />
      <div className='wrapper'>
        <header>
          <img src='./hero-img.png' alt='Hero Baner'></img>
          <h1>Find <span className='text-gradient'>Movies </span>You'll Enjoy Without The Hassle</h1>
        </header>
        <Search SearchTerm={SearchTerm} setSearchTerm={setSearchTerm}/>

      </div>
    </main>
  )
}

export default App