"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, 
  ExternalLink, 
  ShieldCheck, 
  Database, 
  Cpu, 
  Zap, 
  Layers, 
  ArrowRight,
  TrendingUp 
} from "lucide-react";
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

// --- 1. The Interactive Visual Content (From previous design) ---
const interactiveTabs = {
  feature: {
    value: "feature",
    label: "Core Feature",
    component: (
      <div className="relative w-full h-full flex items-center justify-center p-8 bg-gradient-to-br from-zinc-900/50 to-black/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-transparent opacity-50" />
        <div className="relative w-64 h-64 rounded-full border border-blue-500/20 flex items-center justify-center backdrop-blur-sm">
           <div className="absolute inset-0 rounded-full bg-blue-500/5 animate-pulse"></div>
           <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ type: "spring", duration: 0.8 }}
             className="flex flex-col items-center gap-4"
           >
              <ShieldCheck className="w-24 h-24 text-blue-400 drop-shadow-[0_0_25px_rgba(96,165,250,0.4)]" />
              <div className="px-4 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-200 text-xs font-mono backdrop-blur-md">
                OAuth 2.0 Protocol
              </div>
           </motion.div>
        </div>
      </div>
    )
  },
  stack: {
    value: "stack",
    label: "Tech Stack",
    component: (
      <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-900/50 to-black/50">
        <div className="grid grid-cols-2 gap-8 relative z-10">
           {[
             { icon: Database, label: "Appwrite", color: "text-pink-500", bg: "bg-pink-500/10", border: "border-pink-500/20" },
             { icon: Layers, label: "Drupal", color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
             { icon: Cpu, label: "PHP 8.3", color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
             { icon: Zap, label: "React", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" }
           ].map((item, i) => (
             <motion.div
               key={i}
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: i * 0.1 + 0.2 }}
               className={cn("flex flex-col items-center p-6 border rounded-xl backdrop-blur-md transition-all hover:scale-105", item.bg, item.border)}
             >
                <item.icon className={cn("w-10 h-10 mb-3", item.color)} />
                <span className="text-xs text-zinc-300 font-medium tracking-wide">{item.label}</span>
             </motion.div>
           ))}
        </div>
        <div className="absolute w-[400px] h-[400px] border border-dashed border-white/5 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none"></div>
      </div>
    )
  },
  performance: {
    value: "performance",
    label: "Performance",
    component: (
      <div className="relative w-full h-full flex items-center justify-center flex-col gap-8 bg-gradient-to-br from-zinc-900/50 to-black/50">
         <div className="relative w-80 h-10 bg-zinc-800/50 rounded-full overflow-hidden border border-white/10">
            <motion.div 
               initial={{ width: 0 }}
               animate={{ width: "100%" }}
               transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
               className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-600 to-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
            />
         </div>
         <div className="flex flex-col items-center">
            <div className="flex items-baseline gap-2">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-7xl font-serif font-bold text-white tracking-tighter"
                >
                  40%
                </motion.span>
                <span className="text-emerald-400 font-medium text-xl mb-1">Faster</span>
            </div>
            <p className="text-sm text-zinc-500 uppercase tracking-widest mt-2 font-medium">Media Load Time</p>
         </div>
      </div>
    )
  },
};

// --- 2. GSoC Showcase Component (Adapted from FeatureShowcase) ---
export function GSoCExperience() {
  const [activeTab, setActiveTab] = useState("feature");

  const steps = [
    {
      id: "feature",
      title: "Secure Authentication",
      text: "Implemented robust OAuth 2.0 protocol bridging Drupal's user management with Appwrite's secure session handling, ensuring data integrity across platforms.",
    },
    {
      id: "stack",
      title: "Modern Tech Stack",
      text: "Architected the solution using a hybrid stack: Drupal 10 for content management, Appwrite Cloud for backend services, and PHP 8.3 for server-side logic.",
    },
    {
      id: "performance",
      title: "Performance Optimization",
      text: "Refactored media handling pipelines to utilize Appwrite's Storage API, resulting in a 40% reduction in server load and significantly faster asset delivery.",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-20 lg:py-32 overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-12 lg:gap-20 relative z-10">
        
        {/* --- Left Column: Narrative --- */}
        <div className="md:col-span-6 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="outline" className="border-blue-500/30 text-blue-300 bg-blue-500/10 px-3 py-1 text-xs uppercase tracking-wider">
              Experience
            </Badge>
            <span className="h-px w-8 bg-zinc-800"></span>
            <span className="text-zinc-500 text-xs font-mono">May '25 — Aug '25</span>
          </div>

          <h2 className="text-balance font-serif text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl text-white mb-6">
            Google Summer <br/> of Code '25
          </h2>

          <p className="max-w-xl text-zinc-400 text-lg leading-relaxed mb-8">
            <span className="text-white font-medium">Drupal Association × Appwrite.</span> Successfully bridged the gap between a robust CMS and modern backend services, enabling secure, scalable, and high-performance applications.
          </p>

          {/* Steps Accordion */}
          <div className="max-w-xl">
            <Accordion 
              type="single" 
              collapsible 
              className="w-full" 
              defaultValue="feature"
              onValueChange={(val) => val && setActiveTab(val)}
            >
              {steps.map((step) => (
                <AccordionItem key={step.id} value={step.id} className="border-white/10">
                  <AccordionTrigger className="text-left text-base font-medium text-zinc-200 hover:text-white hover:no-underline py-4">
                    {step.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-zinc-400 leading-relaxed pb-4">
                    {step.text}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-black hover:bg-zinc-200 rounded-full px-8 font-semibold">
                <Link href="#report">
                  View Project Report <ArrowRight className="w-4 h-4 ml-2"/>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/10 bg-transparent text-white hover:bg-white/10 rounded-full px-6"
              >
                <Link href="#repo" className="flex items-center gap-2">
                  <Github className="w-4 h-4" /> Repository
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* --- Right Column: Interactive Visuals --- */}
        <div className="md:col-span-6 lg:pl-10 flex items-center">
          <Card
            className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-0 shadow-2xl backdrop-blur-xl"
            style={{ minHeight: 600 }}
          >
            <Tabs 
                value={activeTab} 
                onValueChange={setActiveTab} 
                className="relative h-full w-full flex flex-col"
            >
              
              {/* Interactive Content Area (Replaces simple <img>) */}
              <div className="relative flex-1 w-full overflow-hidden">
                <AnimatePresence mode="wait">
                  {Object.values(interactiveTabs).map((t) => (
                    <TabsContent
                      key={t.value}
                      value={t.value}
                      className="absolute inset-0 m-0 h-full w-full data-[state=inactive]:hidden"
                      forceMount
                    >
                      {activeTab === t.value && (
                        <motion.div
                           initial={{ opacity: 0, filter: "blur(10px)" }}
                           animate={{ opacity: 1, filter: "blur(0px)" }}
                           exit={{ opacity: 0 }}
                           transition={{ duration: 0.4 }}
                           className="w-full h-full"
                        >
                            {t.component}
                        </motion.div>
                      )}
                    </TabsContent>
                  ))}
                </AnimatePresence>
              </div>

              {/* Tab Controls (Floating Pill) */}
              <div className="absolute bottom-8 inset-x-0 z-20 flex w-full justify-center pointer-events-none">
                <TabsList className="pointer-events-auto flex gap-1 rounded-full border border-white/10 bg-black/60 p-1.5 backdrop-blur-md shadow-lg">
                  {Object.values(interactiveTabs).map((t) => (
                    <TabsTrigger
                      key={t.value}
                      value={t.value}
                      className="rounded-full px-5 py-2.5 text-sm font-medium text-zinc-400 data-[state=active]:bg-zinc-800 data-[state=active]:text-white data-[state=active]:shadow-sm transition-all"
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