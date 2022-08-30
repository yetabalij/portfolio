import React from "react";
import Ermias from "./../../assets/Ermias.png";

const Home = () => {
  return (
    <section
      className="sm:flex justify-between align-center mt-10 overflow-hidden"
      id="home"
    >
      <div className="">
        <p className="opacity-[.2] text-[4rem] sm:text-[5.5rem] md:text-[6rem] lg:text-[7rem] xl:text-[10rem] 2xl:text-[12rem] font-bold tracking-widest">
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
        <div className="mt-10 w-[50%]">
          <p>
            A profesional Application Software developer. With more than Six
            years of Experience in System and Application Software Development,
            I can be a good candidate for your next project.
          </p>
        </div>
        <div className="mt-10 bg-secondary-color cursor-pointer w-[200px] py-2 flex justify-center rounded-full">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
              />
            </svg>
          </span>

          <a href="CV-ErmiasTsegu.pdf" download>
            <button className="ml-2">Download Cv</button>
          </a>
        </div>
      </div>

      <div className="sm:w-[100%] mt-16 sm:mt-5 md:w-1/2">
        <img alt="Ermias" src={Ermias} />
      </div>
    </section>
  );
};

export default Home;
