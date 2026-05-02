
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Heart, Cross } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Sermons", href: "/sermons" },
    { name: "Events", href: "/events" },
    { name: "Bible Insights", href: "/scripture-insight" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-2 rounded-lg group-hover:bg-primary/90 transition-colors">
                 <Cross className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-headline font-bold hidden md:block">
                Growing In Faith <span className="text-accent">Global Church</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild variant="default" className="bg-primary text-white hover:bg-primary/90">
                <Link href="/give" className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Give Online
                </Link>
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-accent focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Button asChild className="w-full bg-primary text-white">
                <Link href="/give" onClick={() => setIsOpen(false)}>
                  Give Online
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
