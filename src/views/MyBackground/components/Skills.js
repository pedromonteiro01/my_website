import { useState } from "react";
import "./SectionHeader.css";
import "./Skills.css";
import { SkillsData } from "./skills-data.js";
import ReactTyped from "react-typed";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Skills = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="skills">
      <div className="mb-header">
        <div className="mb-icon-badge">
          <i className="fas fa-code"></i>
        </div>
        <h4 className="mb-section-title">Skills</h4>
        <p className="mb-subtitle">
          I've worked with{" "}
          <span className="element">
            <ReactTyped
              strings={[
                "Python",
                "Java",
                "C/C++",
                "HTML/CSS",
                "Javascript",
                "ReactJS",
                "PHP",
                "Spring Boot",
                "Django",
                "C#",
                "ASP .NET Core 6",
                "SQL",
                "MYSQL",
                "Docker",
                "Kubernetes",
                "Flutter",
                "Dart",
                "Nginx",
              ]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
          </span>
        </p>
      </div>
      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate__animated animate__fadeIn"
        afterAnimatedIn={() => setRevealed(true)}
      >
        <ul className="skills-list">
          {SkillsData.map((item, index) => {
            return (
              <li key={item.id}>
                <div className="skill-info">
                  <span className="skill-name">{item.language}</span>
                  <span className="skill-percent">{item.progress}%</span>
                </div>
                <div
                  className="progress-track"
                  role="progressbar"
                  aria-label={item.language}
                  aria-valuenow={item.progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-fill"
                    style={{
                      width: revealed ? `${item.progress}%` : "0%",
                      transitionDelay: `${index * 90}ms`,
                    }}
                  ></div>
                </div>
              </li>
            );
          })}
        </ul>
      </AnimationOnScroll>
    </div>
  );
};

export default Skills;
