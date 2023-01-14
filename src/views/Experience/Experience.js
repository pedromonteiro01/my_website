import { data } from "./data";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Experience = () => {
  return (
    <div className="timeline">
      <h3 id="experienceHeader">Experience</h3>
      <div className="wrapper" id="wrapper">
        <div className="center-line">
          <a href="#experienceHeader" class="scroll-icon">
            <i class="fas fa-caret-up"></i>
          </a>
        </div>
        {data.map((item) => {
          return (
            <>
            <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn">
            <ExperienceCard
              icon={item.icon}
              key={item.id}
              class={item.class}
              title={item.title}
              date={item.date}
              text={item.text}
              local={item.local}
              link={item.link}
              img={item.img}
            />
            </AnimationOnScroll>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
