import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  const splineWrapperRef = useRef(null);

  useEffect(() => {
  if (!splineWrapperRef.current) return;

  const tl = gsap.timeline();

  // Entrance: fade, slide up, rotate
  tl.fromTo(
    splineWrapperRef.current,
    { opacity: 0, y: 120, scale: 0.85, rotate: -22 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      duration: 3,
      ease: 'power4.out',
      delay: 0.5,
      onComplete: () => {
        // Subtle floating starts after entrance is complete
        gsap.to(splineWrapperRef.current, {
          y: 18,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
        // Gentle "tilt" loop for extra dynamic effect
        gsap.to(splineWrapperRef.current, {
          rotate: 8,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    }
  );
}, []);


  return (
    <section id='home' className="min-h-screen bg-gradient-to-b from-violet-900 to-black flex flex-col xl:flex-row items-center justify-between lg:px-24 px-6 relative overflow-visible">
      {/* Left Section - with framer-motion animations */}
      <div className="z-40 text-center xl:text-left mt-20 xl:mt-0 xl:mb-0 mb-10 max-w-3xl mx-auto xl:mx-0 px-4 xl:px-0">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
          }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          𝐵𝓊𝒾𝓁𝒹𝒾𝓃𝑔 𝐹𝒶𝓈𝓉
        <br /> 𝑅𝑒𝓁𝒾𝒶𝒷𝓁𝑒 𝑅𝑒𝓈𝓊𝓁𝓉𝓈
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 25,
            delay: 2,
            duration: 1.5,
          }}
          className="text-lg md:text-xl lg:text-2xl text-purple-200 max-w-2xl mx-auto xl:mx-0"
        >
          I deliver robust, production-ready websites and web apps with speed and precision.
          Every project is backed by clean code, clear communication, and a commitment to
          getting it done, on time, every time.
        </motion.p>
      </div>

      {/* Right Section - 3D Model with GSAP animations */}
      <div
        className="
          w-full flex items-end justify-center
          xl:absolute xl:right-[-4%] top-0
          xl:w-[58%]
          min-h-[350px]
          h-[390px] sm:h-[500px] md:h-[680px] xl:h-[800px]
          z-10 pt-2 pb-5 sm:pt-10
          overflow-visible
        "
      >
        <div
          ref={splineWrapperRef}
          className="
            w-full h-full
            max-w-[600px] sm:max-w-[520px] md:max-w-[700px] xl:max-w-[800px]
            scale-[1.10] sm:scale-100 md:scale-[0.9] xl:scale-100
            transition-transform duration-300
          "
        >
          <Spline scene="https://prod.spline.design/FRIB4xp3eOAJgkBN/scene.splinecode" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


  {/* brain <Spline scene="https://prod.spline.design/uCVn-5P9DJSSychI/scene.splinecode" /> robot <Spline scene="https://prod.spline.design/C1jXPekDJ5mpJyyz/scene.splinecode" />*/}