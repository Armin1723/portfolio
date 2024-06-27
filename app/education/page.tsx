"use client";
import Stairs from "@/Components/Stairs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useRef } from "react";

const page = () => {
  gsap.registerPlugin(useGSAP);
  const container = useRef(null);
  useGSAP(() => {
    gsap.from('.graphic',{
      scale: 0.75,
      duration : 1,
      repeat: -1,
      yoyo: true,
      ease : 'power1.easeInOut'
    })
  }, {scope : container});
  return (
    <div className="w-[100vw] lg:w-[70vw]">
      <Stairs />
      <div ref={container} className="overflow-y-scroll overflow-x-visible max-h-[85vh] custom-scrollbar">
        <ul className=" relative border-s-2 border-neon-green min-h-content mx-12 mt-12">
          <li className="mb-6 ms-6 ">
            <span className="graphic absolute flex items-center justify-center w-6 h-6 bg-neon-green rounded-full -start-3 ring-8 ring-green-600/60">
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-bold ">
              Master of Computer Applications
              <span className="text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-neon-green/30 ms-3">
                Latest
              </span>
            </h3>
            <Link
              href="https://kmclu.ac.in"
              target="_blank"
              className="my-1 text-sm font-normal"
            >
              Khwaja Moinuddin Chishti Language University
            </Link>
            <time className="block my-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Sept 2022 - June 2024
            </time>
            <div className="flex flex-wrap gap-2 mr-2 mb-2 select-none">
              <p className="text-[0.5rem] flex items-center justify-center font-semibold cursor-pointer hover:opacity-80 bg-neon-green text-black p-1 rounded-md">
                ReactJs
              </p>
              <p className="text-[0.5rem] flex items-center justify-center font-semibold cursor-pointer hover:opacity-80 bg-neon-green text-black p-1 rounded-md">
                NextJs
              </p>
              <p className="text-[0.5rem] flex items-center justify-center font-semibold cursor-pointer hover:opacity-80 bg-neon-green text-black p-1 rounded-md">
                Express
              </p>
              <p className="text-[0.5rem] flex items-center justify-center font-semibold cursor-pointer hover:opacity-80 bg-neon-green text-black p-1 rounded-md">
                MongoDB
              </p>
              <p className="text-[0.5rem] flex items-center justify-center font-semibold cursor-pointer hover:opacity-80 bg-neon-green text-black p-1 rounded-md">
                TailwindCSS
              </p>
            </div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className="border-gray-600">
                <AccordionTrigger className=" text-gray-400 text-left font-light text-sm hover:no-underline">
                  I have completed my masters in computer application from
                  Khwaja Moinuddin Chishti Language University with a Cumulative
                  Grade Point Average of 9.54.
                </AccordionTrigger>
                <AccordionContent>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium  border border-gray-200 rounded-lg hover:bg-neon-green hover:text-black transition-all duration-300 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    <svg
                      className="w-3.5 h-3.5 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                      <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                    </svg>{" "}
                    Marksheet
                  </a>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          <li className="mb-6 ms-6">
            <span className="graphic absolute flex items-center justify-center w-6 h-6 bg-neon-green rounded-full -start-3 ring-8 ring-green-600/60">
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-bold ">
              Master of Arts
            </h3>
            <Link
              href="https://lkouniv.ac.in"
              target="_blank"
              className="my-1 text-sm font-normal"
            >
              University of Lucknow
            </Link>
            <time className="block my-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Nov 2020 - Sept 2022
            </time>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className="border-gray-600">
                <AccordionTrigger className=" text-gray-400 text-left font-light text-sm hover:no-underline">
                  I have completed my Master in Arts in Sociology from the University of Lucknow with a CGPA of 7.4
                </AccordionTrigger>
                <AccordionContent>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium  border border-gray-200 rounded-lg hover:bg-neon-green hover:text-black transition-all duration-300 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    <svg
                      className="w-3.5 h-3.5 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                      <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                    </svg>{" "}
                    Marksheet
                  </a>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          <li className="mb-0 ms-6">
            <span className="graphic absolute flex items-center justify-center w-6 h-6 bg-neon-green rounded-full -start-3 ring-8 ring-green-600/60">
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-bold ">
              Bachelor of Science (CS)
            </h3>
            <Link
              href="https://lkouniv.ac.in"
              target="_blank"
              className="my-1 text-sm font-normal"
            >
              University of Lucknow
            </Link>
            <time className="block my-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Mar 2017 - Sep 2020
            </time>
            <div className="flex flex-wrap gap-2 mr-2 mb-2 select-none">
              <p className="text-[0.5rem] flex items-center justify-center font-semibold cursor-pointer hover:opacity-80 bg-neon-green text-black p-1 rounded-md">
                C++
              </p>
              <p className="text-[0.5rem] flex items-center justify-center font-semibold cursor-pointer hover:opacity-80 bg-neon-green text-black p-1 rounded-md">
                Java Programming Language
              </p>
              <p className="text-[0.5rem] flex items-center justify-center font-semibold cursor-pointer hover:opacity-80 bg-neon-green text-black p-1 rounded-md">
                System Analysis and Design
              </p>
              <p className="text-[0.5rem] flex items-center justify-center font-semibold cursor-pointer hover:opacity-80 bg-neon-green text-black p-1 rounded-md">
                DBMS
              </p>
            </div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className="border-gray-600">
                <AccordionTrigger className=" text-gray-400 text-left font-light text-sm hover:no-underline">
                  I have completed my Bachelors in Science from
                  University of Lucknow in Computer Science, Maths and Physics having secured 73% overall.
                </AccordionTrigger>
              <AccordionContent>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium  border border-gray-200 rounded-lg hover:bg-neon-green hover:text-black transition-all duration-300 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    <svg
                      className="w-3.5 h-3.5 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                      <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                    </svg>{" "}
                    Marksheet
                  </a>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
