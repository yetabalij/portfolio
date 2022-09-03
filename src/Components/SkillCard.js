import React from "react";

const SkillCard = (props) => {
  return (
    <div className="bg-third-color p-8 rounded-xl sm:w-[18%] mb-2 sm:mb-4">
      {props.children}
    </div>
  );
};

export default SkillCard;
