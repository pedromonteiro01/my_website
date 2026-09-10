import "./CodeFrame.css";

const CodeFrame = ({ filename, language = "js", children, className = "" }) => (
  <div className={`code-frame ${className}`}>
    <div className="code-frame-header">
      <span className="code-frame-dots" aria-hidden="true">
        <span className="dot dot-red" />
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
      </span>
      <span className="code-frame-filename">{filename}</span>
      {language && <span className="code-frame-lang">{language}</span>}
    </div>
    <div className="code-frame-body">
      <div className="code-lines">{children}</div>
    </div>
  </div>
);

export const Line = ({ children, indent = 0, blank = false, id }) => (
  <div className={`code-line${blank ? " code-line-blank" : ""}`} style={{ "--indent": indent }} id={id}>
    <span className="code-line-content">{children}</span>
  </div>
);

export const Comment = ({ children }) => <span className="tok-comment">{children}</span>;
export const Str = ({ children }) => <span className="tok-string">"{children}"</span>;
export const Kw = ({ children }) => <span className="tok-keyword">{children}</span>;
export const Prop = ({ children }) => <span className="tok-prop">{children}</span>;
export const Fn = ({ children }) => <span className="tok-func">{children}</span>;
export const Num = ({ children }) => <span className="tok-number">{children}</span>;
export const Type = ({ children }) => <span className="tok-type">{children}</span>;
export const Punct = ({ children }) => <span className="tok-punct">{children}</span>;
export const Plain = ({ children }) => <span className="tok-plain">{children}</span>;

export default CodeFrame;
