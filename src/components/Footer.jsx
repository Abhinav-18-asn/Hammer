import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className= 'ftr absolute w-full top-[42rem]'>
        <div>
            <h1 className='text-center text-5xl'>HAMMER</h1>
        </div>

        <div className='ftrc flex gap-5 absolute -left-6 top-[6rem] items-center'>
            {/*Links*/}
            <div className=' flex flex-col gap-4 '>
                <div className='ftrr1 links w-[2rem] h-[2rem] rounded-full border'><div><FaInstagram className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]'/></div></div>
                <div className='ftrr2 links w-[2rem] text-center h-[2rem] rounded-full border'><div><FaXTwitter className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]'/></div></div>
                <div className='ftrr3 links w-[2rem] text-center h-[2rem] rounded-full border'><div><FaLinkedinIn className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]'/></div></div>
            </div>
            {/*Footer*/}
            <div className='footRec  w-[320px] h-[128px] border '>
                <div className='footi text-zinc-800 flex flex-col gap-4 items-center absolute left-6 p-2'>
                    <h1 className='text-md'>HA<span style={{ color: "rgb(255, 83, 3)"}}>MM</span>ER</h1>
                    <div className='text-[12px] footi1s leading-none tracking-tight flex flex-col gap-2'>
                        <h1>About Us</h1>
                        <h1>Careers</h1>
                        <h1>Contact</h1>
                    </div>
                </div>
                <div className='footi2 text-zinc-800 flex flex-col gap-4 items-center absolute left-40 p-2'>
                    <h1 className='text-md'>SU<span style={{ color: "rgb(255, 83, 3)"}}>PP</span>ORT</h1>
                    <div className='text-[12px] footi2s tracking-tight leading-none flex flex-col gap-2'>
                        <h1>After Sales Service</h1>
                        <h1>Terms Of Service</h1>
                        <h1>Privacy Policy</h1>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer