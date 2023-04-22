import React from "react";
import {Link} from 'react-router-dom';
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";
function Footer() {
  return (
    <footer>
      <div className="hidden md:inline-flex lg:hidden items-center justify-center w-full py-6 gap-4">
        <Link to="https://github.com/AbolghasemTz" target="_blank" >
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
    </footer>
  );
}

export default Footer;
