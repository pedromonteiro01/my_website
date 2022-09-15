import "./ExperienceCard.css";

const ExperienceCard = (props) => {
  return (
    <div class={props.class}>
    <section>
      <i className="icon fas fa-star"></i>
      <div className="details">
        <span className="title">{props.title}</span>
        <span>{props.date}</span>
      </div>
      <p>
        {props.text}
      </p>
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
