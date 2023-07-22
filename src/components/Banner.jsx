import React from "react";
import { Link } from "react-router-dom";


function Banner(props) {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 lg:py-4 flex flex-col gap-4 
        mdl:gap-10 xl:px-4
        "
    >
      <h3 className="text-xl font-body font-[500] tracking-wide text-textGreen">
        Hi, my name is
      </h3>
      <h1 className="text-4xl font-body font-[700] flex flex-col">
        Abolghasem Taziki.
        <span className="text-textDark mt-2 ">I build things for the web.</span>
      </h1>
      <p className="text-base md:max-w-[650px] text-textDark font-medium">
        I am a web developer of experience in React. I have a
        strong foundation in front-end, I am skilled in creating user-friendly
        and responsive web applications using React & Next js and its ecosystem.
      </p>

      <button className="w-52 h-14 text-sm border border-textGreen rounded-md
      text-textGreen tracking-wide hover:bg-hoverColor duration-300
      "><Link to="https://github.com/AbolghasemTz" target="_blank">Check my project</Link></button>
    </section>
  );
}

export default Banner;
