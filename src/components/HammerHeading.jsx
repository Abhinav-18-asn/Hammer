// components/HammerHeading.jsx
"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const HammerHeading = () => {
  const hammerRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      hammerRef.current,
      { scale: 0.6, rotate: -5, opacity: 0, y: 80 },
      {
        scale: 1,
        rotate: 0,
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "back.out(1.7)",
        delay: 0.4,
      }
    )
  }, [])

  return (
    <div
  className="mt-24 md:mt-32 lg:mt-40 px-6 text-center relative z-0 max-w-7xl mx-auto"
  data-scroll-section
>
  <h2
    ref={hammerRef}
    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-orange-500 drop-shadow-lg leading-tight"
  >
    Hammer Your Sound!
  </h2>
  <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
    Unleash pure audio power. Designed to shake the silence.
  </p>
</div>


  )
}

export default HammerHeading
