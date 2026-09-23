import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import About from "@/components/sections/about";
import ContactForm from "@/components/sections/contact-form";
import { SITE_URL } from "@/lib/site";

export default function Home() {
    const profileSchema = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": new URL("/#profile", SITE_URL).href,
        url: SITE_URL.href,
        name: "Makoy Cameña — Full-stack Developer",
        mainEntity: {
            "@type": "Person",
            "@id": new URL("/#person", SITE_URL).href,
            name: "Makoy Cameña",
            alternateName: "Makoy Camena",
            url: SITE_URL.href,
            image: new URL("/images/profpic.jpg", SITE_URL).href,
            jobTitle: "Full-stack Developer",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Iloilo",
                addressCountry: "PH",
            },
            sameAs: [
                "https://github.com/makoy-dev",
                "https://www.linkedin.com/in/makoy-came%C3%B1a-14a42312b/",
            ],
            knowsAbout: [
                "Full-stack development",
                "React",
                "Next.js",
                "Laravel",
                "PHP",
                "TypeScript",
                "JavaScript",
                "PostgreSQL",
                "MySQL",
            ],
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(profileSchema).replace(/</g, "\\u003c"),
                }}
            />
            <main>
                <Hero />
                <Projects />
                <Skills />
                <Experience />
                <About />
                <ContactForm />
            </main>
        </>
    );
}
