import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="skills flex flex-col gap-4 md:gap-8 max-lg:justify-evenly justify-evenly h-full">
      <p className="text-2xl font-extrabold text-center">Introduction</p>
      <div className="intro font-light text-center text-md md:text-lg">
        A passionate and skilled Web developer that has expertise in building
        web applications and websites. I have a passion for creating
        user-friendly and efficient web applications that help businesses grow
        using MERN / NextJs. I also possess great problem solving abilities and
        proficiency in programming languages like Java, C++ and Python.
      </div>
      <div className="contactInformation grid grid-cols-1 md:grid-cols-2 place-content-between place-items-baseline max-lg:place-items-center w-full space-y-2 text-xs md:text-md font-extralight">
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="icons h-4 w-4 object-contain rounded-full fill-white font-extrabold"
            id="address"
          >
            <path d="M17.378,30.847,31.205,52.581a.942.942,0,0,0,1.59,0L46.621,30.847a.86.86,0,0,0,.047-.084,18.058,18.058,0,0,0,3.561-10.792,18.229,18.229,0,1,0-36.458,0,18.053,18.053,0,0,0,3.558,10.787A.864.864,0,0,0,17.378,30.847ZM32,3.625A16.364,16.364,0,0,1,48.345,19.971a16.188,16.188,0,0,1-3.29,9.8.893.893,0,0,0-.117.208L32,50.321,19.067,29.992a.934.934,0,0,0-.122-.217,16.188,16.188,0,0,1-3.29-9.8A16.364,16.364,0,0,1,32,3.625Z"></path>
            <path d="M40.756 50.939a.942.942 0 0 0-.154 1.878c5.906.485 9.432 1.806 9.432 3.532 0 1.279-6.366 3.767-18.034 3.767s-18.034-2.488-18.034-3.767c0-.822.9-2.812 9.281-3.52a.942.942 0 0 0-.159-1.877c-7.406.626-11.006 2.392-11.006 5.4C12.082 60.232 22.407 62 32 62s19.918-1.768 19.918-5.651C51.918 53.326 48.267 51.556 40.756 50.939zM21.9 23.116h2.5v7.935a.941.941 0 0 0 .942.941H38.657a.941.941 0 0 0 .942-.941V23.116h2.5a2.193 2.193 0 0 0 2.109-1.38 1.831 1.831 0 0 0-.622-2.07l-10.1-8.191a2.436 2.436 0 0 0-2.974 0l-10.1 8.19a1.83 1.83 0 0 0-.622 2.069A2.194 2.194 0 0 0 21.9 23.116zm11.734 6.993h-2.9a.917.917 0 0 0 .185-.531V26.265a1.268 1.268 0 1 1 2.535 0v3.313A.917.917 0 0 0 33.632 30.109zM31.7 12.938a.546.546 0 0 1 .6 0l10.1 8.19.033-.023c-.01.025-.1.126-.334.126H38.657a.942.942 0 0 0-.942.942v7.935H35.146a.923.923 0 0 0 .184-.531V26.265a3.151 3.151 0 1 0-6.3 0v3.313a.917.917 0 0 0 .185.531H26.285V22.174a.941.941 0 0 0-.941-.942H21.9c-.233 0-.325-.1-.3-.1z"></path>
          </svg>{" "}
          {": "}
          <Link
            href="https://maps.app.goo.gl/qqbeZSkRuReegpZ97"
            target="_blank"
            className="text-neon-green hover:underline"
          >
            Lucknow, India
          </Link>
        </div>
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icons h-4 w-4 object-contain rounded-full fill-white font-extrabold"
            viewBox="0 0 32 32"
            id="phone"
          >
            <path d="M27.308,20.649l-2.2-2.2a3.521,3.521,0,0,0-4.938-.021,2.152,2.152,0,0,1-2.729.267A15.026,15.026,0,0,1,13.3,14.562a2.181,2.181,0,0,1,.284-2.739A3.521,3.521,0,0,0,13.553,6.9l-2.2-2.2a3.514,3.514,0,0,0-4.961,0l-.633.634c-3.3,3.3-3.053,10.238,3.813,17.1,4.14,4.141,8.307,5.875,11.686,5.875a7.5,7.5,0,0,0,5.418-2.061l.634-.634A3.513,3.513,0,0,0,27.308,20.649ZM25.894,24.2l-.634.634c-2.6,2.6-8.339,2.125-14.276-3.813S4.571,9.34,7.171,6.74L7.8,6.107a1.511,1.511,0,0,1,2.133,0l2.2,2.2a1.511,1.511,0,0,1,.021,2.11,4.181,4.181,0,0,0-.531,5.239,17.01,17.01,0,0,0,4.713,4.706,4.179,4.179,0,0,0,5.231-.517,1.512,1.512,0,0,1,2.118.013l2.2,2.2A1.51,1.51,0,0,1,25.894,24.2Z"></path>
          </svg>
          {": "}
          <Link
            href="tel:+918858128030"
            className="text-neon-green hover:underline"
          >
            +91 8858128030
          </Link>
        </div>
        <div className="flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icons h-4 w-4 fill-white"
            viewBox="0 0 128 96"
            id="email"
          >
            <g>
              <path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></path>
            </g>
          </svg>{" "}
          {": "}
          <Link
            href="mailto:alam.airuz23@gmail.com"
            className="text-neon-green hover:underline"
          >
            alam.airuz23@gmail.com
          </Link>
        </div>
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 5 1036 990"
            id="Linkedin"
            className="icons h-4 w-4 object-contain fill-white "
            width="21.395"
            height="21.409"
          >
            <path
              d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"
              className="color000000 svgShape"
            ></path>
          </svg>
          :{" "}
          <Link
            href="https://www.linkedin.com/in/uzair1723/"
            className="text-neon-green hover:underline"
          >
            https://linkedin.com/in/uzair1723
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
