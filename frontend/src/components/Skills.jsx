import { useRef, useEffect, useState } from 'react';

const skills = [
  { src: '/src/assets/images/skills/reactjs.png', name: 'React' },
  { src: '/src/assets/images/skills/nodejs.png', name: 'Node.js' },
  { src: '/src/assets/images/skills/mongodb.png', name: 'MongoDB' },
  { src: '/src/assets/images/skills/express.png', name: 'Express' },
  { src: '/src/assets/images/skills/tailwind.png', name: 'Tailwind    CSS' },
  { src: '/src/assets/images/skills/javascript.png', name: 'JavaScript' },
  { src: '/src/assets/images/skills/sql.png', name: 'SQL' },
  { src: '/src/assets/images/skills/python.png', name: 'Python' },
  { src: '/src/assets/images/skills/java.png', name: 'Java' },
  { src: '/src/assets/images/skills/c++.png', name: 'C++' },
  { src: '/src/assets/images/skills/git.png', name: 'Git' },
  { src: '/src/assets/images/skills/c.png', name: 'C' },
  { src: '/src/assets/images/skills/kali.png', name: 'Kali Linux' },
  { src: '/src/assets/images/skills/threejs.svg', name: 'ThreeJs' },
  { src: '/src/assets/images/skills/figma.png', name: 'Figma' },
  { src: '/src/assets/images/skills/aws.png', name: 'AWS' },
  { src: '/src/assets/images/skills/docker.png', name: 'Docker' },
  { src: '/src/assets/images/skills/redux.png', name: 'Redux' }
];

const SkillsScroller = () => {
  const scrollerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // 3D hover effect same as before
  const handleMouseMove = (e) => {
    const box = e.currentTarget;
    const { left, top, width, height } = box.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 8;
    const y = (e.clientY - top - height / 2) / 8;
    box.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) scale(1.1)`;
    box.style.boxShadow = `${-x}px ${-y}px 20px rgba(168, 85, 247, 0.4)`;
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
    e.currentTarget.style.boxShadow = 'none';
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Clone children once after initial render to create seamless loop
    const children = Array.from(scroller.children);
    children.forEach(child => {
      const clone = child.cloneNode(true);
      scroller.appendChild(clone);
    });

    let animationFrameId;
    let scrollLeft = 0;
    const scrollSpeed = 0.5; // pixels per frame, adjust for speed

    const step = () => {
      if (!isPaused) {
        scrollLeft += scrollSpeed;

        // Reset scroll to 0 when half scroll width reached (original items length)
        if (scrollLeft >= scroller.scrollWidth / 2) {
          scrollLeft = 0;
        }

        scroller.scrollLeft = scrollLeft;
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);


  return (
    <div className="w-full max-w-2xl mt-12">
      <div
        ref={scrollerRef}
        className="flex items-center gap-8 py-4 overflow-x-auto no-scrollbar select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 w-28 h-28 flex-shrink-0 cursor-pointer border border-purple-400/30 rounded-lg transition-all duration-300 ease-out"
            style={{ transformStyle: 'preserve-3d' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src={skill.src} alt={`${skill.name} logo`} className="w-10 h-10 object-contain" />
            <span className="mt-2 text-gray-300 text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsScroller;
