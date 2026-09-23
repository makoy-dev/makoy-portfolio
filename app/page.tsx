import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import About from "@/components/sections/about";
import ContactForm from "@/components/sections/contact-form";

export default function Home() {
    return (
        <main>
            <Hero />
            <Projects />
            <Skills />
            <Experience />
            <About />
            <ContactForm />
        </main>
    );
}
