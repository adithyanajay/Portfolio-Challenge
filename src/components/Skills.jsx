import React from "react";
import Skill from "./Skill";
import { skills } from "../constants";

function Skills() {
  return (
    <div className="w-full bg-white p-5 rounded-md md:drop-shadow-md">
      <h2 className="uppercase font-bold text-main_grey mb-3">Front end</h2>
      {skills.map((skill, index) => {
        return (
          <Skill percent={skill.percent} skill={skill.skill} key={index} />
        );
      })}
    </div>
  );
}

export default Skills;
