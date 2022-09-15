import LineBreak from "../../components/LineBreak/LineBreak";
import "./About.css";
import profile from './pedro_profile.jpeg';
import { data } from "./data";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const About = () => {
  return (
    <div className="section-about" id="about">
      <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn">
      <div className="img-wrapper">
        <img src={profile} alt="" />
      </div>
      </AnimationOnScroll>
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
