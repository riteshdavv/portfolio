"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <section id="about" className="">
          <div className="container mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="flex flex-col justify-center items-center space-y-6 px-2">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ">
                  <Image
                    src="/ritesh.png"
                    alt="Ritesh Kumar Singh"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover scale-135 hover:scale-148 transition-transform ease-in-out"
                  />
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
                  Ritesh Kumar Singh
                </h1>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 text-gray-600 dark:text-gray-300 rounded-full text-sm border border-gray-500 ">
                    GSoC' 25 Contributor
                  </span>
                  <span className="px-3 py-1 text-gray-500 dark:text-gray-300 rounded-full text-sm border border-gray-500">
                    Full Stack Developer
                  </span>
                  <span className="px-3 py-1 text-gray-500 dark:text-gray-300 rounded-full text-sm border border-gray-500">
                    Open Source Enthusiast
                  </span>
                </div>

                <p className="text-justify mx-4 tracking-tight md:leading-relaxed text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-300 max-w-[725px]">
                  I build intelligent web systems,{" "}
                  <span className="text-gray-800 dark:text-white font-medium">
                    open-source modules
                  </span>
                  , and AI-powered developer tools that scale. Currently
                  contributing to the Appwrite Drupal Integration Module via{" "}
                  <span className="text-orange-500/65 dark:text-orange-300 font-medium">
                    Google Summer of Code 2025
                  </span>
                  .
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-x-8 gap-y-4 pt-6">
                <Link href="#projects" className="">
                  <Button
                    size="lg"
                    variant="default"
                    className="font-medium px-6 hover:cursor-pointer"
                  >
                    View My Projects
                  </Button>
                </Link>
                <div className="flex space-x-4 justify-center">
                  <Link href="https://github.com/riteshdavv" target="_blank">
                    <Button variant="outline" size="icon" className="h-10 w-10">
                      <FaGithub className="h-5 w-5 scale-135 dark:text-white" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link
                    href="https://linkedin.com/in/riteshdavv/"
                    target="_blank"
                  >
                    <Button variant="outline" size="icon" className="h-10 w-10">
                      <FaLinkedinIn className="h-5 w-5 scale-125 dark:text-white" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:ritesh.davv@gmail.com">
                    <Button variant="outline" size="icon" className="h-10 w-10">
                      <FaEnvelope className="h-5 w-5 scale-115 dark:text-white" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </AuroraBackground>
  );
}