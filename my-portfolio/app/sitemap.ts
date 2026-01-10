import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://jaredomen.com",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://jaredomen.com/projects",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://jaredomen.com/contact",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ]
}
