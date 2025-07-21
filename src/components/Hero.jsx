import React from 'react'
import Footer from './Footer'

const Hero = () => {
  return (
    <div className='relative '>
{/*Earphones */}
     <div className='ehs  w-[20rem] h-[20rem] border-3 absolute top-[5.7rem] rounded-full border-zinc-700'>
        <div className=' w-full h-full'>
              <div className='earHero w-[10rem] h-[10rem] rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] border-zinc-700 border '>
                 {/*image anime*/}
        <img src="/earphones.png" alt="" className='ring1 absolute w-[5rem] left-[50%] -top-[7rem] -translate-x-[50%]' />
                  <p className='ring1T absolute text-center left-[50%] -translate-x-[50%] top-10 text-sm w-full px-2'>Crafted for sound. Designed for you.</p>
              </div>
        </div>
     </div>
    {/*Headphones*/}
  
        <div className=' w-full h-full'>
              <div className='headHero w-[10rem] h-[10rem] rounded-full absolute -bottom-[25.7rem] left-[50%] -translate-x-[50%] -translate-y-[50%]  border'>
                 {/*image anime*/}
        <img src="/Headphone.png" alt="" className='ring2 absolute w-[8rem] scale-70 left-[58%] top-[4rem] translate-x-[50%]' />
                  <p className='ring2T absolute text-center left-[50%] -translate-x-[50%] top-8 text-sm w-full px-2 leading-tight'>Premium Wireless Headphones with Noise Cancellation</p>
              </div>
        </div>
    
    {/*Speakers*/}
  
        <div className=' w-full h-full'>
              <div className='speakHero w-[10rem] h-[10rem] rounded-full absolute top-[15.7rem] left-[50%] -translate-x-[50%] -translate-y-[50%] border-zinc-700 border'>
                 {/*image anime*/}
        <img src="/Speaker.png" alt="" className='ring3 absolute w-[3rem] -left-[4rem] top-[5rem] rotate-90 -translate-x-[50%]' />
                  <p className='ring3T absolute text-center left-[50%] -translate-x-[50%] top-10 text-sm w-full px-2'>Fill your room with immersive sound.

</p>
              </div>
        </div>

   <Footer/>
    </div>
  )
}

export default Hero