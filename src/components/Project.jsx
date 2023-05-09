import React from "react";
import { Link } from "react-router-dom";

import { TbBrandGithub } from "react-icons/tb";
import { SlSocialInstagram } from "react-icons/sl";
import { RxOpenInNewWindow } from "react-icons/rx";
import SectionTitle from "./SectionTitle";

import reactProject from "../assets/images/reactShop.png";
import nextProject from "../assets/images/next.png";
import inventoryProject from "../assets/images/inventory.png";

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
              to="https://shopping-react-abolghasemtz.vercel.app/"
              target="_blank"
            >
              <div>
                <img
                  src={reactProject}
                  alt="react-shopping"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <div className="w-full lg:w-1/2 flex flex-col gap-6 mdl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="text-textGreen text-sm tracking-wide md:text-lg">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">
                Shopping with React And Context
              </h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 mt:p-6 rounded-md">
                I have created an online store with React and Context and I have
                created Link registration form part with Formik an
                authentication form.
              </p>
              <ul className="flex items-center gap-2 md:gap-5 justify-between text-textDark text-xs md:text-sm">
                <li>React</li>
                <li>Context</li>
                <li>Tailwind</li>
                <li>Formik</li>
                <li>Responsive</li>
              </ul>
              <div className="flex text-2xl gap-4">
                <Link
                  to="https://github.com/AbolghasemTz/shopping-react"
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
                  to="https://shopping-react-abolghasemtz.vercel.app/"
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
                  src={inventoryProject}
                  alt="inventory car"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <div className="w-full lg:w-1/2 flex flex-col gap-6 mdl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="text-textGreen text-sm md:text-lg tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Cars Inventory with React</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 mt:p-6 rounded-md">
                I have created Cars Inventory with React and passed the
                data to the components with props , "Not Responsive This is web
                App example"
              </p>
              <ul className="flex items-center gap-2 md:gap-5 justify-between text-textDark text-xs md:text-sm">
                <li>React</li>
                <li>Props</li>
                <li>css module</li>
              </ul>
              <div className="flex text-2xl gap-4">
                <Link
                  className="hover:text-textGreen duration-300"
                  to="https://github.com/AbolghasemTz/Inventory-cars-web-app"
                  target="_blank"
                >
                  <TbBrandGithub />
                </Link>
                <Link className="hover:text-textGreen duration-300" to="#">
                  <SlSocialInstagram />
                </Link>
                <Link
                  className="hover:text-textGreen duration-300"
                  to="https://cosmic-panda-0e6f4a.netlify.app/"
                >
                  <RxOpenInNewWindow />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* project three */}
        <div className="w-full flex flex-col items- justify-center gap-10 mt-0 ">
          <div className="flex flex-col lg:flex-row gap-6">
            <Link
              className="w-full lg:w-1/2 h-auto relative group:"
              to="#"
              target="_blank"
            >
              <div>
                <img
                  src={nextProject}
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
                This site is built with Next.js and Context, the user can
                choose her plan and subscribe, and the forms are built with the
                Formik library and have form authentication
              </p>
              <ul className="flex items-center gap-2 md:gap-5 justify-between text-textDark text-xs md:text-sm">
                <li>Next</li>
                <li>Context</li>
                <li>Tailwind</li>
                <li>formik</li>
              </ul>
              <div className="flex text-2xl gap-4">
                <Link
                  className="hover:text-textGreen duration-300"
                  to="https://github.com/AbolghasemTz/fitness"
                >
                  <TbBrandGithub />
                </Link>
                <Link className="hover:text-textGreen duration-300" to="#">
                  <SlSocialInstagram />
                </Link>
                <Link className="hover:text-textGreen duration-300"
                 to="https://my-app-abolghasemtz.vercel.app/" target="_blank">
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
