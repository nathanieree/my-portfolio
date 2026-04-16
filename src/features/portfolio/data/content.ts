import type {
  ContactLink,
  ExperienceItem,
  ProjectItem,
  SkillItem,
  StatItem,
} from "@/features/portfolio/types/content";

export const aboutStats: StatItem[] = [
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
];

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "iCan-Careers",
    category: "Full Stack",
    description:
      "Interactive analytics dashboard with real-time data visualization, ML model monitoring, and automated reporting pipelines.",
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
      "A modern shopping experience with real-time inventory, Stripe payments, and an admin dashboard built with Next.js and PostgreSQL.",
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
      "Cross-platform social networking app with real-time messaging, story features, and location-based discovery.",
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
      "Complete brand redesign including logo, typography system, color palette, and comprehensive design guidelines.",
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
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    period: "2023 - Present",
    description:
      "Leading the frontend team, architecting scalable UI systems and mentoring junior developers.",
  },
  {
    role: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2021 - 2023",
    description:
      "Built and shipped 3 major products from concept to production with 50K+ active users.",
  },
  {
    role: "Frontend Developer",
    company: "DesignStudio",
    period: "2019 - 2021",
    description:
      "Crafted pixel-perfect interfaces for Fortune 500 clients with a focus on accessibility.",
  },
];

export const skills: SkillItem[] = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "UI/UX Design", level: 80 },
  { name: "Python", level: 75 },
  { name: "DevOps / CI/CD", level: 70 },
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
