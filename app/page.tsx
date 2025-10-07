import Image from "next/image";
import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";

export default function Home() {
    return (
        <>
            <div className="pb-[100vh]">
                <Hero />
                <Skills />
            </div>            
        </>
    );
}
