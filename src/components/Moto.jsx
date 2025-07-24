import React from 'react'
import Hero from './Hero'
import Marque from './Marque'
const Moto = () => {
  return (
    <div className='relative'>
    <div className='motoCont w-[20rem] md:top-[6rem]  absolute left-1/2 top-[50%] -translate-x-[50%] translate-y-[50%]'>
      <h1 className='relative moto  md:text-3xl text-2xl text-center font-bold '>SO<span className='span'>UND T</span>HAT SPEAKS YOUR SOUL.</h1>
      {/*Marquee */}
      <Marque/>
      <Hero/>
    </div>
    </div>
  )
}

export default Moto