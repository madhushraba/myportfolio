import React from "react";
import "./skills.css";

import SkillCard from "./skill-card";
import Separator from "../../common/separator";
import { SkillsData } from "../../data/skill";

function Skills() {
  const data = SkillsData;
  return (
    <div className="skills">
      <Separator />
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section">
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill) => {
                  return <SkillCard skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;

//import React from 'react'

// function Skills() {
//     return (
//         <div>
//             SKILLS
//         </div>
//     )
// }

// export default Skills
