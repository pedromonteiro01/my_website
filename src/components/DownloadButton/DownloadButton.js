import "./DownloadButton.css";

const DownloadButton = (props) => {
  return (
    <a href={props.path} className="download-button-link" target="_blank" rel="noreferrer">
      <button className="download-button">
        <i className="far fa-file-pdf download-button-icon"></i>
        <span className="download-button-text">{props.desc}</span>
        <i className="fas fa-arrow-down download-button-arrow"></i>
      </button>
    </a>
  );
};

export default DownloadButton;
