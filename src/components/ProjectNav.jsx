import React from "react";
import { project_nav } from "../constants";

function ProjectNav({changeFilter, filter}) {
  return (
    <div className="w-full bg-white p-5 md:p-6 md:pr-0 rounded-md md:drop-shadow-md">
      <h1 className="heading mb-5">Projects (3)</h1>
      <div className="project-filter flex flex-row gap-3">
        {project_nav.map(project=>{
          return(
            <div onClick={()=>changeFilter(project.flag)} className={`px-4 py-2 border border-sec_grey rounded-lg ${filter==project.flag?"bg-cont_blue text-white":"bg-white text-black"} cursor-pointer`}>{project.name}</div>
          )
        })}
      </div>
    </div>
  );
}

export default ProjectNav;
