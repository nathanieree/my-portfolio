export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  images: string[];
  url: string;
  color: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ContactLink {
  label: string;
  href: string;
  value: string;
}
