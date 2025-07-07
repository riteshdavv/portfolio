"use client";

import { Button } from "@/components/ui/button";
import { FaGithub, FaGlobe, FaBook } from "react-icons/fa";
import Navbar from "../components/Navbar";

const techStack = [
  "Tauri",
  "Python",
  "Llama API",
  "PostgreSQL",
  "Node.js",
  "Windows APIs",
  "Selenium",
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
    <main className="min-h-screen flex flex-col items-center overflow-hidden">
      {/* Hero Section */}
      <Navbar />
      <section className="relative w-full h-lvh md:h-screen text-center flex flex-col gap-y-4 justify-center">
        <div className="absolute inset-0 -z-10 opacity-10" />
        <h1 className="text-6xl md:text-[10rem] font-extrabold tracking-tight text-shadow text-shadow-amber-400 text-shadow-xl">
          Elysium.
        </h1>
        {/* <p className="text-xl md:text-[52px] mx-auto text-gray-400 dark:text-gray-400 font-extralight">
          The AI Reality Time Logger
        </p> */}
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-justify">
          Elysium is an AI-powered productivity tracker that logs your real-time
          activity — apps, keystrokes, and focus — and compares it with your
          goals to generate deep behavioral insights. Built for developers who
          want to master their time and workflow.
        </p>
        <div className="mt-8 flex justify-center">
          <Button className="text-lg px-8 py-6 shadow-lg rounded-full border bg-transparent text-black hover:text-white border-black hover:border hover:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black dark:border-white" size="lg">
            Discover Elysium →
          </Button>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="w-full max-w-5xl">
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-4 uppercase tracking-wider">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {techStack.map((tech, index) => (
              <span
                key={tech}
                className={`px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 
                                text-neutral-700 dark:text-neutral-300 border border-neutral-200 
                                dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 
                                transition-colors rounded-full inline-block`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-5xl">
        {/* Key Achievements */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-6 uppercase tracking-wider">
            Key Achievements
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`text-center p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 
                             border border-neutral-200 dark:border-neutral-800`}
              >
                <div className="text-3xl md:text-4xl font-bold text-gray-600 mb-2">
                  {achievement.metric}
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 leading-tight">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-5xl">
        <h2 className="text-2xl font-semibold mb-6">⚡ Key Features</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 text-base list-disc pl-5">
          <li>
            Logs app usage, keyboard and mouse activity, and window focus in
            real-time.
          </li>
          <li>
            Compares your actual behavior with your planned schedule to generate
            insights.
          </li>
          <li>
            Local-first, privacy-preserving architecture with zero cloud sync.
          </li>
          <li>
            Built using Rust, Tauri, Electron, and TypeScript for speed and
            portability.
          </li>
          <li>
            Visual dashboards for daily patterns, session flow, and productivity
            decay.
          </li>
        </ul>
      </section>

      {/* CTA Button Group */}
      <section className="w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <a
            href="https://github.com/riteshdavv/elysium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="w-full flex justify-center items-center gap-2"
            >
              View on GitHub <FaGithub />
            </Button>
          </a>
          <a
            href="https://elysium-demo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="w-full flex justify-center items-center gap-2"
            >
              Try the Demo <FaGlobe />
            </Button>
          </a>
          <a
            href="https://docs.google.com/document/d/EXAMPLE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="w-full flex justify-center items-center gap-2"
            >
              View Docs <FaBook />
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
}
