import { Button } from "@/components/ui/button";
import ProjectCard from "@/app/components/project-card";
import TechStack from "@/app/components/tech-stack";
import Navbar from "@/app/components/Navbar";
import "./globals.css";
import type React from "react";
import { Github, Linkedin, Mail, } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="w-full">
        <section id="about" className="py-8 md:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Full Stack Developer
                </h1>
                <p className="mx-auto max-w-[700px] text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400">
                  Building digital experiences with modern technologies. Focused
                  on creating elegant solutions to complex problems.
                </p>
              </div>
              <div className="flex space-x-4 mt-6">
                <Link href="https://github.com/riteshdavv" target="_blank">
                  <Button variant="outline" size="icon" className="h-10 w-10">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/riteshdavv/" target="_blank">
                  <Button variant="outline" size="icon" className="h-10 w-10">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:ritesh.davv@gmail.com">
                  <Button variant="outline" size="icon" className="h-10 w-10">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-8 md:py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="BuggedIRL"
                description="An AI-powered bug-to-meme generator that turns frustrating errors into shareable comic relief."
                image="/buggedirl.png"
                link="https://github.com/riteshdavv/buggedirl"
                weblink="https://bugged-irl.vercel.app"
                tags={["Next.js", "HuggingFace API","Meme Generation API (ImgFlip)"]}
              />
              <ProjectCard
                title="GitShamed"
                description="An AI-powered Git Roast platform where users receive humorous roast-style reviews of their code."
                image="/gitshamed.jpg"
                link="https://github.com/riteshdavv/gitshamed"
                weblink="/"
                tags={[ "Next.js", "Python (FastAPI)", "HuggingFace API", "GitHub API"]}
              />
              <ProjectCard
                title="GitWrecked"
                description="A GitHub analytics dashboard that transforms your contributions into
                a gamified visual report."
                image="/gitwrecked.jpg"
                link="https://github.com/riteshdavv/gitbattle"
                weblink="/"
                tags={["Next.js", "GitHub API", "Chart.js", "D3.js"]}
              />
            </div>
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
