"use client"

import { FiSun, FiMoon } from "react-icons/fi"

interface ThemeToggleProps {
    theme: "light" | "dark"
    toggleTheme: () => void
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
    return (
        <button
            onClick={toggleTheme}
            className="fixed top-6 md:top-8 right-6 md:right-8 z-50 p-2 md:p-3 rounded-full glass border border-accent/30 dark:border-accent/25 hover:border-accent/50 dark:hover:border-accent/40 transition-all duration-500 hover:shadow-lg hover:shadow-accent/20 group active:scale-95"
            aria-label="Toggle theme"
        >
            <div className="relative w-5 h-5 md:w-6 md:h-6">
                <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                        theme === "light" ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 -rotate-180"
                    }`}
                >
                    <FiSun className="text-amber-500 group-hover:text-amber-600 transition-colors" size={20} strokeWidth={2.5} />
                </div>
                <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                        theme === "dark" ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 -rotate-180"
                    }`}
                >
                    <FiMoon
                        className="text-blue-400 dark:text-blue-300 group-hover:text-blue-300 dark:group-hover:text-blue-200 transition-colors"
                        size={20}
                        strokeWidth={2.5}
                    />
                </div>
            </div>
        </button>
    )
}
