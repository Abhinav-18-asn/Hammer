import { Link } from "react-router-dom"
import { CiShoppingCart, CiUser } from "react-icons/ci"
import { IconContext } from "react-icons"

const Navbar = () => (
  <nav className="nav fixed top-0 left-0 z-[9999] backdrop-blur-md flex w-full items-center justify-between  lg:p-6 md:p-4 p-2 rounded-md border-zinc-800 text-zinc-800">
    <Link to='/' className=" z-[20]">
      <img
        className="-mr-2 w-12 md:w-24 lg:w-24"
        src="https://hammeronline.in/cdn/shop/files/hAMMER_lOGO_GOOOGLE.png?v=1641298293&width=140"
        alt=""
      />
    </Link>
    <div className="flex text-[9px] lg:text-xl md:text-xl md:gap-6 md:font-thin z-[2] gap-3 items-center">
      <Link to='/products' className="hover:text-orange-500 transition-all duration-200">Products</Link>
      <Link to='/about' className="hover:text-orange-500 transition-all duration-200">About Us</Link>
      <IconContext.Provider value={{ size: "1.5em" }}>
        <CiShoppingCart />
        <Link to='/login'><CiUser /></Link>
      </IconContext.Provider>
    </div>
  </nav>
)

export default Navbar
