import nexgen from './nexgen.png';

export const projectData = [
  {
    title: "Real-Time Weapon Detection in Surveillance Video Footage",
    description: "My master thesis project, SafeGuard, improves CCTV systems by enhancing real-time weapon detection. It helps law enforcement quickly identify crimes and reduces the need for constant monitoring. SafeGuard also enables easier review of past footage, making surveillance more reliable.",
    tags: [
      "Django", "React", "MySQL", "RabbitMQ", "Docker", "Nginx", "YOLOv5"
    ],
    image: "projects/cctv.png",
    websiteLink: null,
    githubLink: null,
    videoLink: "https://youtu.be/sIQEXOfVPVE",  // If you have a video link
    onLinkClick: () => console.log('Website Link Clicked for SendASnack'),
    onViewMore: () => console.log('View More Clicked for SendASnack')
  },
  {
    title: "TECNA DIGITAL SOLUTIONS",
    description: "Personal project, focused on delivering innovative and customized digital solutions to help businesses grow in the digital era. From web development and app design to digital marketing strategies, Tecna aims to provide small and medium-sized enterprises with the tools they need to succeed online.",
    tags: ['React', 'Cloudflare'],
    image: nexgen,
    websiteLink: "https://tecnasolutions.pt/",
    githubLink: null, // If no GitHub link exists, keep it as null or undefined
    videoLink: null,
    onLinkClick: () => console.log('Website Link Clicked for TECNA DIGITAL SOLUTIONS'),
    onViewMore: () => console.log('View More Clicked for TECNA DIGITAL SOLUTIONS')
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
];
