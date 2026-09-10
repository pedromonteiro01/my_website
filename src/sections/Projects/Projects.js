import { projects } from "../../data/projects";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => (
  <section className="projects" id="projects">
    <Breadcrumb path={["portfolio", "src", "sections", "projects.json"]} />

    <p className="projects-intro">
      <span className="tok-punct">[</span>
      <span className="projects-intro-comment">{`// ${projects.length} entries — a mix of work, school and side projects`}</span>
    </p>

    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>

    <p className="projects-outro"><span className="tok-punct">]</span></p>
  </section>
);

export default Projects;
