import "./TitleBar.css";

const TitleBar = ({ onToggleSidebar }) => (
  <header className="title-bar">
    <div className="title-bar-traffic" aria-hidden="true">
      <span className="tl-dot tl-red" />
      <span className="tl-dot tl-yellow" />
      <span className="tl-dot tl-green" />
    </div>
    <button
      className="title-bar-menu-btn"
      onClick={onToggleSidebar}
      aria-label="Toggle explorer"
    >
      <i className="fas fa-bars" aria-hidden="true" />
    </button>
    <span className="title-bar-text">portfolio.code-workspace — pedro-monteiro</span>
  </header>
);

export default TitleBar;
