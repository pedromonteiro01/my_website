import "./Education.css";
import { EducationData } from "./education-data";

const Education = () => {
  return (
    <div className="education-section">
      <div className="education-section-header">
        <img src="img/graduation-cap.png" alt="" />
        <p className="main-p">Education</p>
      </div>
      <ul>
        {EducationData.map((item) => {
          return (
            <li key={item.id}>
              <div className="li-content">
                <img src={item.img} alt="" />
                <p>
                  {item.text}
                  <br></br>
                  <span>{item.date}</span>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Education;
