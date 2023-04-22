import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import SectionTitle from "./SectionTitle";

import PersonPic from "../assets/images/me.jpg"

function About(props) {
  return (
    <section
      id="about"
      className="max-w-contentContainer mx-auto py-10 lg:py-24 flex flex-col gap-4 
          mdl:gap-10 xl:px-4
          "
    >
      <SectionTitle title="About Me" />

      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            I'm Abolghasem, a year old self-taught Javascript Developer living
            in Gorgan . I decided it was time for a change, so I started to
            study Javascript before going into work. I quickly started to love
            Javascript and I decided to take the risk and quit my job. I then
            studied Javascript , I always want to learn more and do more. I'm
            also a firm believer that we should never settle. I'm hard working,
            super curious, passionate, committed and a fast learner!
          </p>

          <ul className="max-w-[450px] text-sm grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Javascript (ES6)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Next Js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React Js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Sass
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Css 3
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Html 5
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3 h-96 ">
          <img
            className="rounded-lg h-full object-cover shadow-xl"
            src={PersonPic}
            alt="PortFolioImage"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
