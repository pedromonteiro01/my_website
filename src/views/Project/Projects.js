// Projects.js
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TrackVisibility from "react-on-screen";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import { Button, Container } from "react-bootstrap";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ProjectCard from "../../components/ProjectCard/ProjectCard";

// Import project data
import { projectData } from './data.js';

const Projects = () => {
  const handleViewMore = () => {
    window.open('/projects', '_blank');
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInDown">
                <h2>Projects</h2>
                <div className="projects-wrapper">
                  {projectData.map((project, index) => (
                    <div key={index} className={`projects-wrapper-${index % 2 === 0 ? '1' : '2'}`}>
                      <ProjectCard
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        githubLink={project.githubLink}
                        videoLink={project.videoLink}
                        websiteLink={project.websiteLink}
                        onLinkClick={project.onLinkClick}
                      />
                    </div>
                  ))}
                </div>
              </AnimationOnScroll>
            </TrackVisibility>
            <div className="view-more-container">
              <Button className="fancy-outline-btn" onClick={handleViewMore}>
                View More <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
