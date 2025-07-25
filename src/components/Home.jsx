import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import LocomotiveScroll from "locomotive-scroll"
import Nav from "./Nav"
import Hero from "./Hero"
import Marque from "./Marque"
import Footer from "./Footer"
import CursorFollower from "./CursorFollower"
import HammerHeading from "./HammerHeading"
import "locomotive-scroll/dist/locomotive-scroll.css"

gsap.registerPlugin(ScrollTrigger)

// Local Features component (optional to split into its own file)
const Features = () => {
  return (
    <section className="mt-32 px-6 text-center" data-scroll-section>
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-zinc-500">
        Why Choose Us?
      </h3>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-gray-300">
        <div className="p-6 bg-zinc-800 rounded-xl shadow-lg">
          <h4 className="text-xl font-bold mb-2 text-orange-400">Deep Bass</h4>
          <p>Engineered for powerful low frequencies.</p>
        </div>
        <div className="p-6 bg-zinc-800 rounded-xl shadow-lg">
          <h4 className="text-xl font-bold mb-2 text-orange-400">Noise Isolation</h4>
          <p>Block distractions and dive into sound.</p>
        </div>
        <div className="p-6 bg-zinc-800 rounded-xl shadow-lg">
          <h4 className="text-xl font-bold mb-2 text-orange-400">Elegant Design</h4>
          <p>Modern aesthetics fused with function.</p>
        </div>
      </div>
    </section>
  )
}

const Home = () => {
  const scrollRef = useRef(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current

    const locoScroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
    })

    ScrollTrigger.scrollerProxy(scrollContainer, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
      pinType: scrollContainer.style.transform ? "transform" : "fixed",
    })

    locoScroll.on("scroll", ScrollTrigger.update)
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update())
    ScrollTrigger.refresh()

    return () => {
      locoScroll.destroy()
      ScrollTrigger.removeEventListener("refresh", () => locoScroll.update())
    }
  }, [])

  return (
    <div ref={scrollRef} data-scroll-container className="text-white overflow-x-hidden">
    <Nav />
    <CursorFollower />
    
    <section data-scroll-section>
      <Hero />
    </section>
  
    <section data-scroll-section>
      <HammerHeading />
    </section>
  
    <section data-scroll-section>
      <Marque />
    </section>
  
    <section data-scroll-section>
      <Features />
    </section>
  
    <section data-scroll-section className="relative mt-32 flex justify-center">
      <Footer />
    </section>
  </div>
  
  )
}

export default Home
