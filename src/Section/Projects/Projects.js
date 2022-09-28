import React from "react";
import Title from "../../Components/Title";
import TravelAddis from "./../../assets/traveladdis.png";
import RealTime from "./../../assets/realtimebook.png";

const Projects = () => {
  return (
    <section id="project">
      <div>
        <Title title="PROJECTS" />
        <div className="flex flex-col gap-y-4">
          <div className="md:flex justify-center">
            <div className="md:w-1/2 bg-gradient-to-r from-cyan-500 to-[#6387F2] justify-center items-center flex flex-col py-2">
              <h3 className="text-primary-color text-2xl font-medium">
                Travel Addis
              </h3>
              <p className="px-12 py-4 font-light">
                Laboris do tempor ex adipisicing ex labore. Eiusmod tempor
                excepteur anim ut. Eu et nisi officia ea labore. Ad sint do
                commodo incididunt commodo in nostrud eiusmod aute. Veniam enim
                velit pariatur ipsum anim.
              </p>
              <div className="bg-primary-color py-2 px-10 rounded-full">
                <a
                  className=""
                  href="https://travel-addis.netlify.app/"
                  rel="noopener noreferrer"
                >
                  Visit Project
                </a>
              </div>
            </div>
            <div className="md:w-1/2 ">
              <img src={TravelAddis} alt=""></img>
            </div>
          </div>
          <div className="md:flex justify-center">
            <div className="md:w-1/2">
              <img src={RealTime} alt="" />
            </div>
            <div className="md:w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 justify-center items-center flex flex-col py-2">
              <h3 className="text-primary-color text-2xl font-medium">
                RealTimeBook
              </h3>
              <p className="px-12 py-4 font-light">
                Laboris do tempor ex adipisicing ex labore. Eiusmod tempor
                excepteur anim ut. Eu et nisi officia ea labore. Ad sint do
                commodo incididunt commodo in nostrud eiusmod aute. Veniam enim
                velit pariatur ipsum anim.
              </p>
              <div className="bg-primary-color py-2 px-10 rounded-full">
                <a
                  className=""
                  href="http://realtimebook.herokuapp.com/"
                  rel="noopener noreferrer"
                >
                  Visit Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
