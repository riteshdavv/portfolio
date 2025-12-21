"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { Inter, Playfair_Display, Poppins, Instrument_Serif } from 'next/font/google'
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ElysiumBadge } from "@/components/ui/elysium-badge";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
const instrument = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  weight: ['400']
})

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
        className="relative flex flex-col gap-6 items-center justify-center px-4"
      >
        <section id="about" className="">
          <div className="container mx-auto px-2 sm:px-6 lg:px-8 space-y-8">
            <ElysiumBadge/>
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="flex flex-col justify-center items-center space-y-6 px-2 cursor-default">
                <h1 className={cn("text-center tracking-tight text-3xl sm:text-5xl md:text-[4rem] text-gray-500 dark:text-gray-300 py-2", instrument.className)}>
                  I build intelligent web systems,{" "}
                  <br />
                  <span className="text-gray-800 dark:text-white font-medium">
                    and scalable{" "}
                  </span>
                  <span className="bg-gradient-to-r from-gray-800 to-gray-800 dark:from-[#ffcfa5] dark:to-[#bd925d] bg-clip-text text-transparent font-medium italic">
                    open-source modules.
                  </span>
                </h1>
                <h3 className={cn("tracking-tight text-base sm:text-xl md:text-[1.5rem] text-gray-500 dark:text-gray-300 font-medium flex py-2 items-center", poppins.className)}>
                  I'm Ritesh Kumar Singh, &nbsp;
                  <span className="mx-2 text-gray-800 dark:text-white font-medium overflow-hidden rounded-full">
                    <Image src="/ritesh.png" alt="Ritesh Kumar Singh" width={128} height={128} className="w-18 h-10 object-cover scale-130 hover: transition-transform ease-in-out -translate-y-0.5 translate-x-[1.25px]" />
                  </span> &nbsp;
                  <span className="bg-gradient-to-r from-gray-800 to-gray-800 dark:from-[#ffd0b7] dark:to-[#ffbb67] bg-clip-text text-transparent font-medium">
                    a GSoC'25 Contributor.
                  </span>
                </h3>
                
              </div>
              <div className="flex flex-col sm:flex-row gap-x-8 gap-y-4 pt-6">
                <Link href="#projects" className="">
                  <InteractiveHoverButton text="View My Projects"/>
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