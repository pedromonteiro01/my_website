import { useState } from "react";
import { navFiles } from "../../data/nav";
import FileIcon from "../../components/FileIcon/FileIcon";
import "./Sidebar.css";

const Sidebar = ({ activeId, onNavigate, open }) => {
  const [rootOpen, setRootOpen] = useState(true);
  const [srcOpen, setSrcOpen] = useState(true);

  return (
    <aside className={`sidebar ${open ? "is-open" : ""}`} aria-label="Explorer">
      <div className="sidebar-heading">Explorer</div>

      <button className="tree-row tree-folder" onClick={() => setRootOpen((v) => !v)}>
        <i className={`fas fa-chevron-${rootOpen ? "down" : "right"} tree-chevron`} aria-hidden="true" />
        <span>PEDRO-MONTEIRO</span>
      </button>

      {rootOpen && (
        <div className="tree-children">
          <button className="tree-row tree-folder" onClick={() => setSrcOpen((v) => !v)}>
            <i className={`fas fa-chevron-${srcOpen ? "down" : "right"} tree-chevron`} aria-hidden="true" />
            <span>src</span>
          </button>

          {srcOpen && (
            <div className="tree-children">
              <div className="tree-row tree-folder tree-folder-static">
                <i className="fas fa-chevron-down tree-chevron" aria-hidden="true" />
                <span>sections</span>
              </div>
              <div className="tree-children">
                {navFiles.map((item) => (
                  <button
                    key={item.id}
                    className={`tree-row tree-file ${activeId === item.id ? "is-active" : ""}`}
                    onClick={() => onNavigate(item.id)}
                  >
                    <FileIcon ext={item.ext} />
                    <span>{item.file}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
