"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Users, Globe, Flame, Star, Zap } from "lucide-react";
import Link from "next/link";

/**
 * EDITING INSTRUCTIONS:
 * To add, remove, or change a "Tribe", simply update the TRIBES array below.
 * - title: The name of the group in bold uppercase.
 * - description: The spiritual mission of the group.
 * - icon: Use a Lucide React icon component.
 * - image: URL for the background (Use Unsplash or your own hosted images).
 */
const TRIBES = [
  {
    title: "YOUTH IMPACT",
    description: "Raising a unique prophetic generation of young disciples to dominate and govern with kingdom culture.",
    icon: Flame,
    image: "https://picsum.photos/seed/tribe-youth/800/1000"
  },
  {
    title: "GLOBAL PROFESSIONALS",
    description: "Equipping kingdom leaders to colonize the corporate world with supernatural wisdom and excellence.",
    icon: Globe,
    image: "https://picsum.photos/seed/tribe-pro/800/1000"
  },
  {
    title: "FAMILY CORE",
    description: "Building strong prophetic families anchored in the word and the supernatural power of God.",
    icon: Users,
    image: "https://picsum.photos/seed/tribe-family/800/1000"
  }
];

export default function JoinTribePage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero - Advanced Professional Authority */}
      <section className="relative py-24 px-6 text-center border-b border-white/5 bg-card overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black italic uppercase text-primary whitespace-nowrap">
            TRIBE
          </div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase tracking-[0.4em] mb-8 rounded-md">
            FIND YOUR PLACE
          </div>
          <h1 className="text-4xl md:text-6xl font-black italic mb-6 text-white uppercase tracking-tighter leading-none">JOIN YOUR TRIBE</h1>
          <p className="text-[11px] md:text-xs text-white/60 uppercase tracking-[0.3em] leading-relaxed max-w-2xl mx-auto italic font-medium">
            You were not created to walk alone. Discover the community ordained for your spiritual growth, activation, and global assignment.
          </p>
        </div>
      </section>

      {/* Tribe Grid - High Impact Cards */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TRIBES.map((tribe, idx) => (
              <div key={idx} className="group relative aspect-[3/4] overflow-hidden border border-white/5 bg-card rounded-2xl shadow-2xl hover:border-primary/40 transition-all duration-700">
                <Image 
                  src={tribe.image} 
                  alt={tribe.title} 
                  fill 
                  className="object-cover opacity-30 grayscale group-hover:opacity-60 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  data-ai-hint="spiritual community"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-10 space-y-6">
                  <div className="bg-primary p-3 w-fit rounded-xl shadow-xl">
                    <tribe.icon className="h-6 w-6 text-black" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-black italic text-white uppercase leading-none tracking-tight">{tribe.title}</h3>
                    <p className="text-[11px] text-white/80 leading-relaxed italic font-medium">
                      {tribe.description}
                    </p>
                  </div>

                  <Button asChild className="w-full bg-primary text-black font-black uppercase text-[10px] tracking-[0.2em] h-12 rounded-md shadow-xl hover:opacity-90 transition-all active:scale-95">
                    <Link href="/contact">CONNECT WITH TRIBE</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Apostolic Deployment */}
      <section className="py-32 bg-card text-center px-6 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black italic uppercase text-primary whitespace-nowrap">
            DEPLOYED
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-10 relative z-10">
          <div className="w-16 h-1 bg-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-black italic text-white uppercase tracking-tighter leading-none">READY TO START <br/> YOUR JOURNEY?</h2>
          <p className="text-xs md:text-sm text-white/60 leading-relaxed italic font-medium max-w-xl mx-auto uppercase tracking-widest">
            Our mission is to save, equip and deploy you into your God ordained purpose here on earth. Join us today and become part of a unique prophetic generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild className="bg-primary text-black rounded-md h-14 px-12 font-black uppercase tracking-[0.3em] text-[10px] hover:opacity-90 shadow-2xl active:scale-95 transition-all">
              <Link href="/contact">LOCATE A BRANCH</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-md h-14 px-12 font-black uppercase tracking-[0.3em] text-[10px] bg-transparent">
              <Link href="/about">OUR FULL VISION</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
