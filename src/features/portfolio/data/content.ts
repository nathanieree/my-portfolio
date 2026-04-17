import type {
  ContactLink,
  ExperienceItem,
  ProjectItem,
  SkillItem,
  StatItem,
} from "@/features/portfolio/types/content";

export const aboutStats: StatItem[] = [
  { value: "30+", label: "Projects Completed" },
  { value: "10+", label: "Happy Clients" },
  { value: "2+", label: "Years Experience" },
];

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "iCan-Careers",
    category: "Full Stack",
    description:
      "A platform designed to empower PWDs and senior citizens by bridging the gap between employment barriers and opportunity. Features skill development tools, flexible work options like freelancing, and an inclusive dashboard that connects users to meaningful job opportunities through digital innovation.",
    tech: ["Vue.js", "Laravel", "MySQL", "Pusher", "Render", "Vercel"],
    images: [
      "/img/iCan-Careers.png",
      "/img/i-Can-Career-login.png",
      "/img/i-Can-Career-signup.png",
      "/img/i-Can-Career-jobList.png",
      "/img/i-Can-Career-learning.png",
      "/img/i-Can-Career-pricing.png",
      "/img/i-Can-Career-workerprof.png",
      "/img/i-Can-Career-workerdash.png",
      "/img/i-Can-Career-employerdash.png",
    ],
    url: "https://ican-careers.onrender.com",
    color: "#B7D5E8",
  },
  {
    id: 2,
    title: "Nexus",
    category: "Full Stack",
    description:
      "A cinematic web experience built for the world of film. Features secure authentication, an interactive AI Orb companion with selectable voices, a stunning 3D Database Map with drag-and-drop file management, and a live Security Suite with real-time CCTV camera management. NEXUS isn't just a website — it's a world.",
    tech: ["Next.js", "Node.js", "MongoDB", "Vercel", "Render"],
    images: [
      "/img/Nexus-AI.png",
      "/img/Nexus-Dashboard.png",
      "/img/Nexus-Database.png",
    ],
    url: "https://example.com/nexus",
    color: "#E8D5B7",
  },
  {
    id: 3,
    title: "Help-Isko",
    category: "Mobile",
    description:
      "A mobile duty scheduling and task management app built for students. Help-Isko simplifies the coordination of academic responsibilities with real-time updates via Pusher, helping student groups stay organized, on track, and accountable throughout the school year.",
    tech: ["Flutter", "MySQL", "Laravel", "Pusher"],
    images: [
      "/img/isko-auth.png",
      "/img/isko-profile.png",
      "/img/isko-seeAll.png",
      "/img/isko-dutiesPage.png",
    ],
    url: "https://example.com/help-isko",
    color: "#D5E8B7",
  },
  {
    id: 4,
    title: "Paw Adopt Paw",
    category: "Android",
    description:
      "An Android app that revolutionizes the pet adoption experience by seamlessly connecting animals in need with loving families. Built with a clean and intuitive interface, it streamlines the adoption process — making it easier, faster, and more meaningful for both adopters and shelter organizations.",
    tech: ["Kotlin", "Laravel", "Retrofit", "MySQL"],
    images: [
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&q=80",
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80",
    ],
    url: "https://example.com/paw-adopt-paw",
    color: "#E8B7D5",
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "IT Support Intern",
    company: "L7 Pictures",
    period: "2025 - 2026",
    description:
      "Provided IT support for a private media and film production company, managing software and systems used in production workflows. Ensured smooth technical operations across production processes for 4 months.",
  },
  {
    role: "Full Stack Developer (Academic Projects)",
    company: "Self-Initiated & School Projects",
    period: "2023 - Present",
    description:
      "Designed and developed multiple full stack and mobile applications including iCan-Careers, Nexus, Help-Isko, and Paw Adopt Paw — applying modern technologies like Vue.js, Next.js, Laravel, Flutter, and MySQL.",
  },
];

export const skills: SkillItem[] = [
  { name: "HTML", level: 98 },
  { name: "CSS", level: 97 },
  { name: "JavaScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Laravel", level: 80 },
  { name: "Python", level: 75 },
  { name: "MongoDB", level: 80 },
  { name: "MySQL", level: 90 },
  { name: "DevOps / CI/CD", level: 90 },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    href: "mailto:nathanmanzano2413@gmail.com",
    value: "nathanmanzano2413@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nathaniel-ree-manzano",
    value: "Nathaniel Ree Manzano",
  },
  {
    label: "GitHub",
    href: "https://github.com/nathanieree",
    value: "nathanieree",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/nathanieree/",
    value: "Nathaniel Ree Manzano",
  },
];
