import { navFiles } from "../../data/nav";
import FileIcon from "../../components/FileIcon/FileIcon";
import "./TabsBar.css";

const TabsBar = ({ activeId, onNavigate }) => (
  <div className="tabs-bar" role="tablist" aria-label="Open sections">
    {navFiles.map((item) => (
      <button
        key={item.id}
        role="tab"
        aria-selected={activeId === item.id}
        className={`tab ${activeId === item.id ? "is-active" : ""}`}
        onClick={() => onNavigate(item.id)}
      >
        <FileIcon ext={item.ext} />
        <span className="tab-name">{item.file}</span>
        <span className="tab-close" aria-hidden="true">×</span>
      </button>
    ))}
  </div>
);

export default TabsBar;
