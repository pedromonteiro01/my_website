import vila from "../assets/projects/vilafernando.png";
import cctv from "../assets/projects/cctv.png";
import dsd from "../assets/projects/dsd2.png";
import sendasnack from "../assets/projects/sendasnack.png";
import beStrong from "../assets/projects/beStrong.png";

export const projects = [
  {
    id: "vila-fernando",
    name: "Vila Fernando com Ambição",
    description: "This project was developed for an electoral campaign to encourage voting, share the candidate's plan, and present the team behind it. It provides clear information about the campaign's goals and activities while offering an easy way for voters to get in touch with questions or feedback, promoting transparency, engagement, and participation.",
    tags: ["React", "Cloudflare"],
    image: vila,
    websiteLink: null,
    githubLink: null,
    videoLink: "https://youtu.be/yXtdYAGwTgw",
  },
  {
    id: "safeguard",
    name: "Real-Time Weapon Detection in Surveillance Video Footage",
    description: "My master thesis project, SafeGuard, improves CCTV systems by enhancing real-time weapon detection. It helps law enforcement quickly identify crimes and reduces the need for constant monitoring. SafeGuard also enables easier review of past footage, making surveillance more reliable.",
    tags: ["Django", "React", "MySQL", "RabbitMQ", "Docker", "Nginx", "YOLOv5"],
    image: cctv,
    websiteLink: null,
    githubLink: null,
    videoLink: "https://youtu.be/sIQEXOfVPVE",
  },
  {
    id: "professor-scheduler",
    name: "Professor Scheduler",
    description: "Build a platform to plan the distribution of Professors across classes and curricular units, in each department of the university, providing the necessary information.",
    tags: ["ReactJS", "FastAPI", "MySQL", "Docker"],
    image: dsd,
    websiteLink: null,
    githubLink: "https://github.com/pedromonteiro01/DSD_professor_schedule_assigner",
    videoLink: "https://youtu.be/Nli68iJH7e8",
  },
  {
    id: "sendasnack",
    name: "SendASnack",
    description: "Implementation of a digital marketplace for 'last-mile' deliveries. Includes 2 main sub-projects - deliveries platform (engine) and specific application.",
    tags: ["ReactJS", "SpringBoot", "MariaDB", "CircleCI", "Codacy", "Jira", "Cucumber", "Mockito", "JUnit", "Jest"],
    image: sendasnack,
    websiteLink: null,
    githubLink: "https://github.com/SendASnack",
    videoLink: "https://www.youtube.com/watch?v=tj7jsxZRDIY&list=PLfvmLPkfn7XECYTxmKBVXHi-gQ6IJ_loZ&index=1",
  },
  {
    id: "bestrong",
    name: "beStrong",
    description: "Implementation of a multi-layer, enterprise-class application, including generation of data streams, central processing, long term storage, service API and a web portal.",
    tags: ["Html", "CSS", "JavaScript", "Python", "SpringBoot", "MySQL", "RabbitMQ", "Docker"],
    image: beStrong,
    websiteLink: null,
    githubLink: "https://github.com/pedromonteiro01/beStrong",
    videoLink: null,
  },
];
