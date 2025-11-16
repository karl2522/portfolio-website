"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Navigation() {
    const [activeSection, setActiveSection] = useState("home")
    const pathname = usePathname()

    useEffect(() => {
        // Only handle scroll on home page
        if (pathname !== "/") return

        const handleScroll = () => {
            const sections = ["home", "about", "projects", "contact"]
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section === "home" ? "hero" : section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll() // Initial check

        return () => window.removeEventListener("scroll", handleScroll)
    }, [pathname])

    const scrollToSection = (sectionId: string) => {
        if (pathname !== "/") {
            window.location.href = `/#${sectionId}`
            return
        }

        const element = document.getElementById(sectionId === "home" ? "hero" : sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }

    const navItems = [
        { id: "home", label: "Home", sectionId: "hero" },
        { id: "projects", label: "Projects", sectionId: "projects" },
        { id: "about", label: "About", sectionId: "about" },
        { id: "contact", label: "Contact", sectionId: "contact" },
    ]

    return (
        <nav className="fixed top-3 sm:top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-xs sm:max-w-sm md:max-w-md px-2 sm:px-3 md:px-4">
            <div className="rounded-full border border-border/50 bg-card/90 backdrop-blur-md shadow-lg px-1 sm:px-1.5 md:px-2 py-1 sm:py-1.5">
                <div className="flex items-center justify-center gap-0.5 sm:gap-1">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id
                        return (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.sectionId)}
                                className={`relative px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                                    isActive
                                        ? "bg-background text-foreground shadow-sm"
                                        : "text-muted-foreground hover:text-foreground hover:bg-background/50 hover:shadow-md"
                                }`}
                            >
                                {item.label}
                            </button>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}

