import React from "react";

const Card = (props) => {
  return (
    <div className="md:w-[33%] min-h-[400px]">
      <div className="bg-third-color rounded-md mb-5 lg:mb-0 flex flex-col justify-center items-center  px-6 md:px-14 py-10">
        <div className="flex justify-center">
          <div className="border-2 border-dotted border-white rounded-full h-[80px] w-[80px] flex justify-center items-center">
            {props.children}
          </div>
        </div>
        <div className="flex justify-center text-fourth-color my-3 text-3xl font-semibold">
          {props.biography}
        </div>
        <div>
          <p className="text-sm lg:text-md font-light lg:font-normal tracking-wide leading-6 text-gray-300">
            {props.paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
