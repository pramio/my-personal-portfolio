import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlShareAlt } from "react-icons/sl";
import pj1 from '../assets/images/projects/pj1.jpg';
import pj2 from '../assets/images/projects/pj2.png'


gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);
  const horizontalRef = useRef(null);
  const triggerRef = useRef(null);

  const projectImage = [
    {
      id: 1,
      title: "Medimeet Appointments",
      imgSrc: pj1,
    },
    {
      id: 2,
      title: "ChatBridge",
      imgSrc: pj1,
    },
    {
      id: 3,
      title: "Shophefy",
      imgSrc: pj1,
    },
    {
      id: 4,
      title: "Mozito Wine",
      imgSrc: pj2,
    },
  ];

  useEffect(() => {
    // Title reveal
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Title line
    gsap.fromTo(
      titleLineRef.current,
      { width: "0%", opacity: 0 },
      {
        width: "100%",
        opacity: 1,
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Section entrance
    gsap.fromTo(
      triggerRef.current,
      { y: 100, rotateX: 20, opacity: 0 },
      {
        y: 0,
        rotateX: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Parallax effect on background
    gsap.fromTo(
      sectionRef.current,
      { backgroundPosition: "50% 0%" },
      {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Horizontal scroll
    const horizontalScroll = gsap.to(".panel", {
      xPercent: -100 * (projectImage.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${horizontalRef.current.offsetWidth}`,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (projectImage.length - 1),
          duration: { min: 0.2, max: 0.3 },
          delay: 0.1,
        },
        invalidateOnRefresh: true,
      },
    });

    // Panel animations
    document.querySelectorAll(".panel").forEach((panel) => {
      const image = panel.querySelector(".project-image");
      const imageTitle = panel.querySelector(".project-title");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          containerAnimation: horizontalScroll,
          start: "left right",
          end: "right left",
          scrub: true,
        },
      });

      tl.fromTo(image, { scale: 0, rotate: -20 }, { scale: 1, rotate: 0, duration: 0.5 });

      if (imageTitle) {
        tl.fromTo(
          imageTitle,
          { y: 30 },
          { y: -100, duration: 0.3 },
          0.2
        );
      }
    });
  }, [projectImage.length]);

  return (
    <section
      ref={sectionRef}
      id="projects horizontal-section"
      className="relative py-20 bg-[#f6f6f6] overflow-hidden"
    >
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-4"
        >
          𝐹𝑒𝒶𝓉𝓊𝓇𝑒𝒹 𝒫𝓇𝑜𝒿𝑒𝒸𝓉𝓈
        </h2>
        <div
          ref={titleLineRef}
          className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0"
        />
      </div>

      <div ref={triggerRef} className="overflow-hidden opacity-0">
        <div
          ref={horizontalRef}
          className="horizontal-section flex md:w-[400%] w-[420%]"
        >
          {projectImage.map((project) => (
            <div
              key={project.id}
              className="panel relative flex items-center justify-center w-screen"
            >
              <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-12">
                <img
                  className="project-image max-w-full max-h-full rounded-2xl object-cover"
                  src={project.imgSrc}
                  alt="project"
                />
                <h2 className="project-title flex items-center gap-3 md:text-2xl text-sm md:font-bold text-black mt-6 z-50 text-nowrap hover:text-gray-400 transition-colors duration-300 cursor-pointer">
                  {project.title}
                  <SlShareAlt />
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
