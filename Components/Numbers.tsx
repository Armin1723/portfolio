'use client'
import React from "react";
import CountUp from "react-countup";

const Numbers = () => {
  return (
    <div className="numbers grid grid-cols-2 md:grid-cols-4 space-y-4 py-4 place-items-stretch">
      <div className="exp flex items-center gap-2 justify-center">
        <div className="text-3xl font-extrabold">
          <CountUp end={2} duration={3} />
          <span>+</span>
        </div>
        <p className="text-xs font-extralight">Years of <br/> Experience</p>
      </div>

      <div className="exp flex items-center gap-2 justify-center">
        <div className="text-3xl font-extrabold">
          <CountUp end={12} duration={3} />
          <span>+</span>
        </div>
        <p className="text-xs font-extralight">Projects <br/> Completed</p>
      </div>

      <div className="exp flex items-center gap-2 justify-center ">
        <div className="text-3xl font-extrabold">
          <CountUp end={12} duration={3} />
          <span>+</span>
        </div>
        <p className="text-xs font-extralight">Technologies <br/> Mastered</p>
      </div>

      <div className="exp flex items-center gap-2 justify-center">
        <div className="text-3xl font-extrabold">
          <CountUp end={200} duration={3} />
          <span>+</span>
        </div>
        <p className="text-xs font-extralight">Code <br/> Commits</p>
      </div>
    </div>
  );
};

export default Numbers;
