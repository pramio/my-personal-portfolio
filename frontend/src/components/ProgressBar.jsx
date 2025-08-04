 import { useRef,useEffect } from "react"
 import { gsap } from "gsap"
 import { ScrollTrigger } from "gsap-trial/ScrollTrigger"
const Progressbar = () => {


  return (
    <div className="fixed top-0 w-full h-[5px] bg-gray-800 z-50">
      <div 
      ref={processFileRef}
      className="h-full w-0 bg-[#A1045a] tansition-colors duration-300"
      style={{width: "0%"}}>


      </div>
    </div>
  )
}

export default Progressbar
