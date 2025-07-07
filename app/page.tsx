import { Button } from "@/components/ui/button";
import ProjectCard from "@/app/components/project-card";
import TechStack from "@/app/components/tech-stack";
import Navbar from "@/app/components/Navbar";
import "./globals.css";
import type React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import ExperienceSection from "./components/experience-section"
import Image from "next/image";
import ProjectSection from "./components/project-section";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="w-full">
        <section id="about" className="py-8 md:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="flex flex-col justify-center items-center space-y-6 px-4">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ">
                  <Image
                    src="/ritesh.png"
                    alt="Ritesh Kumar Singh"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover scale-135 hover:scale-148 transition-transform ease-in-out"
                  />
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Ritesh Kumar Singh
                </h1>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="px-3 py-1 text-gray-600 dark:text-gray-400 rounded-full text-sm border border-gray-500 ">
                    GSoC' 25 Contributor
                  </span>
                  <span className="px-3 py-1 text-gray-500 dark:text-gray-400 rounded-full text-sm border border-gray-500">
                    Full Stack Developer
                  </span>
                  <span className="px-3 py-1 text-gray-500 dark:text-gray-400 rounded-full text-sm border border-gray-500">
                    Open Source Enthusiast
                  </span>
                </div>
                
                <p className="text-justify mx-4 tracking-tight md:leading-relaxed text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-[725px]">
                  I build intelligent web systems, <span className="text-gray-800 dark:text-white font-medium">open-source modules</span>, and AI-powered developer tools that scale.
                  Currently contributing to the Appwrite Drupal Integration Module via <span className="text-orange-500/65 dark:text-orange-300 font-medium">Google Summer of Code 2025</span>.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-x-8 gap-y-4 pt-6">
                <Link
                  href="#projects"
                  className=""
                >
                  <Button size="lg" className="bg-gray-800 transition-transform ease-in-out text-white dark:text-black dark:hover:bg-white dark:transition-transform dark:ease-in-out dark:bg-gray-100/90 hover:bg-black font-medium px-6 hover:cursor-pointer">
                    View My Projects
                  </Button>
                </Link>
                <div className="flex space-x-3 justify-center">
                  <Link href="https://github.com/riteshdavv" target="_blank">
                    <Button variant="outline" size="icon" className="h-10 w-10">
                      <FaGithub className="h-5 w-5 scale-135" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/riteshdavv/" target="_blank">
                    <Button variant="outline" size="icon" className="h-10 w-10">
                      <FaLinkedinIn className="h-5 w-5 scale-125" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:ritesh.davv@gmail.com">
                    <Button variant="outline" size="icon" className="h-10 w-10">
                      <FaEnvelope className="h-5 w-5 scale-115" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        <section>
          <ExperienceSection />
        </section>

        <section id="projects" className="py-8 md:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Projects
            </h2>
            <ProjectSection/>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-muted/50">
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
