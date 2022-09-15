import "./Skills.css";
import { SkillsData } from "./skills-data.js";
import { TypeAnimation } from 'react-type-animation';

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-header">
        <img src="img/code.png" alt="" />
        <p className="main-p">Skills</p>
        <p className="element-p">
          I've worked with <span className="element">    
      <TypeAnimation
      sequence={[
        'Python',
        1000,
        'Java',
        2000,
        'C/C++',  
        3000,
        'HTML/CSS',  
        4000,
        'Javascript',  
        5000,
        'ReactJS',  
        6000,
        'PHP',  
        7000,
        'Spring Boot',  
        8000,
        'Django',  
        9000,
        'C#', 
        10000,
        'SQL',  
        11000,
        'MYSQL',  
        12000,
        'Docker',  
        13000,
        'Flutter',  
        14000,
        'Dart',  
        15000,
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      speed={1}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '16px' }}
    /></span>
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
