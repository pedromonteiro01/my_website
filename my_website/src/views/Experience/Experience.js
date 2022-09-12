import { data } from "./data";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

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
            <ExperienceCard
            key={item.id}
              class={item.class}
              title={item.title}
              date={item.date}
              text={item.text}
              local={item.local}
              link={item.link}
              img={item.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
