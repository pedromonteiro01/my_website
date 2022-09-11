import "./Skills.css";
import { skills_data } from "./skills-items.js";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-header">
        <img src="img/code.png" alt="" />
        <p className="main-p">Skills</p>
        <p className="element-p">
          I've worked with <span className="element"></span>
        </p>
      </div>
      <ul>
        {skills_data.map((item) => {
          return (
            <li>
              <label key={item.id} htmlFor={item.label}>{item.language}</label>
              <progress
                id={item.label}
                value={item.progress}
                max="100"
                style={{ color: "black" }}
              >
                {" "}
                {item.progress}%{" "}
              </progress>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
