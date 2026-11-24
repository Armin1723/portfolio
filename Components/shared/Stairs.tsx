'use client'
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef } from "react";

const Stairs = () => {
  const stairsContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.to(".stair-step", {
        height: "100%",
        duration: 0.35,
        ease: "power2.inOut",
        stagger: 0.05,
      });
      tl.to(".stair-step", {
        height: "0%",
        duration: 0.35,
        ease: "power2.inOut",
        stagger: 0.05,
      });
    },
    { scope: stairsContainer }
  );

  return (
    <div
      ref={stairsContainer}
      className="fixed inset-0 w-full h-full pointer-events-none z-50 flex overflow-hidden"
    >
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="stair-step h-0 w-1/6 bg-white/90 backdrop-blur-sm"
        />
      ))}
    </div>
  );
};

export default Stairs;
