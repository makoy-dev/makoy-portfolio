import Image from "next/image";
import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";

export default function Home() {
    return (
        <>
            <div className="pb-[100vh]">
                <Hero />
                <Skills />
                <Projects />
            </div>            
        </>
    );
}
