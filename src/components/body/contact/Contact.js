import React from "react";
import "./contact.css";
//import SocialContact from "../../common/social-contact/index";
import SocialContact from "../../common/Social";
import Separator from "../../common/separator/index";

function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact />
        </div>
        {/* <div className="download">
          <a download href={require("../../../assets/Madhushraba_Resume.pdf")}>
            <i class="fi-rr-cloud-download download-icon" />
            Download Resume
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Contact;

// import React from 'react'
// import Social from '../../common/Social'
// //import { SocialData } from '../../data/social'

// function Contact() {
//     return (
//         <div>
// CONTACT
//         </div>
//     )
// }

// export default Contact
