import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const ContactSection = () => {
  const circleRef = useRef(null);
  const sectionRef = useRef(null);
  const initialTextRef = useRef(null);  // fixed name
  const finalTextRef = useRef(null);    // fixed name

  useEffect(() => {
    // Register Gsap plugins
    gsap.registerPlugin(ScrollTrigger);

    // Clean up existing ScrollTriggers related to this section
    const cleanup = () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === sectionRef.current) {
          st.kill(true);
        }
      });
    };

    cleanup();

    // Set initial states 
    gsap.set(circleRef.current, { scale: 1, backgroundColor: "white" });
    gsap.set(initialTextRef.current, { opacity: 1 });
    gsap.set(finalTextRef.current, { opacity: 0 });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
        fastScrollEnd: true,
        preventOverlaps: true,
        invalidateOnRefresh: true,
      },
    });

    // Initial state to mid zoom
    tl.to(
      circleRef.current,
      {
        scale: 5,
        backgroundColor: "#9333EA",
        ease: "power1.inOut",
        duration: 0.5,
      },
      0
    );

    // Fade out initial text
    tl.to(
      initialTextRef.current,
      {
        opacity: 0,
        ease: "power1.out",
        duration: 0.2,
      },
      0.1
    );

    // Mid zoom to final state
    tl.to(
      circleRef.current,
      {
        scale: 17,
        backgroundColor: "#E5E5FF", // fixed typo E5O5FF → E5E5FF
        boxShadow: "0 0 50px 20px rgba(233,213,255,0.3)",
        ease: "power2.inOut",
        duration: 0.5,
      },
      0.5
    );

    // Final text fade in
    tl.to(
      finalTextRef.current,
      {
        opacity: 1,
        ease: "power2.in",
        duration: 0.2,
      },
      0.7
    );
  }, []);

  return (
    <section
    id="contact"
      ref={sectionRef}
      className='flex items-center justify-center bg-black relative'
      style={{ overscrollBehavior: "none" }}
    >
      <div
        ref={circleRef}
        className='w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full flex items-center justify-center relative transition-shadow duration-1000 shadow-violet-300/50 shadow-lg bg-gradient-to-r from-violet-400 to-pink-100'
      >
        <p
          ref={initialTextRef}
          className="text-black font-bold text-base sm:text-lg md:text-xl absolute inset-0 flex items-center text-center"
        >
          SCROLL DOWN
        </p>

        <div
          ref={finalTextRef}
          className="text-center relative flex flex-col items-center justify-center opacity-0"
        >
          <h1 className=" text-black md:w-[10rem] w-[10rem] lg:scale-[0.4] sm:scale-[0.25] scale-[0.07] md:font-bold text-sm sm:text-base leading-none mb-5">
            𝒟𝑒𝓈𝒾𝑔𝓃𝒾𝓃𝑔 𝓉𝒽𝑒 𝒲𝑒𝒷,  𝐵𝑒𝒶𝓊𝓉𝒾𝒻𝓊𝓁𝓁𝓎
          </h1>

          <p className="text-black lg:w-[40rem] w-[20rem] absolute sm:mt-3 mt-1 md:scale-[0.1] scale-[0.068] ">
               I’m Palash Ch Sarkar, a full-stack developer skilled in building modern, responsive, and dynamic web applications.
With expertise in React, Tailwind CSS, Node.js, and animation tools like GSAP, I create seamless user experiences from front to back.
          </p>

          <button className="px-10 py-2 rounded-xl bg-black hover:bg-white hover:text-black transition-all duration-500 scale-[0.1] absolute sm:mt-9 mt-7 text-nowrap">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
