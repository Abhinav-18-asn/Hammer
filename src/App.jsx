import React, { useState } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'


const App = () => {
  return (
     <div className='overflow-hidden content min-h-[calc(142vh-64px)] md:min-h-[calc(119vh)] border relative p-2'>
      <Nav/>
      <Home/>
    </div>
  )
}

export default App
