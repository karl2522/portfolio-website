"use client"

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from "react"

export default function Navigation() {
    const [activeSection, setActiveSection] = useState("home")
    const [pillPosition, setPillPosition] = useState({ left: 0, width: 0 })
    const pathname = usePathname()
    const containerRef = useRef<HTMLDivElement>(null)
    const buttonsRef = useRef<(HTMLButtonElement | null)[]>([])
    const isProgrammaticScroll = useRef(false)
    const targetSectionRef = useRef<string | null>(null)

    useEffect(() => {
        if (pathname !== "/") return

        const handleScroll = () => {
            const sections = ["home", "about", "projects", "contact"]
            const scrollPosition = window.scrollY + 120

            for (const section of sections) {
                const elementId = section === "home" ? "hero" : section
                const element = document.getElementById(elementId)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        if (!isProgrammaticScroll.current || targetSectionRef.current === elementId) {
                            setActiveSection(section)
                        }

                        if (isProgrammaticScroll.current && targetSectionRef.current === elementId) {
                            isProgrammaticScroll.current = false
                            targetSectionRef.current = null
                        }
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [pathname])

    useEffect(() => {
        if (pathname !== "/") return

        const cancelProgrammaticScroll = () => {
            if (isProgrammaticScroll.current) {
                isProgrammaticScroll.current = false
                targetSectionRef.current = null
            }
        }

        window.addEventListener("wheel", cancelProgrammaticScroll, { passive: true })
        window.addEventListener("touchstart", cancelProgrammaticScroll, { passive: true })

        return () => {
            window.removeEventListener("wheel", cancelProgrammaticScroll)
            window.removeEventListener("touchstart", cancelProgrammaticScroll)
        }
    }, [pathname])

    useEffect(() => {
        const activeIndex = navItems.findIndex(item => item.id === activeSection)
        if (activeIndex !== -1 && buttonsRef.current[activeIndex]) {
            const button = buttonsRef.current[activeIndex]
            if (containerRef.current) {
                const containerLeft = containerRef.current.getBoundingClientRect().left
                const buttonRect = button.getBoundingClientRect()
                setPillPosition({
                    left: buttonRect.left - containerLeft,
                    width: buttonRect.width
                })
            }
        }
    }, [activeSection])

    const scrollToSection = (sectionId: string) => {
        if (pathname !== "/") {
            window.location.href = `/#${sectionId}`
            return
        }

        const targetElementId = sectionId === "hero" ? "hero" : sectionId
        const element = document.getElementById(targetElementId)
        if (element) {
            const scrollOffset = 90
            const elementTop = element.getBoundingClientRect().top + window.scrollY
            const targetPosition = Math.max(elementTop - scrollOffset, 0)

            isProgrammaticScroll.current = true
            targetSectionRef.current = targetElementId
            setActiveSection(sectionId === "hero" ? "home" : sectionId)

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            })
        }
    }

    const navItems = [
        { id: "home", label: "Home", sectionId: "hero" },
        { id: "about", label: "About", sectionId: "about" },
        { id: "projects", label: "Projects", sectionId: "projects" },
        { id: "contact", label: "Contact", sectionId: "contact" },
    ]

    return (
        <nav className="fixed top-3 sm:top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-xs sm:max-w-sm md:max-w-md px-2 sm:px-3 md:px-4">
            <div ref={containerRef} className="glass-nav-base rounded-full px-1 sm:px-1.5 md:px-2 py-1 sm:py-1.5 relative overflow-hidden">
                <div
                    className="absolute inset-y-1 sm:inset-y-1.5 rounded-full glass-morphism-pill pointer-events-none"
                    style={{
                        left: `${pillPosition.left}px`,
                        width: `${pillPosition.width}px`,
                        transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                />

                <div className="flex items-center justify-center gap-0.5 sm:gap-1 relative z-10">
                    {navItems.map((item, index) => {
                        const isActive = activeSection === item.id
                        return (
                            <button
                                key={item.id}
                                ref={el => {
                                    buttonsRef.current[index] = el
                                }}
                                onClick={() => scrollToSection(item.sectionId)}
                                className={`relative px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 ease-out cursor-pointer ${
                                    isActive
                                        ? "text-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                }`}
                            >
                                <span className="relative z-20">{item.label}</span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}
