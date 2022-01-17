import React from "react";
import "./mobile.css";

function Mobile({ isOpen, setisOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setisOpen(!isOpen)}>
        <i class="fi fi-rr-cross-circle"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#project">
            <i class="fi fi-rr-book-alt"></i>
          </a>
          {/* <i class="fi fi-rr-browser option-icon"></i></a> */}
        </div>
        <div className="mobile-option">
          <a href="#aboutme">
            <i class="fi fi-rr-computer"></i>
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <i class="fi fi-rr-browser"></i>
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact">
            <i class="fi fi-rr-user-remove"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
