import React, { useRef } from "react";

import {Link} from "react-router-dom"
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

import Logo from '../assets/images/logo.png'

function Navbar(props) {
  const handelScroll = (e) => {
    e.preventDefault();
    const to = e.currentTarget.href;
    console.log(to);
    const targetId = to.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });

    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };
  return (
    <div className="w-full shadow-md h-20 lg:h-[12] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-body font-[400] flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img className="w-20" src={Logo} alt="Logo" />
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link
              to="#home"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen
                cursor-pointer duration-200 nav-link 
                "
              onClick={handelScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
                className="text-lg"
              >
                Home
              </motion.li>
            </Link>
            <Link
              to="#about"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen
                cursor-pointer duration-200 nav-link
                "
              onClick={handelScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-lg"
              >
                About
              </motion.li>
            </Link>

            <Link
              to="#project"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen
                cursor-pointer duration-200 nav-link
                "
              onClick={handelScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-lg"
              >
                Project
              </motion.li>
            </Link>
            <Link
              to="#contact"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen
                cursor-pointer duration-200 nav-link
                "
              onClick={handelScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="text-lg"
              >
                Contact
              </motion.li>
            </Link>
          </ul>
          <Link to="#" target="_blank">
            <motion.button
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="px-4 py-2 rounded-md text-text-green text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <MobileMenu handelScroll={handelScroll} />
      </div>
    </div>
  );
}

export default Navbar;
