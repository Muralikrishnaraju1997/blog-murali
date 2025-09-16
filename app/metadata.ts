import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadataKeywords = [
    "Blog",
    "React",
    "Murali Krishna Blog",
    "Murali Krishna Blog Template",
    "Murali Krishna Next.js Blog",
    "Murali Krishna Tailwind Blog",
    "Next.js Blog Template",
    "Next.js Blog",
    "React Blog",
    "Web Development",
    "Tutorials",
    "MDX Blog",
    "Modern Blog Template",
]

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: metadataKeywords,
    authors: [
        {
            name: "Murali Krishna",
            url: siteConfig.url,
        },
    ],
    creator: "Murali Krishna",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        creator: "@murali_krishna",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};