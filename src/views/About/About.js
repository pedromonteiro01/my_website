import "./About.css";
import profile from './pedro_profile.jpeg';
import { data } from "./data";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const About = () => {
  return (
    <div className="section-about-wrapper" id="about">
      <div className="section-about">
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__animated animate__fadeInLeft"
          className="profile-wrapper"
        >
          <div className="img-wrapper2"></div>
          <div className="img-wrapper">
            <img src={profile} alt="Pedro Monteiro" />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__animated animate__fadeInRight"
          className="section-about-content-2"
        >
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
          <a
            className="about-linkedin-link"
            href="https://www.linkedin.com/in/pedromonteiro01/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
            View my LinkedIn
          </a>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default About;
