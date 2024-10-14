import "./Skills.css";
import { SkillsData } from "./skills-data.js";
import ReactTyped from "react-typed";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-header">
        <img src="img/programming.png" alt="" />
        <p className="main-p">Skills</p>
        <p className="element-p">
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
      <ul className="skills-list">
        {SkillsData.map((item) => {
          return (
            <li key={item.id}>
              <label htmlFor={item.label}>{item.language}</label>
              <div className="progress-container">
                <progress id={item.label} value={item.progress} max="100" />
                <div
                  className="progress-circle"
                  style={{
                    left: `${item.progress}%`, // dynamically position the circle
                  }}
                ></div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
