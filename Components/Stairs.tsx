'use client'
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef} from "react";

const Stairs = () => {
  const stairsContainer = useRef(null);

  useGSAP(
    () => {
      gsap.to(".stairs", {
        height : "100vh",
        duration: 0.6,
        z: 99, 
        repeat: 1,
        yoyo: true,
        stagger: 0.1,
      })
    },
    { scope: stairsContainer }
  );
  return <div ref={stairsContainer} className="absolute top-0 left-0 max-w-screen overflow-hidden flex z-[99]">
    <div className={`stairs h-0 w-[14.5vw] bg-white/90 backdrop-blur-lg z-99`}></div>
    <div className={`stairs h-0 w-[14vw] bg-white/90 backdrop-blur-lg z-99`}></div>
    <div className={`stairs h-0 w-[14.5vw] bg-white/90 backdrop-blur-lg`}></div>
    <div className={`stairs h-0 w-[14vw] bg-white/90 backdrop-blur-lg`}></div>
    <div className={`stairs h-0 w-[14.5vw] bg-white/90 backdrop-blur-lg`}></div>
    <div className={`stairs h-0 w-[14vw] bg-white/90 backdrop-blur-lg`}></div>
    <div className={`stairs h-0 w-[14.5vw] bg-white/90 backdrop-blur-lg`}></div>
  </div>;
};

export default Stairs;
