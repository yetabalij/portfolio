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
          <div className="lg:flex justify-center">
            <div className="lg:w-1/2 bg-gradient-to-r from-cyan-500 to-[#6387F2] justify-center items-center flex flex-col py-2">
              <h3 className="text-primary-color text-2xl font-medium">
                Travel Addis
              </h3>
              <p className="px-12 py-4 font-light">
                The main purpose of this project is to demonstrate the following
                skills. Changing UX/UI to Responsive design, Tailwind CSS,
                Styled-Components, React Component-based Design and development,
                React Router, among others.
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
            <div className="lg:w-1/2 ">
              <img src={TravelAddis} alt=""></img>
            </div>
          </div>
          <div className="lg:flex justify-center">
            <div className="lg:w-1/2">
              <img src={RealTime} alt="" />
            </div>
            <div className="lg:w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 justify-center items-center flex flex-col py-2">
              <h3 className="text-primary-color text-2xl font-medium">
                RealTimeBook
              </h3>
              <p className="px-12 py-4 font-light">
                In this Project, a MERN stack software development skill is
                demonstrated. Skills for the backend and frontend are applied.
                Responsive design and development, React, Redux, Tailwindcss,
                protected route, form validation, RESTful API, and other skills
                are applied.
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
