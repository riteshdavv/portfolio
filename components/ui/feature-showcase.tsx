"use client";

import * as React from "react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Github, Globe } from "lucide-react";

import { Playfair_Display, Instrument_Serif } from "next/font/google";

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const instrument = Instrument_Serif({
    subsets: ['latin'],
    variable: '--font-instrument-serif',
    weight: '400',
})


export type TabMedia = {
    value: string; // unique value for Tabs
    label: string; // button label
    src: string;   // image url
    alt?: string;
};

export type ShowcaseStep = {
    id: string;
    title: string;
    text: string;
};

export type FeatureShowcaseProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    /** small chips under the description */
    stats?: { text: string; icon?: React.ReactNode }[];
    /** accordion steps on the left */
    steps?: ShowcaseStep[];
    /** right-side tabs (image per tab) */
    tabs: TabMedia[];
    /** which tab is active initially */
    defaultTab?: string;
    /** fixed panel height in px (also applied as min-height) */
    panelMinHeight?: number;
    className?: string;
};

export function FeatureShowcase({
    eyebrow = "Discover",
    title,
    description,
    stats = [
        { text: "1 reference" },
        { text: "30s setup" },
        { text: "Share‑ready" }
    ],
    steps = [
        {
            id: "step-1",
            title: "Drop a reference",
            text:
                "Upload a single image. We read it like a brief and extract palette, texture and cues.",
        },
        {
            id: "step-2",
            title: "Pick the vibe",
            text:
                "Switch between mockup, screen, or abstract views and tune the mood instantly.",
        },
        {
            id: "step-3",
            title: "Export & share",
            text:
                "Get a moodboard ready for your team with consistent visuals and notes.",
        },
    ],
    tabs,
    defaultTab,
    panelMinHeight = 720,
    className,
}: FeatureShowcaseProps) {
    const initial = defaultTab ?? (tabs[0]?.value ?? "tab-0");

    return (
        <section className={cn("w-full text-foreground", className)}>
            <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:py-20 lg:gap-14 ">
                {/* Left column */}
                <div className="md:col-span-6">
                    <Button variant="outline" size="icon" className="w-max px-3 mb-6">
                        <span>{eyebrow}</span>
                    </Button>

                    <h2 className={cn("text-balance bg-gradient-to-r from-gray-800 to-gray-800 dark:from-[#ffcfa5] dark:to-[#bd925d] bg-clip-text text-transparent text-4xl font-medium sm:text-5xl md:text-6xl pb-1", instrument.className)}>
                        {title}
                    </h2>

                    {description ? (
                        <p className="mt-6 max-w-xl text-muted-foreground">{description}</p>
                    ) : null}

                    {/* Timeline / Progress Stats */}
                    <div className="mt-8 p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm cursor-default">
                        <div className="flex items-center justify-between mb-4">
                            <div className="space-y-0.5">
                                <div className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Timeline</div>
                                <div className="text-sm font-medium text-white">May '25 — Aug '25</div>
                            </div>
                            <Badge variant="secondary" className="gap-1.5 bg-white/10 text-white hover:bg-white/20 border-0">
                                <Globe className="h-3 w-3 text-gray-400" />
                                Remote
                            </Badge>
                        </div>

                        <div className="space-y-2">
                            <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-800 dark:from-[#ffcfa5] dark:to-[#bd925d] w-full" />
                            </div>
                            <div className="flex justify-between text-[10px] font-medium text-zinc-500 uppercase tracking-wider">
                                <span>Kickoff</span>
                                <span>Completion</span>
                            </div>
                        </div>

                        {/* Stats chips */}
                        {stats.length > 0 && (
                            <div className="mt-6 flex flex-wrap gap-x-2 gap-y-[10px]">
                                {stats.map((s, i) => (
                                    <Badge
                                        key={i}
                                        variant="secondary"
                                        className="bg-muted text-foreground/75 flex items-center gap-1.5 px-2 py-1 rounded-md font-normal"
                                    >
                                        {s.icon}
                                        {s.text}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Steps (Accordion) */}
                    <div className="mt-6 max-w-xl">
                        <Accordion type="single" collapsible className="w-full ml-3">
                            {steps.map((step) => (
                                <AccordionItem key={step.id} value={step.id}>
                                    <AccordionTrigger className="text-left text-base font-medium cursor-pointer">
                                        {step.title}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-sm text-muted-foreground cursor-default">
                                        {step.text}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>

                        {/* CTAs */}
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Button asChild size="lg">
                                <Link href="https://gist.github.com/riteshdavv/a4530c8e44162db6a3e3ac64ab8c3b25" target="_blank">View Project Report</Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="secondary"
                                className="border border-border bg-transparent"
                            >
                                <Link href="https://github.com/riteshdavv/drupal-appwrite" target="_blank"><Github className="scale-110 dark:text-white" />GitHub Repository</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Right column (unchanged) */}
                <div className="md:col-span-6">
                    <Card
                        className="relative overflow-hidden rounded-2xl border border-border bg-card/40 p-0 shadow-sm h-full"
                        style={{}}
                    >
                        <Tabs defaultValue={initial} className="relative h-full w-full">
                            {/* Absolute-fill media container */}
                            <div className="relative h-full w-full">
                                {tabs.map((t, idx) => (
                                    <TabsContent
                                        key={t.value}
                                        value={t.value}
                                        className={cn(
                                            "absolute inset-0 m-0 h-full w-full",
                                            "data-[state=inactive]:hidden"
                                        )}
                                    >
                                        <img
                                            src={t.src}
                                            alt={t.alt ?? t.label}
                                            className="h-full w-full object-cover"
                                            loading={idx === 0 ? "eager" : "lazy"}
                                        />
                                    </TabsContent>
                                ))}
                            </div>

                            {/* Tab controls (pill) */}
                            <div className="pointer-events-auto absolute inset-x-0 bottom-4 z-10 flex w-full justify-center">
                                <TabsList className="flex gap-2 rounded-xl border border-border bg-background/80 p-1 backdrop-blur supports-[backdrop-filter]:bg-background/70">
                                    {tabs.map((t) => (
                                        <TabsTrigger
                                            key={t.value}
                                            value={t.value}
                                            className="rounded-lg px-4 py-2 data-[state=active]:bg-foreground data-[state=active]:text-background"
                                        >
                                            {t.label}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                            </div>
                        </Tabs>
                    </Card>
                </div>
            </div>
        </section>
    );
}
