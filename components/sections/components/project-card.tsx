"use client"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { cardVariants } from "@/lib/utils";

type Project = {
    id: number,
    title: string,
    description: string,
    image: string,
    tags: string[],
    liveUrl: string,
    githubUrl: string,
    featured: boolean,
    category: string
};
export default function ProjectCard({
    project,
    index,
}: {
    project: Project;
    index: number;
}) {  

    console.log(project.image)
    return (
        <motion.div
            variants={cardVariants}
            whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            className=""
        >
            <div
                className="rounded-2xl overflow-hidden border transition-all duration-500 bg-gray-900/50 border-gray-800 hover:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm"
            >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    { project.featured && (
                        <div className="absolute top-4 left-4">
                            <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                                Featured
                            </span>
                        </div>
                    ) }

                    <div className="absolute top-4 right-4">
                        <span
                            className="text-xs px-3 py-1 rounded-full font-medium bg-gray-800/80 text-gray-300 backdrop-blur-sm">
                            { project.category }
                        </span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center space-x-4"
                    >
                        <motion.a
                            href={project.liveUrl}
                            initial={{ y: 20, opacity: 0.5 }}
                            whileHover={{ y: 0, opacity: 1, scale: 1.05 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium transition-colors"
                        >
                            <ExternalLink size={16} />
                            <span>Live Demo</span>
                        </motion.a>
                        <motion.a
                            href={project.githubUrl}
                            initial={{ y: 20, opacity: 0.5 }}
                            whileHover={{ y: 0, opacity: 1, scale: 1.05 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium transition-all"
                        >
                            <FiGithub size={16} />
                            <span>GitHub</span>
                        </motion.a>
                    </motion.div>
                </div>
                {/* Project Content */}
                <div className="p-6">
                    <h3 className="text-xl font-medium mb-3 group-hover:text-blue-500 transition-colors">{ project.title }</h3>
                    <p className="text-sm leading-relaxed mb-4 text-gray-400">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag: any, tagIndex: number) => (
                            <span
                                key={tagIndex}
                                className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300"
                            >
                                { tag }
                            </span>

                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}