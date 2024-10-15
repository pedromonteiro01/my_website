import "./About.css";
import profile from './pedro_profile.jpeg';
import bg from './bg.png';
import { data } from "./data";
import "animate.css/animate.min.css";

const About = () => {
  return (
    <>
      <div className="section-about" id="about">
        <div className="profile-wrapper">
          <div className="img-wrapper">
            <img src={profile} alt="" />
          </div>
          <div className="img-wrapper2">
            <img src={bg} alt="" />
          </div>
        </div>
        <div className="section-about-content-2">
          <div className="header-section-content">
            <h1>About</h1>
          </div>
          <div className="paragraphs">
            {data.map((item) => {
              return (
                <p key={item.id}>{item.content}</p>
              );
            })}
          </div>
        </div>
      </div>
      <span className="linkedin-wrapper">
        You can find details{" "}
        <a
          href="https://www.linkedin.com/in/pedromonteiro01/"
          target="_blank"
          rel="noreferrer"
        > here
        </a>
        .
      </span>
    </>
  );
};

export default About;
