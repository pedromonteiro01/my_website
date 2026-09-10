import { useEffect, useState } from "react";
import { navFiles } from "../../data/nav";
import "./StatusBar.css";

const StatusBar = ({ activeId, theme, onToggleTheme, terminalOpen, onToggleTerminal }) => {
  const [position, setPosition] = useState({ line: 1, col: 1 });
  const [time, setTime] = useState(() => new Date());

  const activeFile = navFiles.find((item) => item.id === activeId) || navFiles[0];

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
      setPosition({
        line: Math.max(1, Math.round(ratio * 480) + 1),
        col: Math.max(1, (Math.round(ratio * 97) % 40) + 1),
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);

  const clock = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <footer className="status-bar">
      <div className="status-left">
        <span className="status-item">
          <i className="fas fa-code-branch" aria-hidden="true" /> main
        </span>
        <span className="status-item status-item-sync">
          <i className="fas fa-sync-alt" aria-hidden="true" />
        </span>
        <span className="status-item">
          <i className="fas fa-check" aria-hidden="true" /> 0 Problems
        </span>
        <button
          className={`status-item status-terminal-toggle ${terminalOpen ? "is-active" : ""}`}
          onClick={onToggleTerminal}
          title="Toggle terminal (Ctrl+`)"
        >
          <i className="fas fa-terminal" aria-hidden="true" />
          <span className="status-item-hide-sm">Terminal</span>
        </button>
      </div>
      <div className="status-right">
        <span className="status-item status-item-hide-sm">Ln {position.line}, Col {position.col}</span>
        <span className="status-item status-item-hide-sm">UTF-8</span>
        <span className="status-item">{activeFile.language}</span>
        <span className="status-item status-item-hide-sm">{clock}</span>
        <button
          className="status-item status-theme-toggle"
          onClick={onToggleTheme}
          title={theme === "dark" ? "Switch to Light+" : "Switch to Dark+"}
        >
          <i className={`fas ${theme === "dark" ? "fa-moon" : "fa-sun"}`} aria-hidden="true" />
          {theme === "dark" ? "Dark+" : "Light+"}
        </button>
      </div>
    </footer>
  );
};

export default StatusBar;
