import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";

import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <div className="fixed top-[85%] left-[50%] translate-x-[-50%] bg-fourth-color text-primary-color px-6 py-4 rounded-full">
      <ul className="flex gap-2">
        <li className="cursor-pointer">
          <Link to="home" spy={true} smooth={true}>
            <AiOutlineHome />
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="about" spy={true} smooth={true}>
            <MdPersonOutline />
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="skill" spy={true} smooth={true}>
            Skills
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="project" spy={true} smooth={true}>
            Projects
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="contact" spy={true} smooth={true}>
            Contacts
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
