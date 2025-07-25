// components/SplitLanding.jsx
import { Link } from 'react-router-dom'
import CursorFollower from './CursorFollower'

const SplitLanding = () => {
  return (
    <div className="h-screen w-full flex text-white font-sans overflow-hidden">
        <CursorFollower/>
      <Link
        to="/headphones"
        className="w-1/3 bg-black flex items-center justify-center hover:bg-gray-900 transition-all duration-500"
      >
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide">Headphones</h1>
      </Link>

      <Link
        to="/earphones"
        className="w-1/3 bg-neutral-900 flex items-center justify-center hover:bg-neutral-800 transition-all duration-500"
      >
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide">Earphones</h1>
      </Link>

      <Link
        to="/speakers"
        className="w-1/3 bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-all duration-500"
      >
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide">Speakers</h1>
      </Link>
    </div>
  )
}

export default SplitLanding
