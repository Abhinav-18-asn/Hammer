import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
        //   behavior: 'smooth', // for smooth scroll
        });
      };
      
  return (
    <div className=' ftr min-w-[20rem] absolute w-full top-[35rem]'>
        <div>
            <h1 className='md:ml-[45%] md:-translate-x-[50%] fthm text-center text-5xl'>HAMMER</h1>
        </div>

        <div className='ftrc flex md:-left-[3rem] gap-5 absolute -left-7 top-[6rem] items-center'>
            {/*Links*/}
            <div className=' flex flex-col md:gap-10 gap-4 '>
                <div className='md:scale-150 ftrr1 links w-[2rem] h-[2rem] rounded-full border relative'><div  className='absolute left-1/2 -translate-x-[50%]  top-[50%] -translate-y-[50%]'><FaInstagram/></div></div>
                <div className='md:scale-150 ftrr2 links w-[2rem] text-center h-[2rem] rounded-full relative border'><div className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]'><FaXTwitter/></div></div>
                <div className='md:scale-150 ftrr3 links w-[2rem] text-center h-[2rem] rounded-full relative border'><div className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]'><FaLinkedinIn /></div></div>
            </div>
            {/*Footer*/}
            <div className='md:h-[12rem] md:w-[28rem] footRec overflow-hidden relative w-[322px] h-[129px] rounded-md border '>
                <div className='md:top-[1.5rem] footi text-zinc-800 flex flex-col gap-4 items-center absolute left-4 p-2'>
                    <h1 className='md:text-xl text-md '>HA<span style={{ color: "rgb(255, 83, 3)"}}>MM</span>ER</h1>
                    <div className='md:text-xl  text-[12px] footi1s leading-none text-left tracking-tight flex flex-col gap-2'>
                        <Link to='/about' onClick={scrollToTop} className=' hover:text-orange-500 transition-all duration-200'>About Us</Link>
                        <Link to='/careers' onClick={scrollToTop} className='hover:text-orange-500 transition-all duration-200'>Careers</Link>
                        <Link to='/contact' onClick={scrollToTop} className='hover:text-orange-500 transition-all duration-200'>Contact</Link>
                    </div>
                </div>
                <div className=' footi2 md:top-[1.5rem] text-zinc-800 flex flex-col gap-4 items-center absolute md:left-45 left-38 p-2'>
                    <h1 className='text-md md:text-xl'>SU<span style={{ color: "rgb(255, 83, 3)"}}>PP</span>ORT</h1>
                    <div className='text-left  md:text-xl md:text-center text-[12px] footi2s tracking-tight leading-none flex flex-col gap-2'>
                        <Link  to='/saleService' onClick={scrollToTop} className='hover:text-orange-500 transition-all duration-200'>After Sales Service</Link>
                        <Link to='/termService' onClick={scrollToTop} className='hover:text-orange-500 transition-all duration-200'>Terms Of Service</Link>
                        <Link to='/privacy' onClick={scrollToTop} className='hover:text-orange-500 transition-all duration-200'>Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer