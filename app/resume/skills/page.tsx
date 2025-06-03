import { skillsName } from "@/public/utils";
import React from "react";

const skills = () => {
  return (
    <div className="container flex flex-col gap-4 py-4">
      <div className="info flex flex-col items-center gap-4">
        <p className="text-2xl font-extrabold">My Skills</p>
        <p className="text-center text-sm font-light">
          I am a full stack developer with a passion for creating user-friendly
          and efficient web applications which is skilled in the following
          technologies.
        </p>
      </div>
      <div className="skills grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 px-6 place-items-center max-h-[45vh] overflow-y-scroll custom-scrollbar py-2">
        {skillsName.map((skill, index) => {
          return (
            <div
              key={index}
              className="icon aspect-square flex flex-col items-center justify-center gap-2 rounded-md bg-gray-800 p-4 hover:border hover:border-neon-green hover:text-neon-green cursor-pointer transition-all duration-300"
            >
              <i className={`${skill.icon} text-8xl font-light`}></i>
            </div>
          );
        })}
        <div className="icon aspect-square flex flex-col items-center justify-center gap-2 rounded-md bg-gray-800 p-4 hover:border hover:border-neon-green stroke-white fill-transparent hover:stroke-neon-green cursor-pointer transition-all duration-300">
          <svg
            className="h-[6rem] w-[6rem]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-0.5 -0.5 16 16"
            stroke-linecap="round"
            stroke-linejoin="round"
            id="Brand-Mongodb--Streamline-Tabler"
            height="16"
            width="16"
          >
            <path d="M7.5 1.55V14.850000000000001" stroke-width="1"></path>
            <path
              d="M11.7 7.3088750000000005C11.7 9.6 10.431625 10.647874999999999 7.5 13.799999999999999C4.568375 10.647874999999999 3.3000000000000003 9.6 3.3000000000000003 7.3088750000000005C3.3000000000000003 4.1911249999999995 5.4496875 2.46 7.5 0.8500000000000001C9.5503125 2.46 11.7 4.1911249999999995 11.7 7.3088750000000005Z"
              stroke-width="1"
            ></path>
          </svg>
        </div>
        <div className="icon aspect-square flex flex-col items-center justify-center gap-2 rounded-md bg-gray-800 p-4 hover:border hover:border-neon-green stroke-white fill-transparent hover:stroke-neon-green cursor-pointer transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[6rem] w-[6rem]"
            viewBox="-0.5 -0.5 16 16"
            strokeLinecap="round"
            strokeLinejoin="round"
            id="Brand-Redux--Streamline-Tabler"
            height={16}
            width={16}
          >
            <path
              d="M10.836749999999999 4.1928125C10.2450625 2.4545624999999998 8.9728125 1.252875 7.499875 1.252875C5.461 1.252875 3.8080000000000003 3.1873750000000003 3.8080000000000003 6.027375C3.8080000000000003 7.465000000000001 4.97075 9.5016875 5.6543125000000005 10.4373125"
              strokeWidth={1}
            />
            <path
              d="M2.1425 7.852375C0.925375 9.2319375 0.51525 10.928312499999999 1.2524374999999999 12.1969375C2.2718749999999996 13.9535625 5.028812499999999 14.2776875 7.500624999999999 12.858374999999999C8.7523125 12.138875 9.61375 10.387375 10.084875 9.331875"
              strokeWidth={1}
            />
            <path
              d="M9.715125 13.740375C11.560749999999999 13.740375 13.0395 13.4185 13.7480625 12.1969375C14.7675 10.440249999999999 13.5900625 7.865562499999999 11.1175 6.4463124999999994C9.8665625 5.726750000000001 7.915125 5.538625000000001 6.7611875 5.6598749999999995"
              strokeWidth={1}
            />
            <path
              d="M6.392250000000001 6.296374999999999C6.7450624999999995 6.49925 7.1970624999999995 6.3786875 7.4006875 6.027375C7.603 5.6758125 7.4822500000000005 5.226812499999999 7.1309375 5.024125000000001C6.7778125 4.8206875 6.32675 4.9409375 6.1217500000000005 5.293125C5.9195625 5.644875000000001 6.0406249999999995 6.093937499999999 6.392250000000001 6.296374999999999Z"
              strokeWidth={1}
            />
            <path
              d="M4.927375 10.440249999999999C4.927375 11.0060625 5.539874999999999 11.3596875 6.0298750000000005 11.076812499999999C6.257312499999999 10.9455 6.397374999999999 10.702875 6.397374999999999 10.440249999999999C6.397374999999999 9.874500000000001 5.784875 9.520875 5.294875 9.80375C5.067500000000001 9.9350625 4.927375 10.177687500000001 4.927375 10.440249999999999"
              strokeWidth={1}
            />
            <path
              d="M9.337375 9.33775C9.337375 9.9035625 9.949875 10.2571875 10.439875 9.9743125C10.66725 9.843 10.807374999999999 9.600375 10.807374999999999 9.33775C10.807374999999999 8.772 10.194875000000001 8.418375000000001 9.704875 8.70125C9.4774375 8.8325625 9.337375 9.0751875 9.337375 9.33775"
              strokeWidth={1}
            />
          </svg>
        </div>

        <div className="icon aspect-square flex flex-col items-center justify-center gap-2 rounded-md bg-gray-800 p-4 hover:border hover:border-neon-green stroke-white fill-transparent hover:stroke-neon-green cursor-pointer transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[6rem] w-[6rem]"
            viewBox="-0.5 -0.5 16 16"
            fill="none"
            stroke="#inherit"
            strokeLinecap="round"
            strokeLinejoin="round"
            id="Brand-Typescript--Streamline-Tabler"
            height={16}
            width={16}
          >
            <path
              d="M9.705 11.5425C9.9401875 11.7776875 10.2591875 11.91 10.592125 11.91H10.991249999999999C11.498375000000001 11.91 11.91 11.498375000000001 11.91 10.991249999999999V10.807500000000001C11.91 10.198625 11.416375 9.705 10.807500000000001 9.705C10.1985625 9.705 9.705 9.2114375 9.705 8.6025V8.418750000000001C9.705 7.911625 10.116624999999999 7.5 10.623750000000001 7.5H11.022875C11.355812499999999 7.5 11.6748125 7.6323125 11.91 7.8675"
              strokeWidth={1}
            />
            <path d="M5.295 7.5H8.235" strokeWidth={1} />
            <path d="M6.765 7.5V11.91" strokeWidth={1} />
            <path
              d="M14.115 12.645V2.355C14.115 1.5431249999999999 13.456875 0.885 12.645 0.885H2.355C1.5431249999999999 0.8849374999999999 0.885 1.5431249999999999 0.885 2.355V12.645C0.885 13.456875 1.5431249999999999 14.115 2.355 14.115H12.645C13.456875 14.115 14.115 13.456875 14.115 12.645Z"
              strokeWidth={1}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default skills;

