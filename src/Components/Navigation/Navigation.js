import React from "react";

import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <div className="fixed top-[85%] left-[50%] translate-x-[-50%] bg-red-200 px-6 py-4 rounded-full">
      <ul className="flex gap-2">
        <li>
          <Link to="home" spy={true} smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true}>
            About
          </Link>
        </li>
        <li>
          <Link to="skill" spy={true} smooth={true}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="project" spy={true} smooth={true}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true}>
            Contacts
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
