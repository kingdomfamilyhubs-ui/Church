"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Media", href: "/sermons" },
    { name: "Events", href: "/events" },
    { name: "Prophetic Insight", href: "/scripture-insight" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-primary p-2 rounded-sm group-hover:bg-primary/90 transition-all rotate-45">
                 <Zap className="h-7 w-7 text-black -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-white leading-none">
                  SPIRIT <span className="text-primary italic">REVELATION</span>
                </span>
                <span className="text-[10px] tracking-[0.4em] text-muted-foreground uppercase">Global Church</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="bg-primary text-black hover:bg-primary/90 rounded-none h-12 px-6 font-bold uppercase tracking-widest">
                <Link href="/give" className="flex items-center gap-2">
                  <Heart className="h-4 w-4 fill-current" />
                  Partnership
                </Link>
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-white/10 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-8 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-4 text-sm font-bold uppercase tracking-[0.2em] border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6">
              <Button asChild className="w-full bg-primary text-black h-14 rounded-none font-bold uppercase tracking-widest">
                <Link href="/give" onClick={() => setIsOpen(false)}>
                  Giving & Partnership
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
