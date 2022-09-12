import React from "react";
import { HiPhone } from "react-icons/hi";
import { AiFillMail } from "react-icons/ai";
import { MdOutlineAttachEmail } from "react-icons/md";
import { Link } from "react-scroll";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";

const Footer = () => {
  return (
    <div className="h-full bg-third-color py-16 overflow-hidden">
      <div className="w-[80%] mx-auto flex flex-col sm:flex-row justify-center sm:justify-between">
        <div>
          <div className="flex gap-2">
            <h3 className="font-bold">
              Ermias
              <span className="block border-b-2 border-solid border-secondary-color mt-1" />
            </h3>
            <h3>
              <span className="text-fourth-color font-bold"> Tsegu</span>
            </h3>
          </div>
          <p className="w-1/2 2xl:w-1/3 mt-4 text-sm">
            React and MERN Stack Application Developer.
          </p>
        </div>
        <div className="mt-3 sm:mt-0">
          <h3 className="mb-2 text-fourth-color font-bold">Get in Touch</h3>
          <div className="flex items-center">
            <span className="text-secondary-color mr-1">
              <HiPhone />
            </span>
            <p>+251910640691</p>
          </div>
          <div className="flex items-center">
            <span className="text-secondary-color mr-1">
              <AiFillMail />
            </span>
            <p>54146, Addis Ababa.</p>
          </div>
          <div className="flex items-center">
            <span className="text-secondary-color mr-1">
              <MdOutlineAttachEmail />
            </span>
            <p>ermiastsegu2015@gmail.com</p>
          </div>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-2">
          <h3 className="text-fourth-color font-bold">Pages</h3>
          <div className="flex flex-col">
            <Link to="home" spy={true} smooth={true}>
              Home
            </Link>
            <Link to="about" spy={true} smooth={true}>
              About
            </Link>
            <Link to="skill" spy={true} smooth={true}>
              Skills
            </Link>
            <Link to="project" spy={true} smooth={true}>
              Projects
            </Link>
            <Link to="contact" spy={true} smooth={true}>
              Contacts
            </Link>
          </div>
        </div>
        <div className="mt-3 sm:mt-0">
          <h3 className="text-fourth-color font-bold">Social Media</h3>
          <div className="flex flex-row gap-2">
            <a href="https://github.com/yetabalij" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ermias-tsegu-gizaw"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://www.youtube.com/channel/UC2bDT9qowtiryrmgKm2HbpQ"
              rel="noopener noreferrer"
            >
              <ImYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
