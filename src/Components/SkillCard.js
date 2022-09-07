import React from "react";

const SkillCard = (props) => {
  return (
    <div className="bg-third-color p-8 rounded-xl sm:w-[18%] mb-2 sm:mb-4 flex flex-col justify-center items-center sm:text-sm lg:text-xl text-gray-300 font-medium">
      {props.children}
      <h3 className="text-center mt-5">{props.name}</h3>
    </div>
  );
};

export default SkillCard;
