import "./Education.css";
import { EducationData } from "./education-data";

const Education = () => {
  return (
    <div className="education-section">
      <div className="education-section-header">
        <img src="img/mortarboard.png" alt="" />
        <p className="main-p">Education</p>
      </div>
      <ul>
        {EducationData.map((item) => {
          return (
            <li key={item.id} className={`${item.class}-${item.id}`}>
              <div className="li-content">
                <div>
                <img src={item.img} alt="" />
                </div>
                <div className="education-item">
                  <span>{item.date}</span>
                  {item.text}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Education;
