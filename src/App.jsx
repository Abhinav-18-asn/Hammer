import React, { useState } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'


const App = () => {
  return (
    <div className='content relative'>
      <Nav/>
      <Home/>
    </div>
  )
}

export default App
