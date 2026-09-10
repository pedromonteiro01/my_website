import { profile } from "../../data/profile";
import "./ActivityBar.css";

const ActivityBar = ({ sidebarOpen, onToggleSidebar }) => (
  <nav className="activity-bar" aria-label="Activity bar">
    <button
      className={`activity-icon ${sidebarOpen ? "is-active" : ""}`}
      onClick={onToggleSidebar}
      aria-label="Explorer"
      title="Explorer"
    >
      <i className="fas fa-copy" aria-hidden="true" />
    </button>
    <button className="activity-icon" aria-label="Search" title="Search" disabled>
      <i className="fas fa-search" aria-hidden="true" />
    </button>
    <a
      className="activity-icon"
      href={profile.github}
      target="_blank"
      rel="noreferrer"
      aria-label="Source Control — GitHub"
      title="Source Control — GitHub"
    >
      <i className="fas fa-code-branch" aria-hidden="true" />
    </a>
    <a
      className="activity-icon"
      href={profile.linkedin}
      target="_blank"
      rel="noreferrer"
      aria-label="Extensions — LinkedIn"
      title="Extensions — LinkedIn"
    >
      <i className="fas fa-puzzle-piece" aria-hidden="true" />
    </a>
    <div className="activity-spacer" />
    <a
      className="activity-icon"
      href={`mailto:${profile.email}`}
      aria-label="Account — Email"
      title="Account — Email"
    >
      <i className="fas fa-user-circle" aria-hidden="true" />
    </a>
  </nav>
);

export default ActivityBar;
