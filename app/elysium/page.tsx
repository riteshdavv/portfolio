"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaGlobe, FaBook, FaFolder } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { FaChartSimple } from "react-icons/fa6";

const techStack = [
  "Rust",
  "Tauri",
  "Python",
  "Llama API",
  "SQLite",
  "Node.js",
  "Windows APIs",
  "WebSocket",
];

const achievements = [
  { metric: "40%", description: "Productivity Improvement" },
  { metric: "95%+", description: "Activity Tracking Accuracy" },
  { metric: "500+", description: "Activity Logs Analyzed" },
  { metric: "40%", description: "Better Time Allocation" },
];

export default function ElysiumPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex flex-col items-center overflow-hidden cursor-default">
        {/* Hero Section */}
        <section className="relative w-full h-screen text-center flex flex-col justify-center items-center">
          <div className="absolute inset-0 -z-10 opacity-10" />
          <h1 className="text-6xl md:text-[10rem] font-extrabold text-shadow font-serif text-shadow-amber-400 text-shadow-xl">
            Elysium.
          </h1>
          <p className="mt-2 text-[1.35rem] md:text-[58px] scale-y-93 mx-auto opacity-70 font-light md:font-thin tracking-tighter">
            The AI Reality Time Logger
          </p>
          <p className="mt-8 text-lg md:text-xl md:leading-9 mx-10 max-w-3xl font-light text-gray-600 dark:text-gray-400 text-justify">
            Elysium is an AI-powered productivity tracker that logs your{" "}
            <span className="underline decoration-1 decoration-gray-400 underline-offset-7">
              real-time activity
            </span>{" "}
            such as apps, keystrokes, and focus and compares it with your goals
            to generate deep{" "}
            <span className="underline decoration-1 decoration-gray-400 underline-offset-7">
              behavioral insights
            </span>
            . Built for developers who want to master their time and workflow.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="https://github.com/riteshdavv/elysium">
              <Button
                className="text-lg px-8 py-6 shadow-lg rounded-full border bg-transparent text-black hover:text-white border-black hover:border hover:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black dark:border-white cursor-pointer"
                size="lg"
              >
                Discover Elysium →
              </Button>
            </Link>
          </div>
          <div className="translate-y-25 h-1 w-full bg-neutral-200 dark:bg-neutral-800"></div>
        </section>

        {/* Tech Stack */}
        <section className="w-full md:max-w-5xl px-10 md:my-10">
          <div className="mb-12">
            <h3 className="text-base font-semibold text-neutral-500 dark:text-neutral-400 mb-4 uppercase tracking-wider">
              Tech Stack
            </h3>
            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 max-w-3xl mx-auto">
                {techStack.map((tech, index) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 
                                text-neutral-700 dark:text-neutral-300 border border-neutral-200 
                                dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 
                                transition-colors rounded-full inline-block cursor-pointer`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-5xl px-10">
          {/* Key Achievements */}
          <div className="mb-12">
            <h3 className="text-base font-semibold text-neutral-500 dark:text-neutral-400 mb-6 uppercase tracking-wider">
              Key Achievements
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mx-auto">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`text-center p-5 md:p-10 rounded-lg animate-scale-in group bg-white/60 dark:bg-neutral-900/60 
                             backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-800/50 
                             hover:bg-white/80 dark:hover:bg-neutral-900/80 hover:border-neutral-300/50 
                             dark:hover:border-neutral-700/50 transition-all duration-300 
                             hover:shadow-md hover:shadow-amber-200 hover:-translate-y-1`}
                  style={{ animationDelay: `${2.0 + index * 0.1}s` }}
                >
                  <div className="text-3xl md:text-5xl font-bold text-gray-600 dark:text-gray-300 mb-2 group-hover:text-amber-400 dark:group-hover:text-amber-300">
                    {achievement.metric}
                  </div>
                  <div className="text-[12.5px] md:text-base text-neutral-600 dark:text-neutral-500 leading-tight">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="w-full max-w-5xl md:my-20">
          <div className="animate-fade-in-up delay-1900 mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-neutral-800 dark:text-neutral-200 mb-8 text-center">
              Key Features.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-10">
              {[
                {
                  title: "Real-time Activity Tracking",
                  description:
                    "Logs app usage, keyboard and mouse activity, and window focus in real-time.",
                },
                {
                  title: "Intelligent Behavior Analysis",
                  description:
                    "Compares your actual behavior with your planned schedule to generate insights.",
                },
                {
                  title: "Privacy-First Architecture",
                  description:
                    "Local-first, privacy-preserving architecture with zero cloud sync.",
                },
                {
                  title: "High-Performance Stack",
                  description:
                    "Built using Rust, Tauri, Electron, and TypeScript for speed and portability.",
                },
                {
                  title: "Visual Analytics Dashboard",
                  description:
                    "Visual dashboards for daily patterns, session flow, and productivity decay.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`animate-scale-in group py-6 px-2 md:py-8 md:px-4 rounded-2xl bg-white/60 dark:bg-neutral-900/60 
                             backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-800/50 
                             hover:bg-white/80 dark:hover:bg-neutral-900/80 hover:border-neutral-300/50 
                             dark:hover:border-neutral-700/50 transition-all duration-300 
                             hover:shadow-md hover:shadow-amber-200 hover:-translate-y-1 flex`}
                  style={{ animationDelay: `${2.0 + index * 0.1}s` }}
                >
                  <div className="h-full border-r-2 dark:border-r-neutral-600 border-r-neutral-300 px-4 flex flex-col items-center justify-center">
                    <FaChartSimple className="h-10 w-10 scale-105" />
                  </div>
                  <div className="pr-2 pl-6">
                    <h3
                      className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-3 
                                 group-hover:text-amber-400 dark:group-hover:text-amber-300 transition-colors"
                    >
                      {feature.title}
                    </h3>
                    <p className="text-[12.5px] md:text-base text-neutral-600 dark:text-neutral-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="animate-fade-in-up delay-2300 my-20">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-neutral-800 dark:text-neutral-200 mb-8 text-center">
              Explore the Project.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-10 my-10">
              {[
                {
                  href: "https://github.com/riteshdavv/elysium",
                  title: "View on GitHub",
                  icon: <FaGithub />,
                  description: "Explore the source code",
                },
                {
                  href: "https://elysium-demo.vercel.app",
                  title: "Try the Demo",
                  icon: <FaGlobe />,
                  description: "Experience it live",
                },
                {
                  href: "https://docs.google.com/document/d/EXAMPLE",
                  title: "View Documentation",
                  icon: <FaFolder />,
                  description: "Read the full docs",
                },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`animate-scale-in group p-6 md:p-8 rounded-2xl bg-white/60 dark:bg-neutral-900/60 
                             backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-800/50 
                             hover:bg-white/80 dark:hover:bg-neutral-900/80 hover:border-neutral-300/50 
                             dark:hover:border-neutral-700/50 transition-all duration-300 
                             hover:shadow-md hover:shadow-amber-200 hover:-translate-y-1 text-center`}
                  style={{ animationDelay: `${2.5 + index * 0.1}s` }}
                >
                  <div className="text-3xl flex flex-col items-center mb-3 group-hover:scale-110 duration-300 group-hover:text-amber-400 dark:group-hover:text-amber-300 transition-colors">
                    {link.icon}
                  </div>
                  <h3
                    className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2 
                             transition-colors"
                  >
                    {link.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {link.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
