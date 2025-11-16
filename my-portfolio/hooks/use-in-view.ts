"use client"

import { useEffect, useMemo, useRef, useState } from "react"

export type UseInViewOptions = {
    threshold?: number | number[]
    rootMargin?: string
    /**
     * When false, the value can toggle in/out as you scroll.
     * Defaults to true (reveal once).
     */
    once?: boolean
}

export function useInView(options: UseInViewOptions = {}) {
    const elementRef = useRef<HTMLElement | null>(null)
    const [inView, setInView] = useState(false)

    const prefersReducedMotion = useMemo(() => {
        if (typeof window === "undefined" || typeof matchMedia === "undefined") return false
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }, [])

    useEffect(() => {
        const el = elementRef.current
        if (!el) return
        if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                    if (options.once !== false) observer.unobserve(entry.target)
                } else if (options.once === false) {
                    setInView(false)
                }
            },
            {
                threshold: options.threshold ?? 0.2,
                rootMargin: options.rootMargin ?? "0px 0px -10%",
            },
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [options.threshold, options.rootMargin, options.once])

    return {
        ref: elementRef as unknown as React.RefObject<HTMLDivElement>,
        inView: prefersReducedMotion ? true : inView,
    }
}



