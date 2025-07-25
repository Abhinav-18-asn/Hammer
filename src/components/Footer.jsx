import React from 'react'
import { FaInstagram, FaXTwitter,FaYoutube} from "react-icons/fa6"
import { Link } from 'react-router-dom'

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0 })

  return (
    <footer className='w-ful text-zinc-800 py-10 px-4 md:px-20'>
      {/* Logo */}
      <div className='text-center mb-10'>
        <h1 className='text-4xl font-bold'>HAMMER</h1>
      </div>

      {/* Footer Content */}
      <div className='flex flex-col md:flex-row justify-between gap-10'>

        {/* Social Icons */}
        <div className='flex justify-center md:justify-start gap-6'>
          <div className='w-12 md:w-12 md:h-12 h-12 lg:w-12 lg:h-12 border rounded-full flex items-center justify-center hover:text-orange-500'>
          <a href="https://www.instagram.com/hammerlifestyle_/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
          </a>   
          </div>
          <div className='w-12 md:w-12 md:h-12 h-12 lg:w-12 lg:h-12 border rounded-full flex items-center justify-center hover:text-orange-500'>
            <a href="https://x.com/HammerLifestyle" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
            </a>
          </div>
          <div className='w-12 md:w-12 md:h-12 lg:w-12 lg:h-12 h-12  border rounded-full flex items-center justify-center hover:text-orange-500'>
           <a href="https://www.youtube.com/channel/UC_mxCd3tf3VshVQiSuALgGQ/videos?view_as=subscriber"  target="_blank" rel="noopener noreferrer">
            <FaYoutube />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className='flex flex-col md:flex-row gap-10 text-center md:text-left justify-center'>

          {/* Section 1 */}
          <div>
            <h2 className='text-xl font-semibold mb-2'>
              HA<span className='text-orange-600'>MM</span>ER
            </h2>
            <ul className='space-y-2 text-sm'>
              <li><Link to='/about' onClick={scrollToTop} className='hover:text-orange-500'>About Us</Link></li>
              <li><Link to='/careers' onClick={scrollToTop} className='hover:text-orange-500'>Careers</Link></li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className='text-xl font-semibold mb-2'>
              SU<span className='text-orange-600'>PP</span>ORT
            </h2>
            <ul className='space-y-2 text-sm'>
              <li><Link to='/saleService' onClick={scrollToTop} className='hover:text-orange-500'>After Sales Service</Link></li>
              <li><Link to='/termService' onClick={scrollToTop} className='hover:text-orange-500'>Terms Of Service</Link></li>
              <li><Link to='/privacy' onClick={scrollToTop} className='hover:text-orange-500'>Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
