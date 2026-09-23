import {
    BookOpen,
    BriefcaseBusiness,
    Code2,
    Database,
    Heart,
    Layers3,
    Mail,
    MapPin,
    Server,
    Workflow,
} from "lucide-react";
import { FiLinkedin } from "react-icons/fi";

export const NAV_LINKS = [
    { label: "Home", href: "home" },
    { label: "Work", href: "work" },
    { label: "Capabilities", href: "capabilities" },
    { label: "Experience", href: "experience" },
    { label: "About", href: "about" },
    { label: "Contact", href: "contact" },
];

export const CAPABILITIES = [
    {
        title: "Frontend systems",
        icon: Layers3,
        description:
            "Responsive, accessible interfaces with clear component boundaries and thoughtful interaction design.",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
        title: "Backend development",
        icon: Server,
        description:
            "Maintainable application logic, integrations, and APIs built around real business workflows.",
        skills: ["Laravel", "PHP", "REST APIs", "Authentication"],
    },
    {
        title: "Data and architecture",
        icon: Database,
        description:
            "Practical data models and queries designed for reliability, clarity, and long-term growth.",
        skills: ["MySQL", "PostgreSQL", "Prisma", "Data modeling"],
    },
    {
        title: "Delivery and operations",
        icon: Workflow,
        description:
            "From source control to production deployment, with careful debugging and incremental delivery.",
        skills: ["Git", "Vercel", "Heroku", "CI/CD"],
    },
];

export const TECH_STACK = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "Sass",
    "Webpack",
    "Vite",
];

export type Project = {
    id: number;
    title: string;
    description: string;
    tags: string[];
    category: string;
    outcome: string;
    liveUrl?: string;
    githubUrl?: string;
};

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description:
            "A full-stack commerce experience focused on product discovery, advanced filtering, and a dependable purchase flow.",
        tags: ["React", "Tailwind CSS", "Laravel"],
        category: "Full-stack application",
        outcome: "Case study in progress",
    },
    {
        id: 2,
        title: "Task Management App",
        description:
            "A collaborative workspace designed to make planning, ownership, and day-to-day project progress easier to follow.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        category: "Productivity platform",
        outcome: "Case study in progress",
    },
];

export const EXPERIENCE = [
    {
        period: "2024 — Present",
        role: "Full-stack Developer",
        company: "Tyme Global Technologies, Inc.",
        description:
            "Developing, maintaining, and improving full-stack products with React, Next.js, Laravel, Tailwind CSS, and PostgreSQL.",
    },
    {
        period: "2021 — 2022",
        role: "Full-stack Developer · Part-time",
        company: "West Acton",
        description:
            "Developed and maintained web applications as part of a collaborative product development team.",
    },
    {
        period: "2019 — 2024",
        role: "Full-stack Developer",
        company: "Callbox, Inc.",
        description:
            "Designed, developed, and maintained full-stack applications using PHP, Laravel, React, JavaScript, HTML, and CSS.",
    },
    {
        period: "2019",
        role: "BS Information Technology",
        company: "STI College Iloilo",
        description:
            "Recognized as Programmer of the Year and an Outstanding Thesis Awardee.",
    },
];

export const VALUES = [
    {
        icon: Heart,
        title: "Useful by design",
        description: "Good software should make a real task feel simpler.",
    },
    {
        icon: Code2,
        title: "Built to last",
        description: "Clear code and sensible architecture keep products adaptable.",
    },
    {
        icon: BookOpen,
        title: "Always learning",
        description: "Curiosity makes both the product and the process better.",
    },
];

export const SOCIAL_LINKS = [
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "https://www.linkedin.com/in/makoy-came%C3%B1a-14a42312b/",
    },
    {
        name: "Email",
        icon: Mail,
        url: "mailto:khristiancamena@gmail.com",
    },
];

export const CONTACT_INFO = [
    {
        icon: MapPin,
        label: "Based in",
        value: "Iloilo, Philippines",
    },
    {
        icon: Mail,
        label: "Email",
        value: "khristiancamena@gmail.com",
    },
    {
        icon: BriefcaseBusiness,
        label: "Open to",
        value: "Product teams and selected freelance work",
    },
];
