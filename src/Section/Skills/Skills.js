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
        <SkillCard>
          <img src={JavasCriptIcon} />
        </SkillCard>
        <SkillCard>
          <img src={ReactIcon3} />
        </SkillCard>
        <SkillCard>
          <img src={MongoDBIcon} />
        </SkillCard>
        <SkillCard>
          <img src={NodeJs}></img>
        </SkillCard>
        <SkillCard>
          <img src={Express} />
        </SkillCard>
      </div>

      <div className="sm:flex justify-center gap-4">
        <SkillCard>
          <img src={ReduxIcon} />
        </SkillCard>
        <SkillCard>
          <img src={html5} />
        </SkillCard>
        <SkillCard>
          <img src={Css3} />
        </SkillCard>
        <SkillCard>
          <img src={TailwindCss}></img>
        </SkillCard>
      </div>
      <div className="sm:flex justify-center gap-4">
        <SkillCard>
          <img src={MaterialIcon} />
        </SkillCard>
        <SkillCard>
          <img src={BootStarpIcon} />
        </SkillCard>
        <SkillCard>
          <img src={GitIcon} />
        </SkillCard>
      </div>
      <div className="sm:flex justify-center gap-4">
        <SkillCard>
          <img src={MySql} />
        </SkillCard>
        <SkillCard>
          <img src={Linux} />
        </SkillCard>
      </div>
      <div className="sm:flex justify-center gap-4">
        <SkillCard>
          <span className="text-fourth-color tracking-widest text-4xl flex justify-center items-center">
            ...
          </span>
        </SkillCard>
      </div>
    </section>
  );
};

export default Skills;
