import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { GoFileCode } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";

import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <div className="bg-fourth-color text-primary-color flex justify-center gap-4 rounded-full py-3 md:py-2 px-10">
      <li className="cursor-pointer">
        <Link to="home" spy={true} smooth={true}>
          <AiOutlineHome className="text-xl lg:text-3xl md:text-xl" />
        </Link>
      </li>
      <li className="cursor-pointer">
        <Link to="about" spy={true} smooth={true}>
          <MdPersonOutline className="text-xl lg:text-3xl md:text-xl" />
        </Link>
      </li>
      <li className="cursor-pointer">
        <Link to="skill" spy={true} smooth={true}>
          <VscTools className="text-xl lg:text-3xl md:text-xl" />
        </Link>
      </li>
      <li className="cursor-pointer">
        <Link to="project" spy={true} smooth={true}>
          <GoFileCode className="text-xl lg:text-3xl md:text-xl" />
        </Link>
      </li>
      <li className="cursor-pointer">
        <Link to="contact" spy={true} smooth={true}>
          <AiOutlineMail className="text-xl lg:text-3xl md:text-xl" />
        </Link>
      </li>
    </div>
  );
};

export default Navigation;
