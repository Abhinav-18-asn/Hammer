 
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; 
import CursorFollower from './CursorFollower';
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';


gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const headphoneRef = useRef(null);
  const earphoneRef = useRef(null);
  const speakerRef = useRef(null);
  const mainContainerRef = useRef(null); 
  const waveSvgRef = useRef(null);
  const scrollRef = useRef(null); 

  useEffect(() => {
    
    if (mainContainerRef.current) {
      scrollRef.current = new LocomotiveScroll({
        el: mainContainerRef.current,
        smooth: true,
        lerp: 0.08,
        getDirection: true,
    
      });

 
      scrollRef.current.on('scroll', ScrollTrigger.update); 

      ScrollTrigger.scrollerProxy(mainContainerRef.current, {
        scrollTop(value) {
          return arguments.length ?
            scrollRef.current.scrollTo(value, { duration: 0, disableLerp: true }) :
            scrollRef.current.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },

        pinType: mainContainerRef.current.style.transform ? 'transform' : 'fixed',
      });


      ScrollTrigger.refresh();
      scrollRef.current.update(); 
      const handleResize = () => {
        ScrollTrigger.refresh();
        scrollRef.current.update();
      };
      window.addEventListener('resize', handleResize);

    
      return () => {
        window.removeEventListener('resize', handleResize);
        if (scrollRef.current) {
          scrollRef.current.destroy(); 
        }
        ScrollTrigger.getAll().forEach(st => st.kill()); 
        ScrollTrigger.scrollerProxy(mainContainerRef.current, null); 
      };
    }
  }, []); 
  useEffect(() => {
   
    gsap.fromTo(
      [headphoneRef.current, earphoneRef.current, speakerRef.current],
      {
        opacity: 0,
        y: 100,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.2,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: mainContainerRef.current, 
          scroller: mainContainerRef.current, 
          start: 'top 70%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );

    
    [headphoneRef, earphoneRef, speakerRef].forEach(ref => {
      const card = ref.current;
      if (!card) return; 
      const img = card.querySelector('img');
      const h1 = card.querySelector('h1');

      gsap.set(img, { transformOrigin: 'center center' });

    
      let hoverTween, imgTween, h1Tween;

      const mouseEnterHandler = () => {
        hoverTween = gsap.to(card, {
          scale: 1.05,
          borderColor: '#fb923c',
          color: '#ea580c',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          duration: 0.3,
          ease: 'power2.out',
        });
        imgTween = gsap.to(img, {
          y: -15,
          rotation: 3,
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out',
        });
        h1Tween = gsap.to(h1, {
          y: -8,
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      const mouseLeaveHandler = () => {
        if (hoverTween) hoverTween.reverse(); 
        if (imgTween) imgTween.reverse();
        if (h1Tween) h1Tween.reverse();

        gsap.to(card, {
          scale: 1,
          borderColor: 'rgba(209, 213, 219, 0.8)',
          color: '#000',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(img, {
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(h1, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      const mouseMoveHandler = (e) => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const offsetX = (mouseX - centerX) * 0.08;
        const offsetY = (mouseY - centerY) * 0.08;

        gsap.to(img, {
          x: offsetX,
          y: offsetY,
          duration: 0.5,
          ease: 'power1.out',
        });
      };

      const mouseLeaveParallaxHandler = () => {
        gsap.to(img, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.5)',
        });
      };

      card.addEventListener('mouseenter', mouseEnterHandler);
      card.addEventListener('mouseleave', mouseLeaveHandler);
      card.addEventListener('mousemove', mouseMoveHandler);
      card.addEventListener('mouseleave', mouseLeaveParallaxHandler);

      return () => {
        card.removeEventListener('mouseenter', mouseEnterHandler);
        card.removeEventListener('mouseleave', mouseLeaveHandler);
        card.removeEventListener('mousemove', mouseMoveHandler);
        card.removeEventListener('mouseleave', mouseLeaveParallaxHandler);
      };
    });

  
    if (waveSvgRef.current) { 
      gsap.to(waveSvgRef.current.querySelector('path'), {
        attr: {
          d: 'M0,192L48,192C96,192,192,192,288,181.3C384,171,480,149,576,165.3C672,181,768,235,864,224C960,213,1056,139,1152,117.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        },
        scrollTrigger: {
          trigger: mainContainerRef.current,
          scroller: mainContainerRef.current, 
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });
    }

  }, []); 

  return (
    <div ref={mainContainerRef} data-scroll-container className="relative w-full min-h-screen flex flex-col overflow-hidden text-black p-4 pb-0 md:p-6 lg:p-8">
   
      <CursorFollower/> 
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-gray-50 z-[-1] opacity-90"></div>

  
      <Nav />

      <div className="flex flex-col md:flex-row items-center justify-evenly flex-grow px-4 py-10 gap-8 md:gap-10 lg:gap-12 xl:gap-16">
  
        <Link to='/headphones'
          ref={headphoneRef}
          className="flex flex-col items-center justify-center w-full md:w-1/3 lg:w-1/4 xl:w-1/5
                     border border-gray-200 rounded-xl bg-white/20 backdrop-blur-md
                     h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh] xl:h-[50vh]
                     shadow-lg transition-shadow duration-300 hover:shadow-2xl hover-target cursor-pointer"
          data-scroll data-scroll-speed="0.8"
        >
          <img
            src="/ph1.png"
            alt="Headphones"
            className="object-contain w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] xl:w-[280px]
                       -mb-10 sm:-mb-12 md:-mb-16 lg:-mb-20 xl:-mb-24"
          />
          <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mt-4">
            HEADPHONES
          </h1>
        </Link>

    
        <Link to='/earphones'
          ref={earphoneRef}
          className="flex flex-col items-center justify-center w-full md:w-1/3 lg:w-1/4 xl:w-1/5
                     border border-gray-200 rounded-xl bg-white/20 backdrop-blur-md
                     h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh] xl:h-[50vh]
                     shadow-lg transition-shadow duration-300 hover:shadow-2xl hover-target cursor-pointer"
          data-scroll data-scroll-speed="1"
        >
          <img
            src="/earphone.webp"
            alt="Earphones"
            className="object-contain w-[100px] sm:w-[140px] md:w-[160px] lg:w-[200px] xl:w-[240px]
                       mb-6 md:mt-10 lg:mt-12 xl:mt-16"
          />
          <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mt-4">
            EARPHONES
          </h1>
        </Link>

     
        <Link to='/speakers'
          ref={speakerRef}
          className="flex flex-col items-center justify-center w-full md:w-1/3 lg:w-1/4 xl:w-1/5
                     border border-gray-200 rounded-xl bg-white/20 backdrop-blur-md
                     h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh] xl:h-[50vh]
                     shadow-lg transition-shadow duration-300 hover:shadow-2xl hover-target cursor-pointer"
          data-scroll data-scroll-speed="1.2"
        >
          <img
            src="/Sp1.png"
            alt="Speakers"
            className="object-contain w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] xl:w-[280px]
                       scale-110 sm:scale-110 md:scale-110 lg:scale-110 xl:scale-110
                       mb-4 md:mt-6 lg:mt-8 xl:mt-10"
          />
          <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mt-4">
            SPEAKERS
          </h1>
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-0 overflow-hidden">
        <svg
          ref={waveSvgRef}
          className="w-full h-[100px] sm:h-[120px] md:h-[150px] lg:h-[180px] xl:h-[200px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#fb923c"
            fillOpacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,122.7C672,128,768,192,864,224C960,256,1056,256,1152,224C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 pt-4 pb-12" data-scroll data-scroll-speed="0.5">
        <Footer />
      </div>
    </div>
  );
};

export default Products;