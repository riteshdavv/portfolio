"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Package, Calendar, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiTailwindcss,
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
} from "react-icons/si";

// Technology type definition
export type Technology = {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
};

// Predefined technologies map
const TECHNOLOGIES: Record<string, Technology> = {
    nextjs: { name: "NEXT.JS", icon: SiNextdotjs },
    react: { name: "REACT", icon: SiReact },
    typescript: { name: "TYPESCRIPT", icon: SiTypescript },
    tailwind: { name: "TAILWIND CSS", icon: SiTailwindcss },
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
};

export type TimeLine_01Entry = {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    subtitle: string;
    description: string;
    items?: string[];
    image?: string;
    technologies?: string[]; // Array of technology keys
    button?: {
        url: string;
        text: string;
    };
};

export interface TimeLine_01Props {
    title?: string;
    description?: string;
    entries?: TimeLine_01Entry[];
    className?: string;
}

export const defaultEntries: TimeLine_01Entry[] = [
    {
        icon: Package,
        title: "Elysium | AI Reality Time Logger",
        subtitle: "Work In Progress • Dec 2025",
        description:
            "An AI-powered productivity tracker that logs keystrokes, app usage, and time spent; then compares it against your daily goals to generate behavioral insights.",
        items: [
            "New Data Grid with sorting, filtering, and pagination",
            "Kanban board with drag-and-drop support",
            "Animated mega menu component",
            "Masonry grid layout for galleries and portfolios",
            "Extended accessibility support across all components",
        ],
        image: "/elysium.jpg",
        technologies: ["nextjs", "react", "typescript", "tailwind", "prisma", "openai", "electron"],
        button: {
            url: "https://ruixenui.com",
            text: "Explore Components",
        },
    },
    {
        icon: Sparkles,
        title: "Cerebral | Automation Assistant",
        subtitle: "Work In Progress • Dec 2025",
        description:
            "An AI assistant that automates multi-app workspace setup, intelligently detects developer intent, identifies productivity barriers and organizes workflows based on user needs.",
        items: [
            "Real-time theme preview in the dashboard",
            "Customizable color palettes, typography, and spacing",
            "Preset themes for quick project setup",
            "Export tokens to CSS variables or JSON",
        ],
        image: "/cerebral.jpg",
        technologies: ["python", "openai", "electron", "react", "typescript"],
    },
    {
        icon: Zap,
        title: "Motion & Interaction Update",
        subtitle: "Version 1.8.0 • Dec 2024",
        description:
            "Micro-interactions across Ruixen UI have been enhanced with Framer Motion, delivering a smoother and more engaging user experience.",
        items: [
            "Animated dropdown menus and modals",
            "Smooth transitions between pages",
            "Custom easing curves for a premium feel",
            "Reduced layout shift for better stability",
        ],
        image:
            "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/dashboard-02.png",
        technologies: ["react", "framer", "typescript", "tailwind"],
    },
    {
        icon: Calendar,
        title: "Initial Pro Release",
        subtitle: "Version 1.5.0 • Oct 2024",
        description:
            "Ruixen UI Pro is here — a premium set of components, templates, and utilities designed for production-grade applications.",
        items: [
            "Full Figma design kit",
            "Extended form components with validation",
            "Chart components with Recharts integration",
            "Ready-to-use dashboard layouts",
        ],
        image:
            "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/featured-06.png",
        technologies: ["nextjs", "react", "typescript", "tailwind", "shadcn", "figma", "vercel"],
        button: {
            url: "https://ruixenui.com/pro",
            text: "View Ruixen UI Pro",
        },
    },
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
function ContentPanel({ entry }: { entry: TimeLine_01Entry }) {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <div className="h-0.5 w-6 bg-pink-500 rounded-full" />
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                        {entry.title}
                    </h2>
                </div>

                <p className="text-xs font-medium text-pink-500 uppercase tracking-wider">
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
                            <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-pink-500/10 text-pink-500">
                                <span className="h-1 w-1 rounded-full bg-current" />
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
                    className="flex flex-wrap gap-2 pt-2"
                >
                    {entry.technologies.map((techKey, i) => (
                        <TechBadge key={i} techKey={techKey} />
                    ))}
                </motion.div>
            )}

            {/* Action Button */}
            {entry.button && (
                <div className="pt-2">
                    <Button
                        asChild
                        size="sm"
                        className="rounded-full bg-pink-600 hover:bg-pink-700 text-white shadow-lg shadow-pink-500/20"
                    >
                        <a href={entry.button.url} target="_blank" rel="noreferrer">
                            {entry.button.text}
                            <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
                        </a>
                    </Button>
                </div>
            )}
        </div>
    );
}

export default function TimeLine_01({
    title = "Curated Projects",
    description = "The projects I have worked on.",
    entries = defaultEntries,
}: TimeLine_01Props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Set up IntersectionObserver to detect which image is in view
    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        imageRefs.current.forEach((ref, index) => {
            if (!ref) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        // When an image section is intersecting the viewport center area
                        if (entry.isIntersecting) {
                            setActiveIndex(index);
                        }
                    });
                },
                {
                    // Trigger when the element is near the center of the viewport
                    rootMargin: "-40% 0px -40% 0px",
                    threshold: 0,
                }
            );

            observer.observe(ref);
            observers.push(observer);
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, [entries.length]);

    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center mb-20 md:mb-32">
                    <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
                        {title}
                    </h1>
                    <p className="mb-6 text-base text-muted-foreground md:text-lg">
                        {description}
                    </p>
                </div>

                {/* Two-column layout */}
                <div className="flex flex-col mx-20 md:flex-row gap-12 md:gap-24">
                    {/* Left Column - Images (Scrollable) */}
                    <div className="w-full md:w-1/2 flex-shrink-0">
                        {entries.map((entry, index) => (
                            <div
                                key={index}
                                ref={(el) => {
                                    imageRefs.current[index] = el;
                                }}
                                className="min-h-screen flex items-center py-12"
                            >
                                <div
                                    className={`relative w-full overflow-hidden transition-all duration-500 h-screen bg-amber-200 ${activeIndex === index
                                        ? "opacity-100 scale-100"
                                        : "opacity-40 scale-95"
                                    }`}
                                >
                                    {entry.image && (
                                        <div className="relative w-full overflow-hidden rounded-xl shadow-lg border border-white/20 bg-background/5">
                                            <img
                                                src={entry.image}
                                                alt={`${entry.title} visual`}
                                                className="w-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column - Content (Sticky) */}
                    <div className="hidden md:flex w-1/2 sticky -translate-y-10 top-0 h-screen items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="w-full"
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
