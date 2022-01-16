import React from "react";
import Separator from "../../common/separator";
import Social from "../../common/Social";
//import { SocialData } from "../../data/social";
import "./about.css";
// import Separator from "../../common/separator/index";


function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello i am <br/>
          <span className="info-name">
              MADHUSHRABA
          </span>
          <br/>
          a web developer, who likes to create new stuffs.
        </div>
        <div className="about-pic">
            <img src={require('../../../assets/Programmer.png')} alt="pic" className="pic" />
        </div>
      </div>
      <div className="about-btm"><Social/></div>
      <Separator/>
    </div>
    
  );
}

export default About;
