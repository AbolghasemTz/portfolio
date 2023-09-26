import React from "react";
import { Link } from "react-router-dom";

import { TbBrandGithub } from "react-icons/tb";
import { SlSocialInstagram } from "react-icons/sl";
import { RxOpenInNewWindow } from "react-icons/rx";
import SectionTitle from "./SectionTitle";

import rewordProject from "../assets/images/rewordProject.png";
import rick from "../assets/images/rick.png";
import EcommerceNext from "../assets/images/EcommerceNext.png";

function Project() {
  return (
    <section
      id="project"
      className="max-w-contentContainer h-auto mx-auto py-10 lg:py-24 flex flex-col gap-4 
            mdl:gap-10 xl:px-4
            "
    >
      <SectionTitle title="Some Things I Have Built" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* project one */}
        <div className="w-full flex flex-col items- justify-center gap-10 mt-10 ">
          <div className="flex flex-col lg:flex-row gap-6">
            <Link
              className="w-full lg:w-1/2 h-auto relative group:"
              to="https://rewording.io"
              target="_blank"
            >
              <div>
                <img
                  src={rewordProject}
                  alt="rewording"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <div className="w-full lg:w-1/2 flex flex-col gap-6 mdl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="text-textGreen text-sm tracking-wide md:text-lg">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Rewording.io</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 mt:p-6 rounded-md">
                Rewording is a project to work with text, replacing words with
                words. It consists of three parts. Paraphrasing: The user gives
                the text and the site suggests other synonyms that the site
                suggests. Summarize: The user gives a text and the site
                summarizes it for him Plagiarism: It is very important for
                students who write articles to recognize that the written
                article has not been copied from somewhere else.
              </p>
              <ul className="flex items-center gap-2 md:gap-5 justify-between text-textDark text-xs md:text-sm">
                <li>Next.js</li>
                <li>Redux</li>
                <li>Tailwind</li>
                <li>Formik</li>
                <li>Responsive</li>
              </ul>
              <div className="flex text-2xl gap-4">
                <Link
                  to="#"
                  target="_blank"
                  className="hover:text-textGreen duration-300"
                >
                  <TbBrandGithub />
                </Link>
                <Link className="hover:text-textGreen duration-300" to="#">
                  <SlSocialInstagram />
                </Link>
                <Link
                  className="hover:text-textGreen duration-300"
                  to="https://rewording.io"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* project two */}
        <div className="w-full flex flex-col items- justify-center gap-10 mt-0 ">
          <div className="flex flex-col lg:flex-row-reverse gap-6">
            <Link
              className="w-full lg:w-1/2 h-auto relative group:"
              to="https://cosmic-panda-0e6f4a.netlify.app/"
              target="_blank"
            >
              <div>
                <img
                  src={EcommerceNext}
                  alt="inventory car"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <div className="w-full lg:w-1/2 flex flex-col gap-6 mdl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="text-textGreen text-sm md:text-lg tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Next.js 13 Ecommerce</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 mt:p-6 rounded-md">
                o This application is a project where the user can view some
                products, register with a mobile number and add products to the
                shopping cart and also manage the shopping cart. customer panel
                that can manage their own orders and update their own profile
                Admin panel that includes user management, user orders,
                products, categories, discount code that includes creating and
                deleting and updating
              </p>
              <ul className="flex items-center gap-2 md:gap-5 justify-between text-textDark text-xs md:text-sm">
                <li>Next 13</li>
                <li>React-query</li>
                <li>Tailwinds</li>
              </ul>
              <div className="flex text-2xl gap-4">
                <Link
                  className="hover:text-textGreen duration-300"
                  to="https://github.com/AbolghasemTz/Ecommerce-next13-"
                  target="_blank"
                >
                  <TbBrandGithub />
                </Link>
                <Link className="hover:text-textGreen duration-300" to="#">
                  <SlSocialInstagram />
                </Link>
                <Link className="hover:text-textGreen duration-300" to="#">
                  <RxOpenInNewWindow />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* project three */}
        <div className="w-full flex flex-col items- justify-center gap-10 mt-0 ">
          <p className="text-textGreen text-sm md:text-lg tracking-wide">
            Rickandmorty
          </p>
          <h3 className="text-2xl font-bold">React js test</h3>
          <div className="flex flex-col lg:flex-row gap-6">
            <Link
              className="w-full lg:w-1/2 h-auto relative group:"
              to="#"
              target="_blank"
            >
              <div>
                <img
                  src={rick}
                  alt="next project"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <div className="w-full lg:w-1/2 flex flex-col gap-6 mdl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="text-textGreen text-sm tracking-wide">
                {/* Featured Project */}
              </p>
              <h3 className="text-2xl font-bold">
                {/* ecommerce with Next Js And Redux */}
              </h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 mt:p-6 rounded-md">
                This web app is built with React.js and Hooks, the user can add
                and delete & search character ....
              </p>
              <ul className="flex items-center gap-2 md:gap-5 justify-between text-textDark text-xs md:text-sm">
                <li>React</li>
                <li>Hooks</li>
                <li>Css</li>
              </ul>
              <div className="flex text-2xl gap-4">
                <Link
                  className="hover:text-textGreen duration-300"
                  to="https://github.com/AbolghasemTz/Movie-Charecter-App-react"
                >
                  <TbBrandGithub />
                </Link>
                <Link className="hover:text-textGreen duration-300" to="#">
                  <SlSocialInstagram />
                </Link>
                <Link
                  className="hover:text-textGreen duration-300"
                  to="https://65128848d5299b229ac59291--fascinating-arithmetic-0c966d.netlify.app/"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
