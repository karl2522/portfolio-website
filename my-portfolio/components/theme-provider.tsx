"use client"

import type React from "react"

import { useEffect, useState } from "react"
import ThemeToggle from "./theme-toggle"

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false)
    const [theme, setTheme] = useState<"light" | "dark">("light")

    useEffect(() => {
        // Check system preference and localStorage
        const saved = localStorage.getItem("theme") as "light" | "dark" | null
        const isDark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches

        setTheme(isDark ? "dark" : "light")
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) return

        const html = document.documentElement
        if (theme === "dark") {
            html.classList.add("dark")
        } else {
            html.classList.remove("dark")
        }
        localStorage.setItem("theme", theme)
    }, [theme, mounted])

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    if (!mounted) return <>{children}</>

    return (
        <>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            {children}
        </>
    )
}
