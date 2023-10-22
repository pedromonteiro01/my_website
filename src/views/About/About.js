import LineBreak from "../../components/LineBreak/LineBreak";
import "./About.css";
import profile from './pedro_profile.jpeg';
import { data } from "./data";
import "animate.css/animate.min.css";

const About = () => {
  return (
    <div className="section-about" id="about">
      <div className="img-wrapper">
        <img src={profile} alt="" />
      </div>
      <h1>Hello there!</h1>
      <LineBreak />
      <div className="paragraphs">
        {data.map((item) => {
            return (
              <p key={item.id}>{item.content}</p>
            );
          })}
      </div>
      <span>
        You can find details{" "}
        <a
          href="https://www.linkedin.com/in/pedromonteiro01/"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </span>
    </div>
  );
};

export default About;
