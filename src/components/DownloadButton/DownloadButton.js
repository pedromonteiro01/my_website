import "./DownloadButton.css";

const DownloadButton = (props) => {
  return (
    <a href={props.path} target="_blank" rel="noreferrer">
      <button className="download-button">
        {props.desc}
        <i class="far fa-file-pdf"></i>
      </button>
    </a>
  );
};

export default DownloadButton;
