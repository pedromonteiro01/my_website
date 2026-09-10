import "./ProgressBar.css";

const ProgressBar = ({ value, revealed, delay = 0 }) => (
  <span
    className="progress-track"
    role="progressbar"
    aria-valuenow={value}
    aria-valuemin={0}
    aria-valuemax={100}
  >
    <span
      className="progress-fill"
      style={{ width: revealed ? `${value}%` : "0%", transitionDelay: `${delay}ms` }}
    />
  </span>
);

export default ProgressBar;
