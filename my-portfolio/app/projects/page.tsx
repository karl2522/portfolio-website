import ProjectsScrollStack from "@/components/projects-scroll-stack"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Projects & Case Studies",
    description: "Explore detailed case studies and technical breakdowns of my full-stack projects.",
}

export default function ProjectsPage() {
    return (
        <main className="container mx-auto px-4 py-24 min-h-screen">
            <h1 className="text-4xl font-bold mb-8 text-center gradient-text">Projects & Case Studies</h1>
            <ProjectsScrollStack />
        </main>
    )
}
