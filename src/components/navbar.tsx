"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Heart, Zap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface NavLink {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: NavLink[] = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    {
      name: "GIVE",
      href: "/give",
      subItems: [
        { name: "GOOD HOPE VOW", href: "/give" },
        { name: "D-REALMS TRAINING CENTRE", href: "/give" },
        { name: "FIRST FRUIT", href: "/give" },
        { name: "SALARY VOW", href: "/give" },
        { name: "USA PROPERTY VOW", href: "/give" },
      ],
    },
    { name: "VISIT", href: "/contact" },
    {
      name: "RESOURCES",
      href: "/resources/library",
      subItems: [
        { name: "GIF STORE", href: "/resources/library" },
        { name: "DIGITAL SUBSCRIPTION", href: "/resources/library" },
        { name: "DIGITAL LIBRARY", href: "/resources/library" },
        { name: "PARTNERSHIP", href: "/give" },
      ],
    },
    { name: "JOIN YOUR TRIBE", href: "/join" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between h-20 md:h-24 items-center">
          <div className="flex-shrink-0 flex items-center gap-4">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="bg-primary p-2 group-hover:bg-white transition-all rotate-45">
                <Zap className="h-6 w-6 text-black -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-black tracking-tighter text-white leading-none uppercase italic">
                  GROWING <span className="text-primary">IN FAITH</span>
                </span>
                <span className="text-[8px] md:text-[9px] tracking-[0.4em] text-muted-foreground uppercase mt-1">Global Church</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.subItems ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-white hover:text-primary transition-colors outline-none">
                        {link.name} <ChevronDown className="h-3 w-3" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-zinc-950 border-white/10 text-white min-w-[240px] rounded-none p-0 mt-4">
                        {link.subItems.map((sub) => (
                          <DropdownMenuItem key={sub.name} asChild>
                            <Link
                              href={sub.href}
                              className="w-full text-[9px] font-black uppercase tracking-[0.2em] py-4 px-6 hover:bg-primary hover:text-black transition-colors cursor-pointer block"
                            >
                              {sub.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[10px] font-black uppercase tracking-widest text-white hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button asChild className="bg-primary text-black hover:bg-white rounded-none h-11 px-8 font-black uppercase tracking-widest text-[10px]">
                <Link href="/give" className="flex items-center gap-2">
                  <Heart className="h-3.5 w-3.5 fill-current" />
                  Partnership
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-2 text-white hover:text-primary transition-colors">
                  <Menu className="h-8 w-8" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black border-white/10 p-0 text-white w-[300px]">
                <SheetHeader className="p-6 border-b border-white/5">
                  <SheetTitle className="text-left">
                     <div className="flex items-center gap-3">
                        <Zap className="h-5 w-5 text-primary" />
                        <span className="text-sm font-black tracking-tighter uppercase italic">
                          GROWING <span className="text-primary">IN FAITH</span>
                        </span>
                     </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="px-6 py-8 space-y-2">
                  <Accordion type="single" collapsible className="w-full">
                    {navLinks.map((link) => (
                      <div key={link.name} className="border-b border-white/5">
                        {link.subItems ? (
                          <AccordionItem value={link.name} className="border-none">
                            <AccordionTrigger className="py-5 text-[10px] font-black uppercase tracking-widest text-white hover:text-primary hover:no-underline">
                              {link.name}
                            </AccordionTrigger>
                            <AccordionContent className="pb-6">
                              <div className="flex flex-col pl-4 space-y-4">
                                {link.subItems.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    href={sub.href}
                                    className="text-[9px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary py-1"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ) : (
                          <Link
                            href={link.href}
                            className="block py-5 text-[10px] font-black uppercase tracking-widest text-white hover:text-primary"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </Accordion>
                  <div className="pt-12">
                    <Button asChild className="w-full bg-primary text-black h-14 rounded-none font-black uppercase tracking-widest text-[10px]">
                      <Link href="/give" onClick={() => setIsOpen(false)}>
                        Give & Partner
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
