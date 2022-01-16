import React from "react";
import "./projects.css";
import ProjectCard from "./project-card";
import { ProjectData } from "../../data/projects";
//import { ProjectData } from "../../../data/projects";
import Separator from "../../common/separator/index";
function Projects() {

  const data = ProjectData
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;











// import React from 'react'
// import { ProjectData } from '../../data/projects'
// import ProjectCard from './project-card'
// import './project.css'

// function Project() {
//     const data =ProjectData
//     return (
//         <div className='projects'>
//             <label className='sectiontitle' htmlFor=""> PROJECTS</label>
//             <div>
//                 {data.map((projects)=>{
//                     return <ProjectCard projects={projects}/>
//                 } )}
//             </div>
//         </div>
//     )
// }

// export default Project


