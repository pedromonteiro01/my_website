// Self-rated proficiency, grouped by category. Percentages only exist for
// the things rated below — everything else I use regularly lives in
// `alsoUsing`, without a made-up number attached to it.
export const skillGroups = [
  {
    id: "languages",
    title: "languages",
    skills: [
      { id: 1, language: "Python", progress: 85 },
      { id: 2, language: "Java", progress: 75 },
      { id: 3, language: "PHP", progress: 55 },
      { id: 4, language: "SQL/MySQL", progress: 70 },
    ],
  },
  {
    id: "webAndTools",
    title: "web & tools",
    skills: [
      { id: 5, language: "HTML/CSS/JavaScript", progress: 90 },
      { id: 6, language: "Docker", progress: 80 },
    ],
  },
];

// Frameworks, platforms and languages I've built real things with — pulled
// from the stack listed across about.js, experience.log and projects.json.
export const alsoUsing = [
  "React", "Django", "ASP .NET Core 6", "TypeScript", "Kubernetes", "Nginx",
  "C/C++", "C#", "Spring Boot", "PostgreSQL", "SQL Server", "GraphQL",
  "FastAPI", "Azure DevOps",
];

export const education = [
  {
    id: 1,
    degree: "MSc, Computer Science Engineering",
    school: "University of Aveiro",
    img: "/img/aveiro.png",
    period: "Sep 2022 – Jul 2024",
  },
  {
    id: 2,
    degree: "BSc, Computer Science Engineering",
    school: "University of Aveiro",
    img: "/img/aveiro.png",
    period: "Sep 2019 – Jul 2022",
  },
  {
    id: 3,
    degree: "Scientific High School Degree",
    school: "AESE",
    img: "/img/aese.jpg",
    period: "Sep 2016 – Jul 2019",
  },
];
