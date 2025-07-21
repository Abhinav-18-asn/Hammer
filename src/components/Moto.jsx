import React from 'react'
import Hero from './Hero'
import Marque from './Marque'
const Moto = () => {
  return (
    <div className='motoCont w-[20rem]  absolute left-1/2 top-[75%] -translate-x-[50%] -translate-y-[200%]'>
      <h1 className='relative moto text-2xl text-center font-bold '>SO<span className='span'>UND T</span>HAT SPEAKS YOUR SOUL.</h1>
      {/*Marquee */}
      <Marque/>
      <Hero/>
    </div>
  )
}

export default Moto