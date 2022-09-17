import "./Skills.css";
import { SkillsData } from "./skills-data.js";
import ReactTyped from "react-typed";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-header">
        <img src="img/code.png" alt="" />
        <p className="main-p">Skills</p>
        <p className="element-p">
          I've worked with <span className="element">   
          <ReactTyped
      strings={[
        'Python',
        'Java',
        'C/C++',  
        'HTML/CSS',  
        'Javascript',  
        'ReactJS',  
        'PHP',  
        'Spring Boot', 
        'Django', 
        'C#', 
        'SQL',  
        'MYSQL',  
        'Docker',  
        'Flutter',  
        'Dart',  
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        /> 
      </span>
        </p>
      </div>
      <ul>
        {SkillsData.map((item) => {
          return (
            <li key={item.id}>
              <label htmlFor={item.label}>{item.language}</label>
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
