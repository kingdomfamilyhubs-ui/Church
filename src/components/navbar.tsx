
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, Heart, ChevronDown, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { useFirestore, useDoc } from "@/firebase";
import { doc } from "firebase/firestore";
import { useMemoFirebase } from "@/firebase/use-memo-firebase";
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
  const firestore = useFirestore();
  const [imgError, setImgError] = useState(false);
  
  const brandingRef = useMemoFirebase(() => {
    if (!firestore) return null;
    return doc(firestore, "settings", "branding");
  }, [firestore]);

  const { data: branding } = useDoc(brandingRef);
  
  const logo = branding?.logoUrl || PlaceHolderImages.find(img => img.id === "logo-main")?.imageUrl || "/logo.png";
  const ministryName = branding?.ministryName || "GROWING IN FAITH";

  const navLinks: NavLink[] = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    {
      name: "GIVE",
      href: "/give",
      subItems: [
        { name: "GOOD HOPE VOW", href: "/give" },
        { name: "GIF GLOBAL TRAINING CENTER", href: "/give" },
        { name: "PARTNERSHIP SEED", href: "/give" },
        { name: "FIRST FRUIT", href: "/give" },
      ],
    },
    { name: "EVENTS", href: "/events" },
    {
      name: "VISIT",
      href: "/contact",
      subItems: [
        { name: "CONTACT US", href: "/contact" },
        { name: "MANDATORY TRAINING", href: "/visit/training" },
      ],
    },
    {
      name: "RESOURCES",
      href: "/resources/library",
      subItems: [
        { name: "GIF STORE", href: "/resources/library" },
        { name: "DIGITAL LIBRARY", href: "/resources/library" },
        { name: "SERMON ARCHIVE", href: "/sermons" },
      ],
    },
    { name: "JOIN YOUR TRIBE", href: "/join" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-card border-b border-white/5 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative h-12 w-12 overflow-hidden rounded-md bg-primary/10 flex items-center justify-center border border-primary/20 p-1">
                {(!imgError && logo) ? (
                  <Image 
                    src={logo} 
                    alt="Logo" 
                    fill 
                    className="object-contain p-1 z-10"
                    onError={() => setImgError(true)}
                    unoptimized={logo.startsWith('http') && !logo.includes('picsum') && !logo.includes('unsplash')}
                  />
                ) : null}
                <span className="text-primary font-black italic text-lg absolute z-0">GIF</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] font-black tracking-tighter text-card-foreground leading-none uppercase italic">
                  {ministryName.split(' ').slice(0, 2).join(' ')} <span className="text-primary">{ministryName.split(' ').slice(2).join(' ')}</span>
                </span>
                <span className="text-[7px] tracking-[0.4em] text-card-foreground/50 uppercase mt-1 font-black">Global Church</span>
              </div>
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.subItems ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-1 text-[9px] font-black uppercase tracking-[0.2em] text-card-foreground/80 hover:text-primary transition-colors outline-none">
                        {link.name} <ChevronDown className="h-3 w-3" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-card border-white/10 min-w-[220px] rounded-lg p-2 mt-2 shadow-2xl">
                        {link.subItems.map((sub) => (
                          <DropdownMenuItem key={sub.name} asChild>
                            <Link
                              href={sub.href}
                              className="w-full text-[8px] font-black uppercase tracking-[0.15em] py-3 px-4 text-card-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer block rounded-md"
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
                      className="text-[9px] font-black uppercase tracking-[0.2em] text-card-foreground/80 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="flex items-center gap-6 pl-6 border-l border-white/10">
                <Button asChild variant="ghost" className="h-10 px-4 bg-primary/10 border border-primary/20 hover:bg-primary hover:text-black transition-all group">
                  <Link href="/admin" className="flex items-center gap-2">
                    <LayoutDashboard className="h-4 w-4 text-primary group-hover:text-black" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-primary group-hover:text-black">ADMIN</span>
                  </Link>
                </Button>
                <Button asChild size="sm" className="bg-primary text-black hover:opacity-90 rounded-md font-black uppercase tracking-widest text-[8px] px-6 h-10 shadow-lg border-none">
                  <Link href="/give" className="flex items-center gap-2">
                    <Heart className="h-3 w-3 fill-current" />
                    PARTNER
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-2 text-card-foreground hover:text-primary transition-colors">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-card border-l border-white/5 p-0 w-[280px]">
                <SheetHeader className="p-6 border-b border-white/5">
                  <SheetTitle className="text-left">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-black tracking-tighter uppercase italic text-card-foreground">
                        GROWING <span className="text-primary">IN FAITH</span>
                      </span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="px-6 py-6 space-y-1">
                  <Accordion type="single" collapsible className="w-full">
                    {navLinks.map((link) => (
                      <div key={link.name} className="border-b border-white/5">
                        {link.subItems ? (
                          <AccordionItem value={link.name} className="border-none">
                            <AccordionTrigger className="py-4 text-[9px] font-black uppercase tracking-widest text-card-foreground hover:text-primary hover:no-underline">
                              {link.name}
                            </AccordionTrigger>
                            <AccordionContent className="pb-4">
                              <div className="flex flex-col pl-4 space-y-3">
                                {link.subItems.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    href={sub.href}
                                    className="text-[8px] font-black uppercase tracking-widest text-card-foreground/60 hover:text-primary py-1"
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
                            className="block py-4 text-[9px] font-black uppercase tracking-widest text-card-foreground hover:text-primary"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </Accordion>
                  <div className="pt-8 space-y-4">
                    <Button asChild variant="outline" className="w-full border-primary/20 bg-primary/5 hover:bg-primary hover:text-black h-12">
                      <Link 
                        href="/admin" 
                        className="flex items-center justify-center gap-3 text-[9px] font-black uppercase tracking-widest text-primary hover:text-black"
                        onClick={() => setIsOpen(false)}
                      >
                        <LayoutDashboard className="h-4 w-4" />
                        COMMAND CENTER
                      </Link>
                    </Button>
                    <Button asChild className="w-full bg-primary text-black h-12 rounded-md font-black uppercase tracking-widest text-[9px]">
                      <Link href="/give" onClick={() => setIsOpen(false)}>
                        <Heart className="h-3 w-3 mr-2" /> GIVE & PARTNER
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
