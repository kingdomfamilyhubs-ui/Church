
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Users, Globe, Flame, Star } from "lucide-react";
import Link from "next/link";

export default function JoinTribePage() {
  const TRIBES = [
    {
      title: "YOUTH IMPACT",
      description: "A generation of young disciples raised to dominate and govern with kingdom culture.",
      icon: Flame,
      image: "https://picsum.photos/seed/tribe-youth/600/800"
    },
    {
      title: "GLOBAL PROFESSIONALS",
      description: "Kingdom leaders colonizing the corporate world with supernatural wisdom and excellence.",
      icon: Globe,
      image: "https://picsum.photos/seed/tribe-pro/600/800"
    },
    {
      title: "FAMILY CORE",
      description: "Building strong prophetic families anchored in the word and the power of God.",
      icon: Users,
      image: "https://picsum.photos/seed/tribe-family/600/800"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero - Advanced Dark Professional */}
      <section className="relative py-24 px-6 text-center border-b border-white/5 bg-card overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black italic uppercase text-primary whitespace-nowrap">
            TRIBE
          </div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6 rounded-md">
            Find Your Place
          </div>
          <h1 className="text-3xl md:text-5xl font-black italic mb-6 text-white uppercase tracking-tighter">JOIN YOUR TRIBE</h1>
          <p className="text-[11px] md:text-xs text-white/60 uppercase tracking-[0.2em] leading-relaxed max-w-2xl mx-auto italic font-medium">
            You were not created to walk alone. Discover the community ordained for your spiritual growth and activation.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TRIBES.map((tribe, idx) => (
              <div key={idx} className="group relative aspect-[3/4] overflow-hidden border border-border bg-card rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <Image 
                  src={tribe.image} 
                  alt={tribe.title} 
                  fill 
                  className="object-cover opacity-40 grayscale group-hover:opacity-70 group-hover:grayscale-0 transition-all duration-1000"
                  data-ai-hint="spiritual community"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                  <div className="bg-primary/20 p-2.5 w-fit rounded-lg border border-primary/20">
                    <tribe.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-black italic text-white uppercase leading-none">{tribe.title}</h3>
                  <p className="text-[11px] text-white/70 leading-relaxed italic font-medium">
                    {tribe.description}
                  </p>
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-md uppercase text-[9px] font-black tracking-[0.2em] h-10 px-6 transition-all bg-transparent">
                    <Link href="/contact">Get Connected</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card text-center px-6 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-8 relative z-10">
          <Star className="h-8 w-8 text-primary mx-auto" />
          <h2 className="text-2xl font-black italic text-white uppercase tracking-tight">Ready to Start Your Journey?</h2>
          <p className="text-xs text-white/60 leading-relaxed italic font-medium">
            Our mission is to save, equip and deploy you into your God ordained purpose here on earth. Join us today and become part of a unique prophetic generation.
          </p>
          <Button asChild className="bg-primary text-primary-foreground rounded-md h-12 px-10 font-black uppercase tracking-[0.3em] text-[10px] hover:opacity-90 shadow-xl">
            <Link href="/contact">LOCATE A BRANCH</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
