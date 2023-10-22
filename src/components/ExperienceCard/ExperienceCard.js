import "./ExperienceCard.css";

const ExperienceCard = (props) => {

  return (
    <div class={props.class}>
      <section>
        <div className="icon">
          {props.icon}
        </div>
        <div className="details">
          <span className="title">{props.title}</span>
          <span className="date">{props.date}</span>
        </div>
        <p>
          {props.text}
        </p>
        {props.techStack && (
          <div className="tech-stack">
            {props.techStack.map((tech, index) => (
              <span key={index} className="tech-stack-item">{tech}</span>
            ))}
          </div>
        )}
        <div className="bottom">
          <span>{props.local}</span>
          <a href={props.link} target="_blank" rel="noreferrer">
            <img src={props.img} alt="" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ExperienceCard;
