import React from "react";
import { experiences } from "../constants";
import Experience from "./Experience";

function Experiences() {
  return (
    <div className="experiences w-full bg-white p-5 md:p-6 md:pr-0 rounded-md md:drop-shadow-md flex flex-col gap-10">
      <h1 className="text-main_grey font-semibold text-xl ">Experiences</h1>
      {experiences.map((experience, index) => {
        return (
          <Experience
            img={experience.img}
            position={experience.position}
            period={experience.date}
            content={experience.content}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Experiences;
