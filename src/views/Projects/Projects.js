import { useState } from "react";
import Button from "../../components/Button/Button";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import MoreProjects from "./components/MoreProjects";
import "./Projects.css";

const Projects = () => {
  const [showMoreBtn, setShowMoreBtn] = useState(true);
  const [showLessBtn, setLessMoreBtn] = useState(false);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [className, setClassName] = useState("");

  const handleShowProjects = () => {
    setLessMoreBtn(true);
    setShowMoreBtn(false);
    setShowMoreProjects(true);
    setClassName("animate__animated animate__zoomIn");
  };

  const handleHideProjects = () => {
    setLessMoreBtn(false);
    setShowMoreBtn(true);
    setShowMoreProjects(false);
  };

  return (
    <div className="projects-section" id="projects">
      <h3>Projects</h3>
      <div className="projects-wrapper">
        <ProjectCard
          title="SendASnack"
          yt="https://www.youtube.com/watch?v=tj7jsxZRDIY&list=PLfvmLPkfn7XECYTxmKBVXHi-gQ6IJ_loZ&index=1"
          git="https://github.com/SendASnack"
          text="Implementation of a digital marketplace for “last-mile” deliveries.
Include 2 main sub-projects - deliveries platform (engine) and specific application."
          technologies={[
            "ReactJS",
            "SpringBoot",
            "MariaDB",
            "CircleCI",
            "Codacy",
            "Jira",
            "Cucumber",
            "Mockito",
            "JUnit",
            "Jest",
          ]}
        />
        <ProjectCard
          title="Tetris AI Game"
          git="https://github.com/pedromonteiro01/tetris_ai"
          text="Tetris game implemented according to heuristics, such as the 
          number of holes or the number of complete lines, where the objective is to score as many points as possible."
          technologies={["Python"]}
        />
        <ProjectCard
          title="Professor Scheduler Assigner"
          yt="https://youtu.be/Nli68iJH7e8"
          git="https://github.com/pedromonteiro01/DSD_professor_schedule_assigner"
          text="Build a platform to plan the distribution of Professors across classes and 
          curricular units, in each department of the university, providing the necessary information."
          technologies={["ReactJS", "FastAPI", "MySQL", "Docker"]}
        />
      </div>
      <div class="projects-wrapper">
        <ProjectCard
          title="CovidInfo"
          yt="https://youtu.be/49rQX63-IeY"
          git="https://github.com/pedromonteiro01/CovidInfo"
          text="Multi-layer web application that provide details on COVID incidence data for a certain 
          country, supplied with automated tests. A cache and logging strategy were also implemented."
          technologies={[
            "Html",
            "CSS",
            "JavaScript",
            "SpringBoot",
            "JUnit",
            "Selenium",
            "Cucumber",
            "RapidAPI",
          ]}
        />
        <ProjectCard
          title="beStrong"
          git="https://github.com/pedromonteiro01/beStrong"
          text="Implementation of a multi-layer, enterprise-class application, including 
          generation of data streams, central processing, long term storage, service API and a web portal."
          technologies={[
            "Html",
            "CSS",
            "JavaScript",
            "Python",
            "SpringBoot",
            "MySQL",
            "Docker",
          ]}
        />
        <ProjectCard
          title="Secure Authentication"
          git="https://github.com/pedromonteiro01/secure_authentication"
          text="Robust authentication protocol. Running the authentication protocol N times, and providing in each run the minimum set of information (1 bit)."
          technologies={[
            "Html",
            "CSS",
            "JavaScript",
            "Flask",
            "PHP",
            "MySQL",
            "Docker",
          ]}
        />
      </div>
      {showMoreProjects && <MoreProjects class={className} />}
      <div className="show-more-buttons">
        { showMoreBtn && <Button text="Show More" onClick={handleShowProjects} /> }
        { showLessBtn && <Button text="Show Less" onClick={handleHideProjects} /> } 
      </div>
    </div>
  );
};

export default Projects;
