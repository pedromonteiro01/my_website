import "./FileIcon.css";

const ICONS = {
  md: { label: "M↓", tone: "icon-md" },
  js: { label: "JS", tone: "icon-js" },
  log: { label: ">_", tone: "icon-log" },
  json: { label: "{}", tone: "icon-json" },
  sh: { label: "$_", tone: "icon-sh" },
};

const FileIcon = ({ ext }) => {
  const icon = ICONS[ext] || { label: "•", tone: "icon-default" };
  return <span className={`file-icon ${icon.tone}`}>{icon.label}</span>;
};

export default FileIcon;
