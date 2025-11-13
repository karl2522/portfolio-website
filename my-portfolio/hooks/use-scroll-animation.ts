"use client"

import { useEffect, useState, useRef } from "react"

/**
 * Completely rewritten to properly detect scroll position and trigger animations
 * This hook now tracks actual scroll events and updates animation state in real-time
 */
export function useScrollAnimation(threshold = 0.2) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        // Handle scroll events for real-time animation triggering
        const handleScroll = () => {
            const rect = element.getBoundingClientRect()
            const elementTop = rect.top
            const elementHeight = rect.height
            const windowHeight = window.innerHeight

            // Trigger animation when element is within threshold of viewport
            const isInView = elementTop < windowHeight * (1 - threshold) && elementTop + elementHeight > 0
            console.log("[v0] Scroll animation check:", {
                elementTop,
                windowHeight,
                isInView,
                threshold,
            })
            setIsVisible(isInView)
        }

        // Initial check
        handleScroll()

        // Add scroll listener
        window.addEventListener("scroll", handleScroll, { passive: true })
        window.addEventListener("resize", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleScroll)
        }
    }, [threshold])

    return { ref, isVisible }
}
