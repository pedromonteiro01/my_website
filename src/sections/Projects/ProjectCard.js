import Badge from "../../components/Badge/Badge";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => (
  <article className="project-card">
    <div className="project-card-image">
      <img src={project.image} alt={project.name} loading="lazy" />
    </div>
    <div className="project-card-body">
      <p className="project-card-key">
        <span className="tok-prop">"name"</span>
        <span className="tok-punct">: </span>
      </p>
      <h3 className="project-card-name">{project.name}</h3>
      <p className="project-card-description">{project.description}</p>
      <div className="project-card-tags">
        {project.tags.map((tag) => (
          <Badge key={tag} tone="string">{tag}</Badge>
        ))}
      </div>
      <div className="project-card-links">
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noreferrer" className="project-link" title="View source">
            <i className="fab fa-github" aria-hidden="true" /> source
          </a>
        )}
        {project.websiteLink && (
          <a href={project.websiteLink} target="_blank" rel="noreferrer" className="project-link" title="Visit site">
            <i className="fas fa-external-link-alt" aria-hidden="true" /> live
          </a>
        )}
        {project.videoLink && (
          <a href={project.videoLink} target="_blank" rel="noreferrer" className="project-link" title="Watch demo">
            <i className="fab fa-youtube" aria-hidden="true" /> demo
          </a>
        )}
      </div>
    </div>
  </article>
);

export default ProjectCard;
