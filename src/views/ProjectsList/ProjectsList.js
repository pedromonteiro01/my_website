import './ProjectsList.css';
import { projectData } from './data';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { Button, Container } from 'react-bootstrap';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";

const ProjectsList = () => {
    const handleGoBack = () => {
        window.location.href = '/';
      };

      
    return (
        <section className="project-list" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2 className='project-list-header'>Projects</h2>
                        <div className="projects-list-wrapper">
                            {projectData.map((project, index) => (
                                <div key={index} className={`projects-list-wrapper-${index % 2 === 0 ? '1' : '2'}`}>
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

                        <div className="view-less-container">
                            <Button className="fancy-outline-btn" onClick={handleGoBack}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                                </svg>Go Back
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ProjectsList;