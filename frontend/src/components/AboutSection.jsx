import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import myPic from '../assets/images/palash.png'; 
import SkillsScroller from "./Skills";
import { motion } from 'framer-motion';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: -300,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Intro animation
    gsap.fromTo(
      introRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: -400,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Stars animations
    starsRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const speed = 0.5 + Math.random() * 0.5; // Fixed Math.random

      gsap.to(star, {
        x: `${direction * (100 + index * 20)}`,
        y: `${direction * (-50 - index * 10)}`,
        rotation: direction * 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        },
      });
    });

    // Cleanup GSAP triggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  // Add element references to starsRef array
  const addToStars = (el) => {
    if (el && !starsRef.current.includes(el)) {
      starsRef.current.push(el);
    }
  };

  return (
    <section
    id="about"
      ref={sectionRef}
      className="h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50]"
    >
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            ref={addToStars}
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${10 + i * 3}px`,
              height: `${10 + i * 3}px`,
              backgroundColor: "white",
              opacity: 0.2 + Math.random() * 0.4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold sm:mb-16 text-center text-white opacity-0 "
        >
          𝒜𝒷𝑜𝓊𝓉 𝑀𝑒
        </h1>
      </div>

      <div
        ref={introRef}
        className="absolute lg:bottom-[-20rem] md:bottom-[-10rem] bottom-[-20rem] left-0 w-full flex md:flex-row flex-col justify-between lg:px-24 px-5 items-center opacity-0"
      >
        <div className="w-full md:w-2/3 flex flex-col items-center">
          <h3 className="text-sm md:text-2xl font-bold text-purple-200 z-50 lg:max-w-[45rem] max-w-[27rem] tracking-wider md:mt-20 text-center mt-0">
            Hi, I’m Palash — a full stack developer who loves building smooth, responsive, and animated web apps. I'm always exploring new tools, learning, and pushing creative boundaries to craft better user experiences.
          </h3>

          <div className="w-full flex flex-col items-center">
            <h1 className="text-1.5xl mt-12 md:text-3xl font-bold mb-6 text-center text-white justify-center ">
              𝑀𝓎 𝒮𝓀𝒾𝓁𝓁𝓈 𝒜𝓇𝑒
            </h1>
            <SkillsScroller />
            <div className="flex justify-center w-full">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full max-w-[250px] mt-6 px-4 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-purple-500 text-white font-bold text-center mx-auto"
                download="Palash_CV.pdf"
                href="#"
              >
                Download CV
              </motion.a>
            </div>
          </div>
        </div>

        <div className="relative lg:h-[35rem] md:h-[20rem] h-[1px] rounded-full md:block">
          <img
            src={myPic}
            alt="Portrait"
            className="w-full h-full object-contain brightness-70 saturate-100 drop-shadow-xl mask-image-blend-all"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
