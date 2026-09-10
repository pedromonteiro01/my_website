import "./Badge.css";

const Badge = ({ children, tone = "default" }) => (
  <span className={`badge badge-${tone}`}>{children}</span>
);

export default Badge;
