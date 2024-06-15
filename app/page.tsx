import Numbers from "@/Components/Numbers";
import React from "react";

const page = () => {
  return (
    <section className="w-[100vw] lg:w-[70vw] px-6 lg:px-12">
      <div className="hero flex h-[65vh] flex-row justify-between items-center max-sm:flex-col-reverse">
        <div className="details max-lg:px-2 flex items-left flex-col justify-center md:w-1/2">
          <p className="line1 text-xs">Software Developer</p>
          <p className="line2 text-4xl overflow-hidden py-1 font-bold tracking-wider">
            Hello I'm
          </p>
          <p className="line3 text-5xl overflow-hidden py-1 text-neon-green font-bold tracking-wider">
            Uzair Alam
          </p>
          <p className="py-2 font-thin text-xs leading-6">
            I excel at creating MERN stack websites along with expertise in
            NextJS.
          </p>
          <div className="interactions mt-4 flex gap-4 items-center">
            <button className="px-4 py-1 select-none rounded-xl border-2 border-neon-green text-neon-green mr-4 hover:bg-neon-green hover:text-gray-900 uppercase transition-all duration-300">
              Download CV
              ↓
            </button>
            <a href="https://github.com/Armin1723" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="Github"
                className="h-6 w-6 hover:opacity-75 rounded-full cursor-pointer"
              >
                <path
                  fill="#01fe98"
                  d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"
                  className="color5c6bc0 svgShape"
                ></path>
              </svg>
            </a>

            <a href="https://linkedin.com/in/uzair1723" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 5 1036 990"
                id="Linkedin"
                className="h-6 w-6 hover:opacity-75 cursor-pointer "
              >
                <path
                  d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"
                  fill="#01fe98"
                  className="color000000 svgShape"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="image">image</div>
      </div>
      <Numbers/>
    </section>
  );
};

export default page;
