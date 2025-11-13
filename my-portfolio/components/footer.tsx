"use client"

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa6"

export default function Footer() {
    return (
        <footer className="w-full py-12 sm:py-16 px-6 sm:px-8 md:px-12 bg-background border-t border-border">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="font-bold text-foreground mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            {["About", "Tech Stack", "Projects", "Certifications"].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                                        className="text-muted-foreground hover:text-accent transition-colors duration-300"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-foreground mb-4">Social</h3>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                                aria-label="GitHub"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                                aria-label="Twitter"
                            >
                                <FaTwitter size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="sm:col-span-2 md:col-span-2">
                        <h3 className="font-bold text-foreground mb-4">Contact</h3>
                        <a
                            href="mailto:hello@jaredomen.com"
                            className="inline-flex items-center gap-2 text-accent hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-semibold"
                        >
                            <FaEnvelope size={16} />
                            hello@jaredomen.com
                        </a>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
                    <p>© 2025 Jared Karl Omen. All rights reserved.</p>
                    <p>Designed & Built with ❤️</p>
                </div>
            </div>
        </footer>
    )
}
