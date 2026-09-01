import { data } from "./data";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Experience = () => {
  return (
    <div className="timeline" id="experience">
      <h3 id="experienceHeader">Experience</h3>
      <div className="wrapper" id="wrapper">
        <div className="timeline-line"></div>
        {data.map((item, index) => {
          const isCurrent = index === 0;
          const side = index % 2 === 0 ? 'timeline-row--right' : 'timeline-row--left';

          return (
            <AnimationOnScroll
              animateOnce={true}
              animateIn="card-reveal-up"
              delay={index * 60}
              key={item.id}
            >
              <div className={`timeline-row ${side} ${isCurrent ? 'timeline-row--current' : ''}`}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="timeline-marker"
                  aria-label={item.local}
                >
                  <img src={item.img} alt="" />
                </a>
                <ExperienceCard
                  title={item.title}
                  date={item.date}
                  text={item.text}
                  local={item.local}
                  techStack={item.techStack}
                  current={isCurrent}
                />
              </div>
            </AnimationOnScroll>
          );
        })}
        <a href="#experienceHeader" className="back-to-top">
          <i className="fas fa-arrow-up"></i>
          Back to top
        </a>
      </div>
    </div>
  );
};

export default Experience;
