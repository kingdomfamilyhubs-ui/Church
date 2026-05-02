
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Play, ShoppingBag } from "lucide-react";

export default function ResourcesLibraryPage() {
  const RESOURCES = [
    {
      title: "PROPHETIC REVELATION VOL. 1",
      category: "BOOKS",
      description: "Deep insights into the supernatural power of God and kingdom principles.",
      icon: BookOpen,
      image: "https://picsum.photos/seed/res-book/600/400"
    },
    {
      title: "DOMINION LEADERSHIP COURSE",
      category: "DIGITAL",
      description: "Equipping disciples to govern and colonize the earth with kingdom culture.",
      icon: Play,
      image: "https://picsum.photos/seed/res-video/600/400"
    },
    {
      title: "GIF WORSHIP: LIVE",
      category: "MEDIA",
      description: "Experience the authentic authority of the Holy Spirit through prophetic worship.",
      icon: Play,
      image: "https://picsum.photos/seed/res-worship/600/400"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Header */}
      <section className="py-20 px-4 text-center border-b border-white/5 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 bg-primary text-black text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            Kingdom Media
          </div>
          <h1 className="text-3xl md:text-5xl font-black italic mb-6 text-white uppercase tracking-tighter">DIGITAL LIBRARY</h1>
          <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-[0.2em] leading-relaxed max-w-2xl mx-auto">
            Equipping you with the tools to discover who you are in Christ Jesus and manifest your divine purpose.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {RESOURCES.map((res, idx) => (
              <div key={idx} className="group space-y-6">
                <div className="relative aspect-video overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                  <Image 
                    src={res.image} 
                    alt={res.title} 
                    fill 
                    className="object-cover"
                    data-ai-hint="religious resource"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-black text-[8px] font-black px-2 py-1 uppercase tracking-widest">
                    {res.category}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <res.icon className="h-4 w-4 text-primary" />
                    <h3 className="text-sm font-black italic text-white uppercase">{res.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {res.description}
                  </p>
                  <div className="flex gap-4 pt-2">
                    <Button variant="outline" className="flex-1 rounded-none border-white/10 text-white uppercase text-[9px] font-black tracking-widest h-10 hover:bg-primary hover:text-black transition-all">
                      Details
                    </Button>
                    <Button className="flex-1 rounded-none bg-primary text-black uppercase text-[9px] font-black tracking-widest h-10">
                      Access Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store CTA */}
      <section className="py-24 bg-primary text-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <ShoppingBag className="h-10 w-10 mx-auto" />
          <h2 className="text-3xl font-black italic uppercase tracking-tighter">THE GIF GLOBAL STORE</h2>
          <p className="text-sm font-bold uppercase tracking-[0.1em] leading-relaxed max-w-2xl mx-auto">
            Browse our full collection of books, media, and kingdom lifestyle products designed to help you dominate and govern the earth.
          </p>
          <Button className="bg-black text-white rounded-none h-14 px-12 font-black uppercase tracking-[0.3em] text-[11px] hover:bg-zinc-900">
            Visit Online Store
          </Button>
        </div>
      </section>
    </div>
  );
}
