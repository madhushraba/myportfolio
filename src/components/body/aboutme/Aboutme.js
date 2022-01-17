// import Separator from "../../common/separator";
import "./aboutme.css";
import fbpic from "./fbpic.jpg";

const Aboutme = () => {
  return (
    <div className="aboutme">
      {/* <Separator/>  */}
      {/* <h1 className="a-title">About Me</h1> */}
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={fbpic} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        {/* <Separator/> */}
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am currently in my 3rd year in Maulana Abul Kalam Azad University of
          Technology pursuing Bachelor of Technology in Computer Science and
          Engineering.
        </p>
        <p className="a-desc">
          As a web developer, I enjoy bridging the gap between engineering and
          design — combining my technical knowledge with my keen eye for design
          to create a beautiful product. My goal is to always build applications
          that are scalable and efficient under the hood while providing
          engaging, pixel-perfect user experiences.
          <br /> When I'm not in front of a computer screen, I'm probably
          reading books, travelling, doing curricular activities or playing
          video games.
        </p>

        <div className="download">
          {/* <a download href={require("../../../assets/Madhushraba_Resume.pdf").default}> */}

          <a download href={require("../../../assets/Madhushraba_Resume.pdf")}>
            <i class="fi-rr-cloud-download download-icon" />
            Download Resume
          </a>
        </div>

        {/* <div className="a-award">
          
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Aboutme;
