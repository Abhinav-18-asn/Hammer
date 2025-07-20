import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { IconContext } from "react-icons";
import { CiUser } from "react-icons/ci";
const Nav = () => {
  return (
    <div className='flex w-full items-center justify-between border lg:p-6  md:p-4 p-2 rounded-md border-zinc-800 text-zinc-800'>
        <div className='w-12 md:w-24 lg:w-24'>
          <img className='-mr-2' src="https://hammeronline.in/cdn/shop/files/hAMMER_lOGO_GOOOGLE.png?v=1641298293&width=140" alt="" />
        </div>
        <div className='flex text-[9px] lg:text-xl md:text-xl md:gap-6 md:font-thin gap-3 items-center'>
          <h1>Products</h1>
          <h1>About Us</h1>
        <IconContext.Provider value={{size:'1.5em'}}>
                   <CiShoppingCart />
                   <CiUser />
        </IconContext.Provider>
        </div>
    </div>
  )
}

export default Nav