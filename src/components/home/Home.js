import React from "react";
import Body from "../body/Body";
//import Footer from "../body/footer/Footer";
import Header from "../header/Header";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="">
        <Header />
      </div>

      <div className="">
        <Body />
      </div>
    </div>
  );
}

export default Home;
