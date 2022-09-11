import "./EmailButton.css";

const EmailButton = (props) => {
  return (
    <a href={props.emailTo} target="_blank" rel="noreferrer">
      <button className="email-button">{props.text}</button>
    </a>
  );
};

export default EmailButton;
