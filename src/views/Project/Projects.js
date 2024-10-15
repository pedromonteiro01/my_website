// Projects.js
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TrackVisibility from "react-on-screen";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import { Container } from "react-bootstrap";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ProjectCard from "../../components/ProjectCard/ProjectCard";

// Import project data
import { projectData } from './data.js';

const Projects = () => {
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
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
