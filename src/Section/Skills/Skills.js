import React from "react";
import Title from "./../../Components/Title";
import { BiDesktop } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";

const Skills = () => {
  return (
    <section id="skill">
      <Title title="SKILLS" />
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-y-4 gap-x-32">
          <div className=" rounded-xl py-16 px-16 border-2 border-solid border-gradient-to-r from-cyan-500 to-blue-500">
            <div className="flex justify-center mb-4">
              <BiDesktop className="text-7xl text-fourth-color" />
            </div>
            <div className="flex justify-center">
              <h1 className="text-3xl font-bold text-fourth-color mb-4">
                Frontend Skills
              </h1>
            </div>
            <p>
              Fugiat ipsum ut in fugiat voluptate irure elit ad non voluptate
              nisi laboris aliqua duis. Do minim incididunt consectetur
              excepteur consequat amet amet enim Lorem sint sint.
            </p>
            <div>
              <AiOutlineCheck />
            </div>
          </div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
