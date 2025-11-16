"use client"

import SectionReveal from "@/components/section-reveal"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa6"

export default function TermsOfService() {
    return (
        <main className="bg-background text-foreground min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
                {/* Header */}
                <div className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300 mb-8 group"
                    >
                        <FaArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
                        <span className="text-sm font-medium">Back to Home</span>
                    </Link>
                    <SectionReveal as="h1" className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4" animation="up" durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        <span className="gradient-text">Terms of Service</span>
                    </SectionReveal>
                    <SectionReveal as="p" className="text-muted-foreground text-base md:text-lg mb-2" animation="up" delayMs={100} durationMs={700} inViewOptions={{ threshold: 0.2, once: true }}>
                        Last updated: January 2025
                    </SectionReveal>
                    <SectionReveal className="w-12 h-1 bg-gradient-to-r from-accent to-accent/60 rounded-full" animation="up" delayMs={150} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }} />
                </div>

                {/* Content */}
                <div className="space-y-8 md:space-y-12">
                    <SectionReveal className="prose prose-slate dark:prose-invert max-w-none" animation="up" delayMs={200} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        <div className="rounded-xl border border-border bg-card/30 backdrop-blur-sm p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Agreement to Terms</h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                            </p>
                        </div>
                    </SectionReveal>

                    <SectionReveal className="prose prose-slate dark:prose-invert max-w-none" animation="up" delayMs={300} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        <div className="rounded-xl border border-border bg-card/30 backdrop-blur-sm p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Use License</h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>Permission is granted to temporarily access the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Modify or copy the materials</li>
                                    <li>Use the materials for any commercial purpose or for any public display</li>
                                    <li>Attempt to reverse engineer any software contained on the website</li>
                                    <li>Remove any copyright or other proprietary notations from the materials</li>
                                </ul>
                            </div>
                        </div>
                    </SectionReveal>

                    <SectionReveal className="prose prose-slate dark:prose-invert max-w-none" animation="up" delayMs={400} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        <div className="rounded-xl border border-border bg-card/30 backdrop-blur-sm p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Intellectual Property</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                All content, features, and functionality of this website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, are the exclusive property of Jared Karl Omen and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                            </p>
                        </div>
                    </SectionReveal>

                    <SectionReveal className="prose prose-slate dark:prose-invert max-w-none" animation="up" delayMs={500} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        <div className="rounded-xl border border-border bg-card/30 backdrop-blur-sm p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">User Conduct</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">You agree not to use the website to:</p>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                                <li>Violate any applicable laws or regulations</li>
                                <li>Infringe upon the rights of others</li>
                                <li>Transmit any harmful, offensive, or inappropriate content</li>
                                <li>Interfere with or disrupt the website or servers</li>
                                <li>Attempt to gain unauthorized access to any portion of the website</li>
                            </ul>
                        </div>
                    </SectionReveal>

                    <SectionReveal className="prose prose-slate dark:prose-invert max-w-none" animation="up" delayMs={600} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        <div className="rounded-xl border border-border bg-card/30 backdrop-blur-sm p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Disclaimer</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The materials on this website are provided on an &apos;as is&apos; basis. Jared Karl Omen makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                            </p>
                        </div>
                    </SectionReveal>

                    <SectionReveal className="prose prose-slate dark:prose-invert max-w-none" animation="up" delayMs={700} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        <div className="rounded-xl border border-border bg-card/30 backdrop-blur-sm p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Limitation of Liability</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                In no event shall Jared Karl Omen or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if Jared Karl Omen or an authorized representative has been notified orally or in writing of the possibility of such damage.
                            </p>
                        </div>
                    </SectionReveal>

                    <SectionReveal className="prose prose-slate dark:prose-invert max-w-none" animation="up" delayMs={800} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        <div className="rounded-xl border border-border bg-card/30 backdrop-blur-sm p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Revisions and Errata</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The materials appearing on this website could include technical, typographical, or photographic errors. Jared Karl Omen does not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.
                            </p>
                        </div>
                    </SectionReveal>

                    <SectionReveal className="prose prose-slate dark:prose-invert max-w-none" animation="up" delayMs={900} durationMs={800} inViewOptions={{ threshold: 0.2, once: true }}>
                        <div className="rounded-xl border border-border bg-card/30 backdrop-blur-sm p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Contact Information</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                If you have any questions about these Terms of Service, please contact us at:
                            </p>
                            <div className="mt-4">
                                <a
                                    href="mailto:joredomen@gmail.com"
                                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-300 font-semibold"
                                >
                                    joredomen@gmail.com
                                </a>
                            </div>
                        </div>
                    </SectionReveal>
                </div>
            </div>
        </main>
    )
}

