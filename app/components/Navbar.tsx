"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link className="flex items-center space-x-2" href="/">
            <span className="text-xl font-bold">Ritesh</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ThemeToggle/>
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-foreground/80"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium transition-colors hover:text-foreground/80"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-foreground/80"
            >
              Contact
            </Link>
            <Link
              href="https://drive.google.com/file/d/1zLfYhXoay_71bOVj13Yf8EbmsQm1Ro3D/view?usp=sharing"
              target="_blank"
              className="text-sm font-medium transition-colors hover:text-foreground/80 hover:cursor-pointer"
            >
              <Button variant="outline" className="h-9 hover:cursor-pointer">
                Resume
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2"
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

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col items-center space-y-4 px-4 py-6">
            <ThemeToggle/>
            <Link
              href="#about"
              className="text-base font-medium transition-colors hover:text-foreground/80"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-base font-medium transition-colors hover:text-foreground/80"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-base font-medium transition-colors hover:text-foreground/80"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="https://drive.google.com/file/d/1zLfYhXoay_71bOVj13Yf8EbmsQm1Ro3D/view?usp=sharing"
              target="_blank"
              className="text-sm font-medium transition-colors hover:text-foreground/80 hover:cursor-pointer"
            >
              <Button variant="outline" className="h-9 hover:cursor-pointer">
                Resume
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
