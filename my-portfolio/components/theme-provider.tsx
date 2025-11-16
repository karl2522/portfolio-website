"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import ThemeToggle from "./theme-toggle"

interface ThemeContextType {
    theme: "light" | "dark"
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider")
    }
    return context
}

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
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            {children}
        </ThemeContext.Provider>
    )
}
