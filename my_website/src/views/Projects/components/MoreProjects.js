import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import "animate.css";
import "../Projects.css";

const MoreProjects = (props) => {
  return (
    <>
      <div className={`projects-wrapper ${props.class}`}>
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
          technologies={["Html", "CSS", "JavaScript", "PHP", "MySQL", "Docker"]}
        />
        <ProjectCard
          title="Distributed Password Cracker"
          git="https://github.com/pedromonteiro01/distributed_password_cracker"
          text="Development of a P2P distributed password cracker system in the shortest possible time. 
          There is a server that tests submitted passwords, using HTTP Basic Authorization, and checks if they are correct."
          technologies={["Python", "Docker"]}
        />
      </div>
      <div className={`projects-wrapper ${props.class} animate__delay-1s`}>
        <ProjectCard
          title="CHORD (DHT)"
          git="https://github.com/pedromonteiro01/chord"
          textLink={
            <p>
              Simple version of the{" "}
              <a href="https://en.wikipedia.org/wiki/Chord_(peer-to-peer)">
                CHORD
              </a>
              , algorithm: Supports Node Joins, Finds the correct successor for
              a node, Run Stabilize periodically to correct the network.
            </p>
          }
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
      </div>
      <div className={`projects-wrapper ${props.class} animate__delay-2s`}>
        <ProjectCard
          title="OS Semaphores"
          git="https://github.com/pedromonteiro01/os_semaphores"
          text="Simulation of a football match, between two teams, with field players, goalkeepers and a referee, covering topics such as process synchronization, semaphores and shared memory."
          technologies={[
            "C",
          ]}
        />
        <ProjectCard
          title="Weighted Job Selection"
          git="https://github.com/pedromonteiro01/weighted_job_selection"
          text="Given the programming tasks T, each with a start/end date and a profit, and given P programmers, generalized weighted job selection determines the distribution of these tasks in order to maximize profit."
          technologies={[
            "C",
          ]}
        />
        <ProjectCard
          title="Process Resources"
          git="https://github.com/pedromonteiro01/process_resources"
          text="Development of a bash script that displays statistics about the memory used by processes and the amount of I/O that a selection of processes are performing."
          technologies={[
            "Bash",
          ]}
        />
      </div>
      <div className={`projects-wrapper ${props.class} animate__delay-3s`}>
        <ProjectCard
          title="CSV Table Compiler"
          git="https://github.com/pedromonteiro01/csv_table_compiler"
          text="Small project that aims to create a language, using ANTLR4, to manipulate tables or databases."
          technologies={[
            "ANTLR4",
            "Java",
          ]}
        />
        <ProjectCard
          title="Supermarket Database"
          git="https://github.com/pedromonteiro01/supermarket_database"
          text="System that allows managing a supermarket, with emphasis on the 
          development of its database."
          technologies={[
            "SQL Server",
            "C#",
          ]}
        />
        <ProjectCard
          title="IP Tracker"
          git="https://github.com/pedromonteiro01/iptracker"
          text="Simple program that uses an API and represents on a map, in an HTML page, the location of the IP address."
          technologies={[
            "Python",
          ]}
        />
      </div>
    </>
  );
};

export default MoreProjects;
