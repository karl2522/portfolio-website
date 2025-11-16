"use client"

import { useInView } from "@/hooks/use-in-view"

export default function Footer() {
    const { ref: footerRef } = useInView({ threshold: 0.1, once: true })

    return (
        <footer ref={footerRef} className="w-full px-6 sm:px-8 md:px-12">
            <div className="max-w-6xl mx-auto">
                {/* Bottom Bar */}
                <div className="border-t border-border pt-8 pb-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div className="text-sm text-muted-foreground">
                            <p>© 2025 Jared Karl Omen. All rights reserved.</p>
                    </div>
                        <div className="flex items-center gap-6 text-xs text-muted-foreground">
                            <a href="/privacy-policy" className="hover:text-accent transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <a href="/terms-of-service" className="hover:text-accent transition-colors duration-300">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
