import React from "react";
import Ermias from "./../../assets/Ermias.png";

const Home = () => {
  return (
    <section
      className="sm:flex justify-between pt-10 overflow-hidden "
      id="home"
    >
      <div className="opacity-10 text-[4rem] sm:text-[5.5rem] md:text-[10rem] font-bold tracking-widest">
        HELLO
      </div>

      <div>
        <img alt="Ermias" src={Ermias} className="w-full" />
      </div>
    </section>
  );
};

export default Home;
