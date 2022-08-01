import React from "react";
import Ermias from "./../../assets/Ermias.png";

const Home = () => {
  return (
    <section className="flex justify-between pt-10 " id="home">
      <div className="opacity-10 text-[12rem] font-bold tracking-widest">
        HELLO
      </div>

      <div>
        <img alt="Ermias" src={Ermias} className="w-full" />
      </div>
    </section>
  );
};

export default Home;
