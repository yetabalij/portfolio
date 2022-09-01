import React from "react";

const Title = (props) => {
  return (
    <div className="flex justify-center mt-20">
      <h1 className="opacity-[.3] text-[4rem] sm:text-[5.5rem] md:text-[6rem] lg:text-[7rem] xl:text-[10rem] 2xl:text-[11rem] font-bold tracking-widest">
        {props.title}
      </h1>
    </div>
  );
};

export default Title;
