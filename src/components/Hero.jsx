import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: false,
        },
      }
    )
  }, [])

  return (
    <section
      data-scroll-section
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative"
    >
      <h1
        ref={heroRef}
        className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-tight text-zinc-600"
      >
        Redefine Your <span className="text-orange-600">Audio</span> Experience
      </h1>
      <p className="mt-6 max-w-2xl text-base md:text-lg lg:text-xl text-gray-600">
        Discover immersive sound with precision-crafted headphones. Built for audiophiles and casual listeners alike.
      </p>
    </section>
  )
  
}

export default Hero
