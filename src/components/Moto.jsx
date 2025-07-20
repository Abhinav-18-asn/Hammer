import React from 'react'
import {motion} from 'framer-motion'
import Hero from './Hero'
const Moto = () => {
  return (
    <div className='w-[20rem]  absolute left-1/2 top-[27%] -translate-x-[50%] -translate-y-[200%]'>
      <h1 className='moto text-2xl text-center font-bold '>SO<span className='span'>UND T</span>HAT SPEAKS YOUR SOUL.</h1>
      <Hero/>
    </div>
  )
}

export default Moto