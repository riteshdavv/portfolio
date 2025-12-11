"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, FileText, Home, User, Briefcase, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("Home")

  // 1. Define standard navigation items
  const mainNavItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Projects', url: '#projects', icon: Briefcase },
    { name: 'Contact', url: '#contact', icon: Mail },
  ]

  // 2. Define Resume separately to control placement
  const resumeItem = {
    name: 'Resume',
    url: 'https://drive.google.com/file/d/1m0JCbSYirb8Kp7MWdfQ25BdX4tydvzum/view?usp=sharing',
    icon: FileText
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          
          {/* Logo (Left) */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 z-50"
            onClick={() => setActiveTab("Home")}
          >
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
              Ritesh
            </span>
          </Link>

          {/* CENTER NAV ITEMS (Desktop) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center gap-1 bg-white/5 border border-black/20 dark:bg-black/30 dark:border-gray-200/20 backdrop-blur-lg py-[3px] px-1 rounded-full shadow-sm">
              
              {/* Loop through Main Items */}
              {mainNavItems.map((item) => {
                const isActive = activeTab === item.name
                const isExternal = item.url.startsWith('http')
                
                return (
                  <Link
                    key={item.name}
                    href={item.url}
                    target={isExternal ? "_blank" : undefined}
                    onClick={() => setActiveTab(item.name)}
                    className={cn(
                      "relative cursor-pointer text-[13px] font-semibold px-4 py-2 rounded-full transition-colors duration-200",
                      "text-foreground/60 hover:text-primary font-normal",
                      isActive && "text-primary"
                    )}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                        {item.name}
                    </span>
                    
                    {/* Tubelight Glow Effect */}
                    {isActive && (
                      <motion.div
                        layoutId="lamp-navbar"
                        className="absolute inset-0 w-full bg-gradient-to-b from-gray-200/5 to-gray-200/50 rounded-full -z-0 dark:bg-gradient-to-b from-white/15 to-gray-500/20"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      >
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full dark:bg-primary/60">
                          <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                          <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                          <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                        </div>
                      </motion.div>
                    )}
                  </Link>
                )
              })}

              {/* THE DIVIDER / TALLY */}
              <div className="mx-2 h-4 w-[1px] bg-foreground/80 rounded-full" /> 

              {/* THE RESUME LINK */}
              <Link
                  href={resumeItem.url}
                  target="_blank"
                  onClick={() => setActiveTab(resumeItem.name)}
                  className={cn(
                    "relative cursor-pointer text-[13px] font-semibold px-4 py-2 rounded-full transition-colors duration-200",
                    "text-foreground/60 hover:text-primary font-normal",
                    activeTab === resumeItem.name && "text-primary"
                  )}
                >
                   <span className="relative z-10 flex items-center gap-2">
                        {resumeItem.name}
                    </span>

                    {/* Resume Glow Effect */}
                    {activeTab === resumeItem.name && (
                      <motion.div
                        layoutId="lamp-navbar"
                        className="absolute inset-0 w-full bg-black/5 rounded-full -z-0 dark:bg-white/15"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                         <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full dark:bg-primary/60">
                          <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                          <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                          <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                        </div>
                      </motion.div>
                    )}
              </Link>

            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4 z-50">
            <ThemeToggle />
            
            <button
              className="md:hidden p-2 -mr-2 text-foreground/80 hover:text-foreground"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 border-b border-border/10 bg-background/95 backdrop-blur-xl shadow-lg z-40"
        >
          <nav className="flex flex-col items-center space-y-6 px-4 py-8">
            {/* Merge arrays for mobile view so it renders as one list */}
            {[...mainNavItems, resumeItem].map((item) => (
                <Link
                key={item.name}
                href={item.url}
                target={item.url.startsWith('http') ? "_blank" : undefined}
                className={cn(
                    "text-md font-medium transition-colors flex items-center gap-2",
                    activeTab === item.name ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
                onClick={() => {
                    setActiveTab(item.name)
                    setIsMenuOpen(false)
                }}
                >
                <item.icon size={16} />
                {item.name}
                </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  )
}