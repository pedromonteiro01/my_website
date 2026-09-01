import { data } from "./data";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Experience = () => {
  return (
    <div className="timeline" id="experience">
      <h3 id="experienceHeader">Experience</h3>
      <div className="wrapper" id="wrapper">
        <div className="center-line">
          <a href="#experienceHeader" className="scroll-icon">
            <i className="fas fa-caret-up"></i>
          </a>
        </div>
        {data.map((item, index) => {
          // Alternate reveal direction per row
          const animationEffect = index % 2 === 0 ? "card-reveal-left" : "card-reveal-right";

          return (
            <AnimationOnScroll
              animateOnce={true}
              animateIn={animationEffect}
              delay={index * 80}
              key={item.id}
            >
              <ExperienceCard
                icon={item.icon}
                class={item.class}
                title={item.title}
                date={item.date}
                text={item.text}
                local={item.local}
                link={item.link}
                img={item.img}
                techStack={item.techStack}
              />
            </AnimationOnScroll>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
