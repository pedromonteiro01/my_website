import { Col } from "react-bootstrap";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <Col size={12} sm={6} md={4}>
    <div className="projects-card">
      <div className="top-card">
        <h2>{props.title}</h2>
        <div>
          {props.yt && (
            <a
              className="yt-icon"
              href={props.yt}
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-youtube"></i>
            </a>
          )}
          <a href={props.git} target="_blank" rel="noreferrer">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="card-content-wrapper">
      <div className="card-content">
        {props.text && <p>{props.text}</p>}
        {props.textLink && props.textLink}
      </div>
      <div className="bottom-card">
        <ul>
          {props.technologies.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      </div>
    </div>
    </Col>
  );
};

export default ProjectCard;
