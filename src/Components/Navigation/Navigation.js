import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { GoFileCode } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";

import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <div className="fixed top-[85%] left-[50%] translate-x-[-50%] bg-fourth-color text-primary-color px-6 py-3 rounded-full z-10">
      <ul className="flex gap-4">
        <li className="cursor-pointer">
          <Link to="home" spy={true} smooth={true}>
            <AiOutlineHome className="text-xl" />
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="about" spy={true} smooth={true}>
            <MdPersonOutline className="text-xl" />
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="skill" spy={true} smooth={true}>
            <VscTools className="text-xl" />
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="project" spy={true} smooth={true}>
            <GoFileCode className="text-xl" />
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="contact" spy={true} smooth={true}>
            <AiOutlineMail className="text-xl" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
