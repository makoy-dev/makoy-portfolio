import Image from "next/image";
import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import About from "@/components/sections/about";

export default function Home() {
    return (
        <>
            <div className="pb-[100vh]">
                <Hero />
                <Skills />
                <Projects />
                <About />
            </div>            
        </>
    );
}
