import React from "react";
import Ermias from "./../../assets/Ermias.png";

const Home = () => {
  return (
    <section id="home" className="relative xl:min-h-screen overflow-hidden">
      <p className="opacity-[.25] text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] 2xl:text-[16rem] font-bold tracking-widest">
        HELLO
      </p>

      <div className="">
        <div className="mb-10">
          <div>
            <h1 className="text-3xl mb-3 lg:text-6xl">I'm</h1>
          </div>
          <div>
            <div className="flex gap-4 text-3xl lg:text-5xl">
              <span className="font-bold">Ermias</span>
              <span className="text-fourth-color font-bold">Tsegu</span>
            </div>
            <span className="border-b-4 sm border-solid block border-secondary-color w-[105px] mt-2"></span>
          </div>
          <div className="mt-5 sm:w-[50%] lg:w-[40%]">
            <p className="text-md sm:text-sm lg:text-lg leading-relaxed">
              A profesional Application developer. With more than Six and half
              years of experiance in System and Application Development, I can
              be a good candidate for your next project.
            </p>
          </div>
          <div className="mt-5 cursor-pointer bg-secondary-color flex gap-4 justify-center rounded-full py-3 sm:w-[300px]">
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
                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>
            <a href="CV-ErmiasTsegu.pdf" download>
              Download CV
            </a>
          </div>
        </div>
        <div className="sm:absolute sm:top-10 sm:right-[-27rem] lg:right-[-20rem] xl:right-[-60px]">
          <img
            src={Ermias}
            alt="Ermias"
            className="sm:w-[36.6%] lg:w-[40%] xl:w-[90%]"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Home;
