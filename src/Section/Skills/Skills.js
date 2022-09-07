import React from "react";
import Title from "./../../Components/Title";
import SkillCard from "../../Components/SkillCard";
import html5 from "./../../assets/html5.png";
import ReactIcon3 from "./../../assets/ReactIcon3.png";
import JavasCriptIcon from "./../../assets/javascript.png";
import MongoDBIcon from "./../../assets/mongodb.png";
import NodeJs from "./../../assets/node-js.png";
import Express from "./../../assets/express.png";
import ReduxIcon from "./../../assets/redux.png";
import Css3 from "./../../assets/css3.png";
import TailwindCss from "./../../assets/tailwind-css.png";
import BootStarpIcon from "./../../assets/bootstrap.png";
import GitIcon from "./../../assets/git.png";
import Linux from "./../../assets/linux.png";
import MaterialIcon from "./../../assets/material-ui.png";
import MySql from "./../../assets/mysql.png";

const Skills = () => {
  return (
    <section id="skill">
      <Title title="SKILLS" />
      <div className="sm:flex justify-center gap-4">
        <SkillCard name="Javascript">
          <img src={JavasCriptIcon} alt="" className="w-1/2 text-center" />
        </SkillCard>
        <SkillCard name="React">
          <img src={ReactIcon3} alt="" className="w-1/2 text-center" />
        </SkillCard>
        <SkillCard name="MongoDB">
          <img src={MongoDBIcon} alt="" className="w-1/2 text-center" />
        </SkillCard>
        <SkillCard name="Node">
          <img src={NodeJs} alt="" className="w-1/2 text-center" />
        </SkillCard>
        <SkillCard name="Express">
          <img src={Express} alt="" className="w-1/2 text-center" />
        </SkillCard>
      </div>

      <div className="sm:flex justify-center gap-4">
        <SkillCard name="Redux">
          <img src={ReduxIcon} alt="" className="w-1/2 text-center" />
        </SkillCard>
        <SkillCard name="HTML5">
          <img src={html5} alt="" className="w-1/2 text-center" />
        </SkillCard>
        <SkillCard name="CSS3">
          <img src={Css3} alt="" className="w-1/2 text-center" />
        </SkillCard>
        <SkillCard name="Tailwind">
          <img src={TailwindCss} alt="" className="w-1/2 text-center" />
        </SkillCard>
      </div>
      <div className="sm:flex justify-center gap-4">
        <SkillCard name="MaterialUI">
          <img src={MaterialIcon} alt="" className="w-1/2 text-center" />
        </SkillCard>
        <SkillCard name="BootStrap">
          <img src={BootStarpIcon} alt="" className="w-1/2 text-center" />
        </SkillCard>
        <SkillCard name="Git">
          <img src={GitIcon} alt="" className="w-1/2 text-center" />
        </SkillCard>
      </div>
      <div className="sm:flex justify-center gap-4">
        <SkillCard name="MySql">
          <img src={MySql} alt="" className="w-1/2 text-center" />
        </SkillCard>
        <SkillCard name="Linux">
          <img src={Linux} alt="" className="w-1/2 text-center" />
        </SkillCard>
      </div>
    </section>
  );
};

export default Skills;
