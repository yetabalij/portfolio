import React from "react";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";

const About = () => {
  return (
    <section id="about" className="mt-24">
      <div className="flex justify-center ">
        <div className="">
          <h1 className="opacity-[.4] text-[4rem] sm:text-[5.5rem] md:text-[6rem] lg:text-[7rem] xl:text-[10rem] 2xl:text-[12rem] font-bold tracking-widest">
            ABOUT
          </h1>
        </div>
      </div>
      <div className="flex justify-between">
        <LeftSection />
        <RightSection />
      </div>
    </section>
  );
};

export default About;
