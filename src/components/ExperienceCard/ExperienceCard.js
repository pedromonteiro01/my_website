import "./ExperienceCard.css";

const ExperienceCard = (props) => {

  return (
    <section className="experience-card">
      <div className="details">
        <span className="title">{props.title}</span>
        <span className="local">{props.local}</span>
      </div>
      <div className="meta-row">
        <span className="date">{props.date}</span>
        {props.current && <span className="current-badge">Current</span>}
      </div>
      <p>
        {props.text}
      </p>
      {props.techStack && props.techStack.length > 0 && (
        <div className="tech-stack">
          {props.techStack.map((tech, index) => (
            <span key={index} className="tech-stack-item">{tech}</span>
          ))}
        </div>
      )}
    </section>
  );
};

export default ExperienceCard;
