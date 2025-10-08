import Image from "next/image";
import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import About from "@/components/sections/about";
import ContactForm from "@/components/sections/contact-form";

export default function Home() {
    return (
        <>
            <div>
                <Hero />
                <Skills />
                <Projects />
                <About />
                <ContactForm />
            </div>            
        </>
    );
}
