import { Button } from "@/components/ui/button";
import ProjectCard from "@/app/components/project-card";
import TechStack from "@/app/components/tech-stack";
import Navbar from "@/app/components/Navbar";
import "./globals.css";
import type React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import ProjectSection from "./components/project-section";
import { Timeline } from "./components/projects";
import Hero from "./components/Hero";
import GSoCSection from "./components/GSoCSection";
import TimeLine_01 from "@/components/ui/projects-timeline";

export default function Page() {
  return (
    <div className="min-h-screen bg-muted/50">
      <Navbar />

      <main className="w-full">
        <section>
          <Hero />
        </section>

        <section>
          <GSoCSection />
        </section>

        <section id="projects" className="py-8 md:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Projects
            </h2>
            <ProjectSection />
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 max-w-7xl">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 Ritesh.dev. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
