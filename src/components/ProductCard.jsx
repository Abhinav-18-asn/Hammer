import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import CursorFollower from './CursorFollower'

gsap.registerPlugin(ScrollTrigger)

const ProductCard = ({ name, image, category, modelId, price }) => {
  const cardRef = useRef()

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
        },
      }
    )
  }, [])

  return (
    <Link to={`/products/${category}/${modelId}`}>
      <CursorFollower />
      <div
        ref={cardRef}
        className="bg-neutral-400 p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
      >
        <div className="w-full h-40 flex justify-center items-center mb-4">
          <img
            src={image}
            alt={name}
            className="max-h-full object-contain"
          />
        </div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <h2 className="text-xl font-semibold">{price}</h2>
      </div>
    </Link>
  )
}

export default ProductCard
