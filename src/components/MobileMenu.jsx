import React, { useRef, useState } from "react";

import { MdOutlineClose } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";
import { Link } from "react-router-dom";

function MobileMenu({ handelScroll }) {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef();
  return (
    <>
      <div
        className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden
        text-4xl text-textGreen cursor-pointer overflow-hidden group
        "
        onClick={() => setShowMenu(true)}
      >
        <span
          className="w-full h-[2px] bg-textGreen inline-flex
           transform group-hover:translate-x-2 transition-all ease-in-out duration-300"
        ></span>
        <span
          className="w-full h-[2px] bg-textGreen inline-flex
           transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"
        ></span>
        <span
          className="w-full h-[2px] bg-textGreen inline-flex
           transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"
        ></span>
      </div>
      {showMenu && (
        <div
          ref={(node) => (ref.current = node)}
          className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end "
        >
          <div
            className="w-[80%] h-full bg-[#112240]
            flex flex-col items-center px-4 py-10 relative 
            "
          >
            <MdOutlineClose
              onClick={() => setShowMenu(false)}
              className="text-3xl text-textGreen cursor-pointer hover:text-red-900 absolute top-5 right-4"
            />
            <div className="flex justify-center items-center flex-col ">
              <ul>
                <Link
                  to="#home"
                  className="flex items-center mt-8 gap-1 font-medium text-textDark hover:text-textGreen
                cursor-pointer duration-200 nav-link
                "
                  onClick={handelScroll}
                >
                  <li>Home</li>
                </Link>
                <Link
                  to="#about"
                  className="flex items-center my-4 gap-1 font-medium text-textDark hover:text-textGreen
                cursor-pointer duration-200 nav-link
                "
                  onClick={handelScroll}
                >
                  <li>About</li>
                </Link>

                <Link
                  to="#project"
                  className="flex items-center my-4 gap-1 font-medium text-textDark hover:text-textGreen
                cursor-pointer duration-200 nav-link
                "
                  onClick={handelScroll}
                >
                  <li>Project</li>
                </Link>
                <Link
                  to="#contact"
                  className="flex items-center mb-8 gap-4 font-medium text-textDark hover:text-textGreen
                cursor-pointer duration-200 nav-link
                "
                  onClick={handelScroll}
                >
                  <li>Contact</li>
                </Link>
              </ul>
              <Link to="#" target="_blank">
                <button className="px-4 py-2 rounded-md text-text-green text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
                  Resume
                </button>
              </Link>
              <div>
                <div className="flex items-center justify-center w-full py-6 gap-4">
                  <Link to="https://github.com/AbolghasemTz" target="_blank">
                    <span
                      className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
                      hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300"
                    >
                      <TbBrandGithub />
                    </span>
                  </Link>
                  <Link to="https://github.com/AbolghasemTz" target="_blank">
                    <span
                      className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
                      hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300"
                    >
                      <SlSocialInstagram />
                    </span>
                  </Link>
                  <Link to="https://github.com/AbolghasemTz" target="_blank">
                    <span
                      className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
                      hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300"
                    >
                      <SlSocialLinkedin />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MobileMenu;
