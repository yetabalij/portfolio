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
          <div className="sm:flex justify-center">
            <div className="sm:w-1/2 bg-gradient-to-r from-cyan-500 to-[#6387F2] justify-center items-center flex">
              description
            </div>
            <div className="sm:w-1/2 ">
              <img src={TravelAddis} alt=""></img>
            </div>
          </div>
          <div className="sm:flex justify-center">
            <div className="sm:w-1/2">
              <img src={RealTime} alt="" />
            </div>
            <div className="sm:w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 justify-center items-center flex">
              description
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
