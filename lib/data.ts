import { 
    Code2, 
    Server, 
    Database, 
    Cloud,
    GraduationCap,
    Briefcase,
    Heart,
    Coffee,
    BookOpen,
    Mail
 } from "lucide-react"
 import { FiGithub, FiLinkedin } from "react-icons/fi"

export const SKILLS_CATEGORY = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Crafting responsive user interfaces",
        skills: [
            { name: "React", level: "95", color: "bg-blue-500" },
            { name: "Typescript", level: "90", color: "bg-blue-600" },
            { name: "Next.js", level: "85", color: "bg-purple-800" },
            { name: "Tailwind CSS", level: "90", color: "bg-cyan-500" },
            // { name: "Framer Motion", level: "85", color: "bg-pink-500" },
        ]
    },
    {
        title: "Backend",
        icon: Server,
        description: "Building robust server-side solutions",
        skills: [
            { name: "Laravel", level: 90, color: "bg-green-500" },
            { name: "PHP", level: 95, color: "bg-purple-700" },
            { name: "REST APIs", level: 92, color: "bg-orange-500" },
        ]
    },
    {
        title: "Database",
        icon: Database,
        description: "Managing and optimizing data storage",
        skills: [
            { name: "MySQL", level: 90, color: "bg-green-500" },
            { name: "PostgreSQL", level: 85, color: "bg-blue-700" },
            { name: "Prisma", level: 80, color: "bg-red-500" },
        ]
    },
    {
        title: "DevOps",
        icon: Cloud,
        description: "Deploying and scaling applications",
        skills: [
            { name: "Vercel", level: 90, color: "bg-blue-600" },
            { name: "Heroku", level: 90, color: "bg-orange-600" },
            { name: "Git", level: 95, color: "bg-purple-600" },
            { name: "CD/CD", level: 75, color: "bg-red-900" },
        ]
    }
]

export const TECH_STACK = [
    "Javascript",
    "HTML5",
    "CSS3",
    "Sass",
    "Webpack",
    "Vite"
]

export const STATS = [
    // { number: "50+", label: "Projects Completed" }
    { number: "5+", label: "Years Experience" },
    // { number: "20+", label: "Technologies" },
    // { number: "100%", label: "Client Satisfaction" }
]

export const PROJECTS = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with advanced filtering and payment integration",
        image: "/images/profpic.png",
        tags: ["React", "Tailwind", "Laravel"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "Full Stack"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A Collaborative project management tool",
        image: "/images/profpic.png",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "Web App"
    }
]

export const JOURNEY_STEPS = [
    {
        year: "2019",
        title: "Bachelor of Science in Information Technology",
        company: "STI College of Iloilo",
        description: "A results-oriented Information Technology graduate recognized as the Programmer of the Year and Outstanding Thesis Awardee. Skilled in software development, database management, and systems analysis, with a strong commitment to writing clean, efficient, and innovative code. Passionate about solving complex technical problems and developing solutions that enhance user experience and business performance.",
        icon: GraduationCap,
        color: "bg-purple-500"
    },
    {
        year: "2019 - 2024",
        title: "Full-stack developer",
        company: "Callbox, Inc",
        description: "Designed, developed, and maintained full-stack web applications using PHP, Laravel, React, JavaScript, Tailwind CSS, HTML, and CSS.",
        icon: Briefcase,
        color: "bg-orange-500"
    },
    {
        year: "2021 - 2022",
        title: "Full-stack developer",
        company: "West Acton (Part-time)",
        description: "Developed and maintained full-stack web applications as part of a collaborative development team.",
        icon: Briefcase,
        color: "bg-blue-500"
    },
    {
        year: "2024 - Present",
        title: "Full-stack developer",
        company: "Tyme Global Technologies, Inc",
        description: " Develop, maintain, and optimize full-stack web applications using React, NextJS, Laravel, HTML, CSS, Tailwind, and PostgreSQL.",
        icon: Briefcase,
        color: "bg-cyan-500"
    }
]

export const PASSIONS = [
    {
        icon: Heart,
        title: "User Experience",
        description: "Crafting intuitive interfaces that users love"
    },
    {
        icon: Coffee,
        title: "Problem Solving",
        description: "Turning complex challenges into elegant solutions"
    },
    {
        icon: BookOpen,
        title: "Continuous learning",
        description: "Always exploring new technologies and best practices"
    }
]

export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        icon: FiGithub,
        url: "#",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800"
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "#",
        color: "hover:text-blue-400",
        bgColor: "hover:bg-blue-500/10"
    },
    {
        name: "Email",
        icon: Mail,
        url: "mailto:khristiancamena@gmail.com",
        color: "hover:text-green-400",
        bgColor: "hover:bg-green-500/10"
    }
]