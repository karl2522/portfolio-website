export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Jared Karl Omen",
        url: "https://jaredomen.com",
        jobTitle: "Full-Stack Developer",
        sameAs: [
            "https://imjared.com", // Example, replace with real ones if known or leave generically useful
            "https://linkedin.com/in/jaredomen", // Inferred from context or placeholder
            "https://github.com/karl2522",
        ],
        worksFor: {
            "@type": "Organization",
            name: "Freelance / Open to Work", // Safe placeholder
        },
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}
