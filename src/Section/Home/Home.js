import React from "react";
import Ermias from "./../../assets/Ermias.png";

const Home = () => {
  return (
    <section
      className="sm:flex justify-between align-center mt-10 overflow-hidden h-screen"
      id="home"
    >
      <div className="">
        <p className="opacity-[.2] text-[4rem] sm:text-[5.5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] font-bold tracking-widest">
          HELLO
        </p>
        <div className="">
          <p className="text-4xl">I'm</p>
          <div className="text-4xl mt-4 flex gap-2">
            <div>
              <p>Ermias</p>
              <span className="border-b-2 border-fourth-color border-solid w-20 content-none block mt-2 ml-1"></span>
            </div>
            <p className="block">
              <span className="font-bold text-secondary-color">Tsegu</span>
            </p>
          </div>
        </div>
      </div>

      <div className="sm:w-1/3 md:w-1/2">
        <img alt="Ermias" src={Ermias} />
      </div>
    </section>
  );
};

export default Home;
