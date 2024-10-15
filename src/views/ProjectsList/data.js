import sendasnack from './imgs/sendasnack.png';
import cctv from './imgs/cctv.png';
import dsd from './imgs/dsd2.png';
import nexgen from '../Project/nexgen.png';
import covidInfo from './imgs/covidInfo.png';

export const projectData = [
    {
        title: "Real-Time Weapon Detection in Surveillance Video Footage",
        description: "My master thesis project, SafeGuard, improves CCTV systems by enhancing real-time weapon detection. It helps law enforcement quickly identify crimes and reduces the need for constant monitoring. SafeGuard also enables easier review of past footage, making surveillance more reliable.",
        tags: [
            "Django", "React", "MySQL", "RabbitMQ", "Docker", "Nginx", "YOLOv5"
        ],
        image: cctv,
        websiteLink: null,
        githubLink: "https://github.com/SendASnack",
        videoLink: "https://www.youtube.com/watch?v=tj7jsxZRDIY&list=PLfvmLPkfn7XECYTxmKBVXHi-gQ6IJ_loZ&index=1",  // If you have a video link
        onLinkClick: () => console.log('Website Link Clicked for SendASnack'),
        onViewMore: () => console.log('View More Clicked for SendASnack')
    },
    {
        title: "NEXGEN DIGITAL SOLUTIONS",
        description: "Personal project, focused on delivering innovative and customized digital solutions to help businesses grow in the digital era. From web development and app design to digital marketing strategies, NexGen aims to provide small and medium-sized enterprises with the tools they need to succeed online.",
        tags: ['React', 'Cloudflare'],
        image: nexgen,
        websiteLink: "https://nexgensolutions.pt/",
        githubLink: null, // If no GitHub link exists, keep it as null or undefined
        videoLink: null,
        onLinkClick: () => console.log('Website Link Clicked for NEXGEN DIGITAL SOLUTIONS'),
        onViewMore: () => console.log('View More Clicked for NEXGEN DIGITAL SOLUTIONS')
    },
    {
        title: "Professor Scheduler",
        description: "Build a platform to plan the distribution of Professors across classes and curricular units, in each department of the university, providing the necessary information.",
        tags: ["ReactJS", "FastAPI", "MySQL", "Docker"],
        image: dsd,
        websiteLink: null,
        githubLink: "https://github.com/pedromonteiro01/DSD_professor_schedule_assigner",
        videoLink: "https://youtu.be/Nli68iJH7e8",
        onLinkClick: () => console.log('Website Link Clicked for Professor Scheduler'),
        onViewMore: () => console.log('View More Clicked for Professor Scheduler')
    },
    {
        title: "SendASnack",
        description: "Implementation of a digital marketplace for 'last-mile' deliveries. Includes 2 main sub-projects - deliveries platform (engine) and specific application.",
        tags: [
            "ReactJS", "SpringBoot", "MariaDB", "CircleCI", "Codacy",
            "Jira", "Cucumber", "Mockito", "JUnit", "Jest"
        ],
        image: sendasnack,
        websiteLink: null,
        githubLink: "https://github.com/SendASnack",
        videoLink: "https://www.youtube.com/watch?v=tj7jsxZRDIY&list=PLfvmLPkfn7XECYTxmKBVXHi-gQ6IJ_loZ&index=1",  // If you have a video link
        onLinkClick: () => console.log('Website Link Clicked for SendASnack'),
        onViewMore: () => console.log('View More Clicked for SendASnack')
    },
    {
        title: "CovidInfo",
        description: "Multi-layer web application that provide details on COVID incidence data for a certain country, supplied with automated tests. A cache and logging strategy were also implemented.",
        tags: [
            "Html",
            "CSS",
            "JavaScript",
            "SpringBoot",
            "JUnit",
            "Selenium",
            "Cucumber",
            "RapidAPI",
          ],
        image: covidInfo,
        websiteLink: null,
        githubLink: "https://github.com/pedromonteiro01/CovidInfo",
        videoLink: "https://youtu.be/49rQX63-IeY",  // If you have a video link
        onLinkClick: () => console.log('Website Link Clicked for SendASnack'),
        onViewMore: () => console.log('View More Clicked for SendASnack')
    },
];
