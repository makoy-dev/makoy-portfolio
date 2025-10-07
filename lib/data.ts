import { Code2, Server, Database, Cloud } from "lucide-react"

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
            { name: "CD/CD", level: 75, color: "bg-graay-900" },
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
    { number: "20+", label: "Technologies" },
    { number: "100%", label: "Client Satisfaction" }
]