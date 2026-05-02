
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
    <div className="min-h-screen bg-black pt-20">
      {/* Hero */}
      <section className="relative py-24 px-4 text-center border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 bg-primary text-black text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            Find Your Place
          </div>
          <h1 className="text-3xl md:text-5xl font-black italic mb-6 text-white uppercase tracking-tighter">JOIN YOUR TRIBE</h1>
          <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-[0.2em] leading-relaxed max-w-2xl mx-auto">
            You were not created to walk alone. Discover the community ordained for your spiritual growth.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRIBES.map((tribe, idx) => (
              <div key={idx} className="group relative aspect-[3/4] overflow-hidden border border-white/10 bg-zinc-950">
                <Image 
                  src={tribe.image} 
                  alt={tribe.title} 
                  fill 
                  className="object-cover opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                  data-ai-hint="spiritual community"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                  <tribe.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-black italic text-white uppercase leading-none">{tribe.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {tribe.description}
                  </p>
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black rounded-none uppercase text-[10px] font-black tracking-[0.2em] h-10 px-6">
                    <Link href="/contact">Get Connected</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-950 text-center px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          <Star className="h-8 w-8 text-primary mx-auto" />
          <h2 className="text-2xl font-black italic text-white uppercase">Ready to Start Your Journey?</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our mission is to save, equip and deploy you into your God ordained purpose here on earth. Join us today and become part of a unique prophetic generation.
          </p>
          <Button asChild className="bg-primary text-black rounded-none h-14 px-12 font-black uppercase tracking-[0.3em] text-[11px]">
            <Link href="/contact">Locate A Branch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
