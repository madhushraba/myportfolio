// import React from "react";

// function ProjectCard(data) {
//   return (
//     <div className="data-card">
//       <div className="proinfo">
//         <label className="projtitle">{data.title}</label>
//         <div className="data-links">
//             {data.demo && (
//                 <a className="datalinnk" href={data.demo}>
//                     <div className="linkbuttton">
//                         <i class="fi-rr-globe">demo</i>
//                     </div>
//                 </a>
//             )}
//         </div>
//       </div>
//       <img src={data.image} alt="" className="prophoto" />
//     </div>
//   );
// }

// export default ProjectCard;

import React from "react";
import "./project-card.css";
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
                <i class="fi-rr-globe"></i>
                Demo
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github}>
              <div className="link-button">
                <i class="devicon-github-original colored"></i> GIthub
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <img src={project.image} className="project-photo" alt="" />
    </div>
  );
}

export default ProjectCard;
