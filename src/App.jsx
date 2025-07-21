import React, { useState } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  return (
    <div className='content relative'>
      <Nav/>
      <Home/>
    </div>
  )
}

export default App