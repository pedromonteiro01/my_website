import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
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
      <div className="card-content">
        <p>{props.text}</p>
      </div>
      <div className="bottom-card">
        <ul>
          {props.technologies.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
