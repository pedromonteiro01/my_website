import "./Breadcrumb.css";

const Breadcrumb = ({ path }) => (
  <div className="breadcrumb">
    {path.map((part, index) => (
      <span key={part} className="breadcrumb-part">
        {index > 0 && <i className="fas fa-chevron-right breadcrumb-sep" aria-hidden="true" />}
        {part}
      </span>
    ))}
  </div>
);

export default Breadcrumb;
