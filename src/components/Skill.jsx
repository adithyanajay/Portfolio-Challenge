import React from "react";

function Skill({ skill, percent }) {
  return (
    <div className="w-full flex items-center">
      <div className="skill w-2/6 ">
        <h3 className="text-main_grey text-xs sm:text-sm mb-1">{skill}</h3>
      </div>
      <div className="progress w-4/6 bg-prog_grey rounded-lg h-2">
        <div className={`rounded-lg bg-cont_blue w-${percent}/6 h-2`}></div>
      </div>
    </div>
  );
}

export default Skill;
