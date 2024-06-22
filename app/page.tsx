"use client";
import Stairs from "@/Components/Stairs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import CountUp from "react-countup";

const page = () => {
  gsap.registerPlugin(useGSAP);
  const container = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".line1", {
        y: 24,
        opacity: 0,
        delay: 2,
      });
      tl.from(".line2", {
        y: 24,
        opacity: 0,
      });
      tl.from(".line3", {
        y: 24,
        opacity: 0,
      });
      tl.from(".description", {
        x: -36,
        opacity: 0,
        ease: "power2.in",
      });
      tl.from(".image", {
        x: 48,
        opacity: 0,
        duration: 2,
        scale: 0.2,
        delay: 0,
        ease: "easeInOut",
      });
      tl.from(".interactions", {
        opacity: 0,
        scale: 0.5,
      });
      tl.from('.icons',{
        opacity: 0,
        scale: 0.2,
        stagger: 0.3,
      })
      tl.from(".exp", {
        y: 24,
        opacity: 0,
        stagger: 0.3,
        delay: -2,
      });
      gsap.from(".circle2", {
        rotate: 360,
        duration: 26,
        repeat: -1,
        transformOrigin: "center",
        yoyo: true,
        ease: "none",
      });
      gsap.from(".circle3", {
        rotate: -360,
        duration: 26,
        repeat: -1,
        transformOrigin: "center",
        yoyo: true,
        ease: "easeInOut",
      });
    },
    { scope: container }
  );
  return (
    <section className="w-[100vw] lg:w-[70vw]" ref={container}>
      <Stairs />
      <div className="hero flex h-[65vh] flex-row justify-evenly px-6 lg:px-12 md:justify-between gap-8 items-center max-sm:flex-col-reverse">
        <div className="details max-lg:p-2 max-lg:mt-2 flex items-left flex-col justify-center md:w-1/2">
          <div className="overflow-hidden">
            <p className="line1 text-xs ">Software Developer</p>
          </div>
          <div className="text-4xl overflow-hidden font-bold tracking-wider">
            <p className="line2 py-1">Hello I'm</p>
          </div>
          <div className="text-5xl overflow-hidden text-neon-green font-bold tracking-wider">
            <p className="line3 py-1">Uzair Alam</p>
          </div>
          <div className="overflow-hidden font-thin text-xs leading-6">
            <p className="description py-1 text-wrap">
              I excel at creating MERN stack websites along with expertise in
              NextJS.
            </p>
          </div>
          <div className="interactions mt-4 flex gap-4 items-center">
            <button className="px-4 py-1 select-none rounded-xl border-2 border-neon-green text-neon-green mr-4 hover:bg-neon-green hover:text-gray-900 uppercase transition-all duration-300">
              Download CV ↓
            </button>
            <Link href="https://github.com/Armin1723" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="Github"
                className="icons h-6 w-6 hover:opacity-75 rounded-full cursor-pointer"
              >
                <path
                  fill="#01fe98"
                  d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"
                  className="color5c6bc0 svgShape"
                ></path>
              </svg>
            </Link>

            <Link href="https://linkedin.com/in/uzair1723" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 5 1036 990"
                id="Linkedin"
                className="icons h-6 w-6 hover:opacity-75 cursor-pointer "
              >
                <path
                  d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"
                  fill="#01fe98"
                  className="color000000 svgShape"
                ></path>
              </svg>
            </Link>

            <Link href="https://leetcode.com/u/uzair1723" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                viewBox="0 0 24 24"
                id="Leetcode"
                className="icons h-6 w-6 hover:opacity-75 cursor-pointer "
              >
                <path
                  d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"
                  fill="#01fe98"
                  className="color000000 svgShape"
                ></path>
                <path
                  d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"
                  fill="#01fe98"
                  className="color000000 svgShape"
                ></path>
              </svg>
            </Link>
          </div>
        </div>

        <div className="image select-none relative aspect-square md:w-[280px] md:h-[280px] w-[200px] h-[200px] flex items-center justify-center max-lg:mr-12 max-sm:mr-0 mix-blend-lighten">
          <Image
            src="/assets/profile.png"
            priority
            quality={100}
            alt=""
            sizes="(min-width: 768px) 220px, 258px"
            fill
            className="rounded-full object-contain "
          />
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="frame absolute flex items-center justify-center md:w-[348px] md:h-[348px] aspect-square w-[248px] h-[248px] object-cover rounded-full"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="100%"
                  style={{ stopColor: "#01fe98", stopOpacity: 0.5 }}
                />
              </linearGradient>
            </defs>
            <circle
              cx="100"
              cy="100"
              r="90"
              stroke="#01fe98"
              strokeWidth="1"
              fill="none"
              strokeDasharray="5 5 2"
              className="circle2"
            />
            <circle
              cx="100"
              cy="100"
              r="85"
              stroke="#01fe98"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              strokeDasharray="5 10 4"
              className="circle3"
            />
          </svg>
        </div>
      </div>

      <div className="numbers grid grid-cols-2 md:grid-cols-4 space-y-2 py-1 place-items-stretch">
        <div className="exp flex items-center gap-2 justify-center">
          <div className="text-3xl font-extrabold">
            <CountUp start={0} end={2} duration={4} suffix={"+"} delay={6} />
          </div>
          <p className="text-xs font-extralight">
            Years of <br /> Experience
          </p>
        </div>

        <div className="exp flex items-center gap-2 justify-center">
          <div className="text-3xl font-extrabold">
            <CountUp start={0} end={12} duration={4} suffix={"+"} delay={6} />
          </div>
          <p className="text-xs font-extralight">
            Projects <br /> Completed
          </p>
        </div>

        <div className="exp flex items-center gap-2 justify-center ">
          <div className="text-3xl font-extrabold">
            <CountUp start={0} end={12} duration={4} suffix={"+"} delay={6} />
          </div>
          <p className="text-xs font-extralight">
            Technologies <br /> Mastered
          </p>
        </div>

        <div className="exp flex items-center gap-2 justify-center">
          <div className="text-3xl font-extrabold">
            <CountUp start={0} end={200} duration={4} suffix={"+"} delay={6} />
          </div>
          <p className="text-xs font-extralight">
            Code <br /> Commits
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
