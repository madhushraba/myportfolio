import React from "react";
import About from "./about/About";
import Aboutme from "./aboutme/Aboutme";
import "./body.css";
import Contact from "./contact/Contact";
import Projects from "./projects/index";
import Footer from "./footer/Footer";
import Skills from "./skills/Skills";
//import Work from "./work/Work";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>

      <section>
        <Aboutme />
      </section>

      <section id="project">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="work">{/* <Work /> */}</section>

      <section id="contact">
        <Contact />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Body;

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
