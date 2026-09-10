import { useEffect, useState } from "react";
import "./App.css";
import { navFiles } from "./data/nav";
import { useActiveSection } from "./hooks/useActiveSection";
import { useTheme } from "./hooks/useTheme";
import TitleBar from "./layout/TitleBar/TitleBar";
import ActivityBar from "./layout/ActivityBar/ActivityBar";
import Sidebar from "./layout/Sidebar/Sidebar";
import TabsBar from "./layout/TabsBar/TabsBar";
import StatusBar from "./layout/StatusBar/StatusBar";
import Terminal from "./components/Terminal/Terminal";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Background from "./sections/Background/Background";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import Contacts from "./sections/Contacts/Contacts";
import Footer from "./sections/Footer/Footer";

const sectionIds = navFiles.map((item) => item.id);

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);
  const { theme, setTheme, toggleTheme } = useTheme();

  const handleNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (window.innerWidth <= 900) setSidebarOpen(false);
  };

  const handleToggleSidebar = () => setSidebarOpen((v) => !v);
  const handleToggleTerminal = () => setTerminalOpen((v) => !v);

  // Ctrl+` toggles the terminal, same shortcut as VS Code (Cmd+` is a macOS
  // window-switching shortcut the browser never sees, so this uses Ctrl on
  // every platform on purpose). Escape closes it.
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.code === "Backquote") {
        e.preventDefault();
        setTerminalOpen((v) => !v);
      } else if (e.key === "Escape") {
        setTerminalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="app-shell">
      <TitleBar onToggleSidebar={handleToggleSidebar} />

      <div className="app-body">
        <ActivityBar sidebarOpen={sidebarOpen} onToggleSidebar={handleToggleSidebar} />
        <Sidebar activeId={activeId} onNavigate={handleNavigate} open={sidebarOpen} />

        {sidebarOpen && (
          <button
            className="sidebar-scrim"
            aria-label="Close explorer"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div className="editor-area">
          <TabsBar activeId={activeId} onNavigate={handleNavigate} />
          <main>
            <Hero onNavigate={handleNavigate} />
            <About />
            <Background />
            <Experience />
            <Projects />
            <Contacts />
            <Footer />
          </main>
        </div>
      </div>

      <Terminal
        open={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onNavigate={handleNavigate}
        setTheme={setTheme}
      />

      <StatusBar
        activeId={activeId}
        theme={theme}
        onToggleTheme={toggleTheme}
        terminalOpen={terminalOpen}
        onToggleTerminal={handleToggleTerminal}
      />
    </div>
  );
}

export default App;
