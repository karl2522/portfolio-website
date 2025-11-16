import Hero from "@/components/hero"
import TechBanner from "@/components/tech-banner"
import About from "@/components/about"
import TechStack from "@/components/tech-stack"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export default function Home() {
    return (
        <main className="bg-background text-foreground">
            <Navigation />
            <Hero />
            <TechBanner />
            <About />
            <TechStack />
            <Experience />
            <Projects />
            <Certifications />
            <Contact />
            <Footer />
        </main>
    )
}
