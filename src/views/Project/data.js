import nexgen from './nexgen.png';

export const projectData = [
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
    image: "projects/dsd2.png",
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
    image: "projects/sendasnack.png",
    websiteLink: null,
    githubLink: "https://github.com/SendASnack",
    videoLink: "https://www.youtube.com/watch?v=tj7jsxZRDIY&list=PLfvmLPkfn7XECYTxmKBVXHi-gQ6IJ_loZ&index=1",  // If you have a video link
    onLinkClick: () => console.log('Website Link Clicked for SendASnack'),
    onViewMore: () => console.log('View More Clicked for SendASnack')
  }
];
