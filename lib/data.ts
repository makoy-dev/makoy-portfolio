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
    slug: string;
    title: string;
    description: string;
    tags: string[];
    category: string;
    outcome: string;
    coverImage: string;
    screenshots: {
        src: string;
        title: string;
        alt: string;
        caption: string;
    }[];
    liveUrl?: string;
    githubUrl?: string;
};

export const PROJECTS: Project[] = [
    {
        id: 1,
        slug: "acosa-accounting-app",
        title: "ACOSA Accounting App",
        description:
            "A custom accounting operations platform commissioned by Acosa Accounting Office to connect client management, compliance monitoring, role-based workflows, retainers, and reporting.",
        tags: ["Laravel", "React", "Tailwind CSS", "REST APIs"],
        category: "Business operations platform",
        outcome: "Live project",
        liveUrl: "https://acosa-app.on-forge.com/",
        coverImage: "/images/projects/acosa/dashboard.png",
        screenshots: [
            {
                src: "/images/projects/acosa/dashboard.png",
                title: "Action Center",
                alt: "ACOSA Accounting App action center dashboard",
                caption: "A prioritized work queue surfaces urgent compliance, document, payment, and billing actions.",
            },
            {
                src: "/images/projects/acosa/client-masterlist.png",
                title: "Client Masterlist",
                alt: "ACOSA Accounting App client masterlist",
                caption: "A consolidated client workspace with operational filters, assignments, capacity, and fee context.",
            },
            {
                src: "/images/projects/acosa/monitoring.png",
                title: "Billing Monitoring",
                alt: "ACOSA Accounting App billing monitoring workspace",
                caption: "A spreadsheet-style monitoring surface supports recurring filing periods and per-row status updates.",
            },
            {
                src: "/images/projects/acosa/documents.png",
                title: "Document Management",
                alt: "ACOSA Accounting App document management workspace",
                caption: "Documents are organized by business, compliance requirement, review state, and version.",
            },
            {
                src: "/images/projects/acosa/payment-approvals.png",
                title: "Payment Approvals",
                alt: "ACOSA Accounting App payment approvals workspace",
                caption: "A focused review queue helps reconcile submitted payments and surface exceptions.",
            },
            {
                src: "/images/projects/acosa/reports.png",
                title: "Operational Reports",
                alt: "ACOSA Accounting App revenue reporting dashboard",
                caption: "Configurable reports turn accounting activity into readable operational and financial summaries.",
            },
            {
                src: "/images/projects/acosa/user-management.png",
                title: "User Management",
                alt: "ACOSA Accounting App user management screen",
                caption: "Administrators can manage staff and client accounts, roles, access, and account status.",
            },
            {
                src: "/images/projects/acosa/data-management.png",
                title: "Data Management",
                alt: "ACOSA Accounting App data management settings",
                caption: "Reusable reference data keeps client, task, workload, and compliance configuration consistent.",
            },
            {
                src: "/images/projects/acosa/tax-periods.png",
                title: "Tax Period Configuration",
                alt: "ACOSA Accounting App tax period settings",
                caption: "Annual filing periods and deadlines can be generated and managed from one administrative workspace.",
            },
            {
                src: "/images/projects/acosa/audit-logs.png",
                title: "Audit Log",
                alt: "ACOSA Accounting App audit log",
                caption: "Immutable activity history provides traceability across security, client, and compliance events.",
            },
        ],
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
