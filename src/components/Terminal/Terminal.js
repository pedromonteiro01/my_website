import { useEffect, useRef, useState } from "react";
import { navFiles } from "../../data/nav";
import { profile, cvFiles } from "../../data/profile";
import { about } from "../../data/about";
import { skillGroups, alsoUsing } from "../../data/background";
import { experience } from "../../data/experience";
import { projects } from "../../data/projects";
import "./Terminal.css";

const PROMPT = "pedro@monteiro";

const HELP_LINES = [
  "Available commands:",
  "  help                 show this list",
  "  whoami               about me, short version",
  "  ls [projects]        list sections, or the projects inside one",
  "  cat <file>           print a short summary of a file",
  "  open <target>        github | linkedin | email | cv-pt | cv-en",
  "  goto <section>       scroll to a section (about, projects, contacts, ...)",
  "  theme <dark|light>   switch the site theme",
  "  history               show command history",
  "  clear                clear the screen",
  "  exit                 close this terminal",
];

const CAT_CONTENT = {
  home: [
    `# ${profile.name}`,
    `${profile.role} @ ${profile.company} — ${profile.location}.`,
  ],
  about: [
    about.degree + ".",
    `Traits: ${about.traits.join(", ")}.`,
  ],
  background: [
    `${skillGroups.reduce((n, g) => n + g.skills.length, 0)} rated skills across ${skillGroups.length} categories, plus ${alsoUsing.length} other tools & frameworks.`,
  ],
  experience: [
    `${experience.length} roles since ${experience[experience.length - 1].date.split(" ")[0]}.`,
    `Most recent: ${experience[0].title} @ ${experience[0].local}.`,
  ],
  projects: [
    `${projects.length} projects — from a CCTV weapon-detection thesis to a delivery marketplace.`,
  ],
  contacts: [
    `Reach me through the form on this page, or directly at ${profile.email}.`,
  ],
};

const findSection = (arg) => {
  const normalized = arg.replace(/^\.\//, "").replace(/\/$/, "");
  return navFiles.find(
    (f) =>
      f.id === normalized ||
      f.file.toLowerCase() === normalized ||
      f.file.toLowerCase().replace(/\.[a-z]+$/, "") === normalized
  );
};

const Terminal = ({ open, onClose, onNavigate, setTheme }) => {
  const [lines, setLines] = useState([
    { type: "output", text: "Welcome. Type 'help' to see what this thing does." },
  ]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(null);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const id = setTimeout(() => inputRef.current?.focus(), 60);
    return () => clearTimeout(id);
  }, [open]);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const print = (text, type = "output") => {
    setLines((prev) => [...prev, { type, text }]);
  };

  const openTargets = {
    github: profile.github,
    linkedin: profile.linkedin,
    email: `mailto:${profile.email}`,
    "cv-pt": cvFiles.find((c) => c.id === "pt")?.path,
    "cv-en": cvFiles.find((c) => c.id === "en")?.path,
  };

  const run = (raw) => {
    const trimmed = raw.trim();
    print(`${PROMPT}:~$ ${raw}`, "echo");
    if (!trimmed) return;

    setHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(null);

    const [cmdRaw, ...args] = trimmed.split(/\s+/);
    const cmd = cmdRaw.toLowerCase();
    const arg = args.join(" ").toLowerCase();

    switch (cmd) {
      case "help":
        HELP_LINES.forEach((l) => print(l));
        break;

      case "whoami":
        print(`${profile.name} — ${profile.role} @ ${profile.company}. Based in ${profile.location}.`);
        break;

      case "ls":
        if (!arg) {
          print(navFiles.map((f) => f.file).join("   "));
        } else if (arg === "projects" || arg === "projects.json") {
          projects.forEach((p) => print(`  ${p.name}`));
        } else {
          print(`ls: ${arg}: no such section`, "error");
        }
        break;

      case "cat": {
        if (!arg) {
          print("usage: cat <file>", "error");
          break;
        }
        const match = findSection(arg);
        if (!match) {
          print(`cat: ${arg}: No such file`, "error");
          break;
        }
        (CAT_CONTENT[match.id] || ["(empty)"]).forEach((line) => print(line));
        break;
      }

      case "open": {
        const target = openTargets[arg];
        if (target) {
          window.open(target, "_blank", "noreferrer");
          print(`opening ${arg}...`);
        } else {
          print(`open: ${arg || "?"}: try github, linkedin, email, cv-pt or cv-en`, "error");
        }
        break;
      }

      case "cv":
        cvFiles.forEach((cv) => print(`  ${cv.label}  (${cv.desc})`));
        print("tip: `open cv-pt` or `open cv-en` to download one");
        break;

      case "goto":
      case "cd": {
        const match = findSection(arg);
        if (match) {
          onNavigate(match.id);
          print(`→ ${match.file}`);
        } else {
          print(`goto: ${arg || "?"}: try ${navFiles.map((f) => f.id).join(", ")}`, "error");
        }
        break;
      }

      case "theme":
        if (arg === "dark" || arg === "light") {
          setTheme(arg);
          print(`theme set to ${arg}`);
        } else {
          print("usage: theme <dark|light>", "error");
        }
        break;

      case "history":
        if (history.length === 0) {
          print("(empty)");
        } else {
          history.forEach((h, i) => print(`  ${i + 1}  ${h}`));
        }
        break;

      case "clear":
        setLines([]);
        break;

      case "exit":
      case "close":
        print("goodbye 👋");
        setTimeout(onClose, 200);
        break;

      case "sudo":
        print(
          arg.includes("rm -rf") ? "nice try 😏 — this isn't your machine." : "Permission denied: you are not root here.",
          "error"
        );
        break;

      case ":wq":
      case ":q":
      case ":q!":
      case ":x":
        print("this isn't Vim — there's no escaping this one.", "error");
        break;

      case "vim":
      case "nvim":
      case "emacs":
        print(`${cmdRaw} isn't installed here. This terminal only speaks bash.`, "error");
        break;

      default:
        print(`command not found: ${cmdRaw} — type 'help' for a list`, "error");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      run(value);
      setValue("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setValue(history[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === null) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(null);
        setValue("");
      } else {
        setHistoryIndex(nextIndex);
        setValue(history[nextIndex]);
      }
    }
  };

  return (
    <div className={`terminal-panel ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <div className="terminal-panel-header">
        <span className="terminal-panel-tab">
          <i className="fas fa-terminal" aria-hidden="true" /> Terminal
        </span>
        <button className="terminal-panel-close" onClick={onClose} aria-label="Close terminal">
          <i className="fas fa-times" aria-hidden="true" />
        </button>
      </div>
      <div className="terminal-panel-body" ref={bodyRef} onClick={() => inputRef.current?.focus()}>
        {lines.map((line, i) => (
          <div key={i} className={`terminal-panel-line terminal-panel-line-${line.type}`}>
            {line.text}
          </div>
        ))}
        <div className="terminal-panel-line terminal-panel-inputline">
          <span className="terminal-panel-prompt">{PROMPT}:~$</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
            aria-label="Terminal command input"
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
