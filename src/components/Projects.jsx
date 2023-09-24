import React, { useState } from "react";
import ProjectNav from "./ProjectNav";
import { project } from "../constants";
import ProjectCards from "./ProjectCards";

function Projects() {
  const [filter, setFilter] = useState(3);
  const changeFilter = (flag) => {
    setFilter(flag);
  };
  return (
    <div className="mb-5 w-full "> 
      <ProjectNav filter={filter} changeFilter={changeFilter} />
      <div className="projects mt-5 flex flex-col md:flex-row gap-4 w-full  pb-10 ">
        {project.map((project) => {
          return project.flags.includes(filter) ? (
            <ProjectCards name={project.name} img={project.img} tags={project.tag} content={project.content} />
          ) : null;
        })}
      </div>
    </div>
  );
}

export default Projects;
