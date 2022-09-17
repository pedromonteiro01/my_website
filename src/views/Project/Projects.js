import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import TrackVisibility from "react-on-screen";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import { Container } from "react-bootstrap";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInDown">
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp">
                      <Tab.Pane eventKey="first">
                        <Row>
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
                            title="Professor Scheduler"
                            yt="https://youtu.be/Nli68iJH7e8"
                            git="https://github.com/pedromonteiro01/DSD_professor_schedule_assigner"
                            text="Build a platform to plan the distribution of Professors across classes and 
          curricular units, in each department of the university, providing the necessary information."
                            technologies={[
                              "ReactJS",
                              "FastAPI",
                              "MySQL",
                              "Docker",
                            ]}
                          />
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
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <ProjectCard
                            title="Chat Server"
                            git="https://github.com/pedromonteiro01/chat_server"
                            text="Chat server that allows multiple clients to connect to it, using TCP sockets and Python selectors, following a certain protocol."
                            technologies={["Python"]}
                          />
                          <ProjectCard
                            title="Existence of Vulnerabilities"
                            git="https://github.com/pedromonteiro01/vulnerabilities"
                            text="This project focus on the existence of vulnerabilities in software projects, their exploration and avoidance."
                            technologies={[
                              "Html",
                              "CSS",
                              "JavaScript",
                              "PHP",
                              "MySQL",
                              "Docker",
                            ]}
                          />
                          <ProjectCard
                            title="Distributed Password Cracker"
                            git="https://github.com/pedromonteiro01/distributed_password_cracker"
                            text="Development of a P2P distributed password cracker system in the shortest possible time. 
                            There is a server that tests submitted passwords, using HTTP Basic Authorization, and checks if they are correct."
                            technologies={["Python", "Docker"]}
                          />
                          <ProjectCard
                            title="CHORD (DHT)"
                            git="https://github.com/pedromonteiro01/chord"
                            textLink={[
                              <p>
                                Simple version of the{" "}
                                <a href="https://en.wikipedia.org/wiki/Chord_(peer-to-peer)">
                                  CHORD
                                </a>{" "}
                                algorithm: Supports Node Joins, Finds the
                                correct successor for a node, Run Stabilize
                                periodically to correct the network.
                              </p>,
                            ]}
                            technologies={["Python"]}
                          />
                          <ProjectCard
                            title="Message Broker"
                            git="https://github.com/pedromonteiro01/message_broker"
                            text="Development of a Message Broker capable of interconnecting producers and consumers through a common PubSub protocol and three distinct serialization mechanisms (JSON, XML and Pickle)."
                            technologies={["Python"]}
                          />
                          <ProjectCard
                            title="Load Balancer"
                            git="https://github.com/pedromonteiro01/load_balancer"
                            text="Simple HTTP/TCP Load Balancer. The code contains 4 classes that implement different strategies to select the next back-end server (N to 1, Round Robin, Least Connections, Least Response Time)."
                            technologies={["Python"]}
                          />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <ProjectCard
                            title="OS Semaphores"
                            git="https://github.com/pedromonteiro01/os_semaphores"
                            text="Simulation of a football match, between two teams, with field players, goalkeepers and a referee, covering topics such as process synchronization, semaphores and shared memory."
                            technologies={["C"]}
                          />
                          <ProjectCard
                            title="Weighted Job Selection"
                            git="https://github.com/pedromonteiro01/weighted_job_selection"
                            text="Given the programming tasks T, each with a start/end date and a profit, and given P programmers, generalized weighted job selection determines the distribution of these tasks in order to maximize profit."
                            technologies={["C"]}
                          />
                          <ProjectCard
                            title="Process Resources"
                            git="https://github.com/pedromonteiro01/process_resources"
                            text="Development of a bash script that displays statistics about the memory used by processes and the amount of I/O that a selection of processes are performing."
                            technologies={["Bash"]}
                          />
                          <ProjectCard
                            title="CSV Table Compiler"
                            git="https://github.com/pedromonteiro01/csv_table_compiler"
                            text="Small project that aims to create a language, using ANTLR4, to manipulate tables or databases."
                            technologies={["ANTLR4", "Java"]}
                          />
                          <ProjectCard
                            title="Supermarket Database"
                            git="https://github.com/pedromonteiro01/supermarket_database"
                            text="System that allows managing a supermarket, with emphasis on the 
          development of its database."
                            technologies={["SQL Server", "C#"]}
                          />
                          <ProjectCard
                            title="IP Tracker"
                            git="https://github.com/pedromonteiro01/iptracker"
                            text="Simple program that uses an API and represents on a map, in an HTML page, the location of the IP address."
                            technologies={["Python"]}
                          />
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </AnimationOnScroll>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
