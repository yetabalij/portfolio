import React from "react";
import Ermias from "./../../assets/Ermias.png";

const Home = () => {
  return (
    <section className="sm:flex gap-1 mt-10 overflow-hidden h-screen" id="home">
      <div className="">
        <h1 className="opacity-10 text-[4rem] sm:text-[5.5rem] md:text-[10rem] font-bold tracking-widest">
          HELLO
        </h1>
        <p>I'am</p>
      </div>

      <div>
        <img alt="Ermias" src={Ermias} />
      </div>
    </section>
  );
};

export default Home;
