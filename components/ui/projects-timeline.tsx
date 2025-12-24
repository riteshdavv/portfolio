"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Package, Calendar, Zap, Github, Brain, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Instrument_Serif } from "next/font/google";
import {
    SiRust,
    SiTauri,
    SiOllama,
    SiNextdotjs,
    SiReact,
    SiDocker,
    SiTypescript,
    SiTailwindcss,
    SiGooglechrome,
    SiFramer,
    SiPrisma,
    SiPostgresql,
    SiOpenai,
    SiElectron,
    SiNodedotjs,
    SiPython,
    SiFigma,
    SiVercel,
    SiShadcnui,
    SiHuggingface
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

const instrument = Instrument_Serif({
    subsets: ['latin'],
    variable: '--font-instrument-serif',
    weight: ['400']
})

// Technology type definition
export type Technology = {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
};

// Predefined technologies map
const TECHNOLOGIES: Record<string, Technology> = {
    rust: { name: "RUST", icon: SiRust },
    tauri: { name: "TAURI", icon: SiTauri },
    ollama: { name: "OLLAMA", icon: SiOllama },
    docker: { name: "DOCKER", icon: SiDocker },
    nextjs: { name: "NEXT.JS", icon: SiNextdotjs },
    react: { name: "REACT", icon: SiReact },
    typescript: { name: "TYPESCRIPT", icon: SiTypescript },
    tailwind: { name: "TAILWIND CSS", icon: SiTailwindcss },
    api: { name: "OS LEVEL API", icon: TbApi },
    chrome: { name: "CHROME EXTENSION", icon: SiGooglechrome },
    framer: { name: "MOTION.DEV", icon: SiFramer },
    prisma: { name: "PRISMA", icon: SiPrisma },
    postgres: { name: "POSTGRESQL", icon: SiPostgresql },
    openai: { name: "OPENAI", icon: SiOpenai },
    electron: { name: "ELECTRON", icon: SiElectron },
    nodejs: { name: "NODE.JS", icon: SiNodedotjs },
    python: { name: "PYTHON", icon: SiPython },
    figma: { name: "FIGMA", icon: SiFigma },
    vercel: { name: "VERCEL", icon: SiVercel },
    shadcn: { name: "SHADCN/UI", icon: SiShadcnui },
    huggingface: { name: "HUGGINGFACE", icon: SiHuggingface },
    image: { name: "IMGFLIP - MEME GENERATION API", icon: Image },
};

export type ProjectEntry = {
    icon: any;
    title: string;
    subtitle: string;
    description: string;
    items?: string[];
    image?: string;
    technologies?: string[]; // Array of technology keys
    projectUrl?: string;
    githubUrl?: string;
};

export interface ProjectProps {
    title?: string;
    description?: string;
    entries?: ProjectEntry[];
    className?: string;
}

export const defaultEntries: ProjectEntry[] = [
    {
        icon: Package,
        title: "Elysium - AI Reality Time Logger",
        subtitle: "Work In Progress • Dec 2025",
        description:
            "An AI-powered productivity tracker that logs keystrokes, app usage, and time spent; then compares it against your daily goals to generate behavioral insights.",
        items: [
            "Improved user time-allocation by 40% via log analysis",
            "95%+ accuracy tracking using native OS APIs",
            "Robust data pipelines for session logging",
            "Actionable insights mapping behavior to goals",
        ],
        image: "/elysium.png",
        technologies: ["rust", "tauri", "python", "ollama", "openai", "postgres", "api", "nextjs", "react", "typescript", "prisma"],
        projectUrl: "https://riteshsingh.vercel.app/elysium",
        githubUrl: "https://github.com/riteshdavv/elysium",
    },
    {
        icon: Brain,
        title: "Cerebral - Automation Assistant",
        subtitle: "Work In Progress • Dec 2025",
        description:
            "An AI assistant that automates multi-app workspace setup, intelligently detects developer intent, identifies productivity barriers and organizes workflows based on user needs.",
        items: [
            "Automated 20+ frequent development tasks",
            "Reduced context-switching time by 60%",
            "Automated multi-app workspace setup via scripts",
            "85% accuracy intent-detection system",
        ],
        image: "/cerebral.png",
        technologies: ["rust", "tauri", "python", "chrome", "docker", "ollama", "openai", "api"],
        projectUrl: "https://riteshsingh.vercel.app/cerebral",
        githubUrl: "https://github.com/riteshdavv/cerebral",
    },
    {
        icon: Zap,
        title: "BuggedIRL - AI Bug to Meme",
        subtitle: "Version 1.2.0 • Mar 2025",
        description:
            "An AI-powered bug-to-meme generator that turns frustrating errors into shareable comic relief.",
        items: [
            "Animated dropdown menus and modals",
            "Smooth transitions between pages",
            "Custom easing curves for a premium feel",
            "Reduced layout shift for better stability",
        ],
        image:
            "/buggedirl.png",
        technologies: ["nextjs", "huggingface", "image"],
        projectUrl: "https://bugged-irl.vercel.app",
        githubUrl: "https://github.com/riteshdavv/buggedirl",
    }
];

// Technology badge component
function TechBadge({ techKey }: { techKey: string }) {
    const tech = TECHNOLOGIES[techKey];
    if (!tech) return null;

    const IconComponent = tech.icon;
    return (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-700 bg-gray-900/50 text-xs font-medium text-gray-300 hover:border-gray-600 transition-colors">
            <IconComponent className="h-3.5 w-3.5" />
            <span>{tech.name}</span>
        </div>
    );
}

// Content panel component for the active entry
function ContentPanel({ entry }: { entry: ProjectEntry }) {
    const Icon = entry.icon;
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center rounded-lg border-2 border-[#bd925d] p-[6px]">
                        <Icon size={28} color="#bd925d" />
                    </span>
                    <h2 className={cn("text-3xl md:text-5xl font-bold tracking-tight text-[#ffcfa5]", instrument.className)}>
                        {entry.title}
                    </h2>
                </div>

                <p className="text-xs font-medium text-[#bd925d] uppercase tracking-wider">
                    {entry.subtitle}
                </p>

                <p className="text-base text-muted-foreground leading-relaxed">
                    {entry.description}
                </p>
            </div>

            {/* Bullet Points */}
            {entry.items && entry.items.length > 0 && (
                <ul className="space-y-3">
                    {entry.items.map((item, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                            className="flex items-start gap-2 text-sm text-muted-foreground/90"
                        >
                            <span className="mt-[2.5px] flex h-4 w-4 shrink-0 items-center justify-center text-[#ffcfa5]">
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                                </svg>
                            </span>
                            <span>{item}</span>
                        </motion.li>
                    ))}
                </ul>
            )}

            {/* Technology Badges */}
            {entry.technologies && entry.technologies.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="flex flex-wrap gap-2"
                >
                    {entry.technologies.map((techKey, i) => (
                        <TechBadge key={i} techKey={techKey} />
                    ))}
                </motion.div>
            )}

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap justify-center gap-1 md:justify-start md:gap-3">
                {entry.projectUrl && (
                    <Button asChild size="sm" className="md:h-10 md:px-6 md:has-[>svg]:px-4 md:gap-2">
                        <Link href={entry.projectUrl} target="_blank">View {entry.title.split(' - ')[0]}</Link>
                    </Button>
                )}
                {entry.githubUrl && (
                    <Button
                        asChild
                        size="sm"
                        variant="secondary"
                        className="border border-border bg-transparent md:h-10 md:px-6 md:has-[>svg]:px-4 md:gap-2"
                    >
                        <Link href={entry.githubUrl} target="_blank"><Github className="scale-110 dark:text-white" />GitHub Repository</Link>
                    </Button>
                )}
            </div>
        </div>
    );
}

export default function ProjectTimeline({
    title = "Curated Projects",
    description = "The projects I have worked on.",
    entries = defaultEntries,
}: ProjectProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Set up a single IntersectionObserver with better threshold detection
    useEffect(() => {
        // Store visibility ratios for each element
        const visibilityMap = new Map<number, number>();

        const observer = new IntersectionObserver(
            (observerEntries) => {
                // Update visibility ratios for each entry
                observerEntries.forEach((entry) => {
                    const index = imageRefs.current.findIndex((ref) => ref === entry.target);
                    if (index !== -1) {
                        visibilityMap.set(index, entry.intersectionRatio);
                    }
                });

                // Find the most visible element
                let maxRatio = 0;
                let mostVisibleIndex = 0;

                visibilityMap.forEach((ratio, index) => {
                    if (ratio > maxRatio) {
                        maxRatio = ratio;
                        mostVisibleIndex = index;
                    }
                });

                // Only update if we have a clearly visible element
                if (maxRatio > 0.1) {
                    setActiveIndex(mostVisibleIndex);
                }
            },
            {
                // Use multiple thresholds for smoother detection
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                // Observe the center portion of the viewport
                rootMargin: "-20% 0px -20% 0px",
            }
        );

        // Observe all image refs
        imageRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            observer.disconnect();
        };
    }, [entries.length]);

    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
                    <p className="mb-6 text-base text-muted-foreground md:text-lg">
                        {description}
                    </p>
                    <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
                        {title}
                    </h1>
                </div>

                {/* Two-column layout */}
                <div className="flex flex-col mx-6 md:grid md:grid-cols-7 gap-8 md:gap-14">
                    {/* Left Column - Images (Scrollable) */}
                    <div className="hidden md:flex flex-col w-full md:col-span-4">
                        {entries.map((entry, index) => (
                            <div
                                key={index}
                                ref={(el) => {
                                    imageRefs.current[index] = el;
                                }}
                                className="min-h-[70vh] flex items-center py-12"
                            >
                                <div
                                    className={`relative w-full overflow-hidden rounded-xl h-[70vh] bg-amber-200 will-change-[transform,opacity] ${activeIndex === index
                                        ? "opacity-100 scale-100"
                                        : "opacity-40 scale-95"
                                        }`}
                                    style={{
                                        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out',
                                    }}
                                >
                                    {entry.image && (
                                        <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl shadow-lg border border-white/20 bg-background/5">
                                            <img
                                                src={entry.image}
                                                alt={`${entry.title} visual`}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column - Content (Sticky) */}
                    <div className="hidden md:flex md:col-span-3 sticky top-24 h-[calc(100vh-8rem)] items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{
                                    duration: 0.3,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="w-full will-change-[transform,opacity]"
                            >
                                <ContentPanel entry={entries[activeIndex]} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Mobile: Show content below each image */}
                <div className="md:hidden space-y-16 mt-8">
                    {entries.map((entry, index) => (
                        <div key={index} className="space-y-8">
                            <div className="relative w-full overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-gray-500 to-gray-600 p-6 shadow-2xl">
                                {entry.image && (
                                    <div className="relative w-full overflow-hidden rounded-xl shadow-lg border border-white/20 bg-background/5">
                                        <img
                                            src={entry.image}
                                            alt={`${entry.title} visual`}
                                            className="h-auto w-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                )}
                            </div>
                            <ContentPanel entry={entry} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
