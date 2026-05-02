"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Play, Search, Clock, Calendar, Share2, Download } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

const SERMONS = [
  {
    id: 1,
    title: "THE POWER OF RADICAL FAITH",
    speaker: "SENIOR PASTOR JOHN DOE",
    date: "FEB 18, 2024",
    duration: "45:20",
    category: "FAITH",
    thumbnail: PlaceHolderImages?.find(i => i.id === "sermon-1")?.imageUrl || "https://picsum.photos/seed/sermon1/800/600"
  },
  {
    id: 2,
    title: "WALKING IN DIVINE PURPOSE",
    speaker: "ASSOC. PASTOR JANE SMITH",
    date: "FEB 11, 2024",
    duration: "38:15",
    category: "PURPOSE",
    thumbnail: PlaceHolderImages?.find(i => i.id === "sermon-2")?.imageUrl || "https://picsum.photos/seed/sermon2/800/600"
  },
  {
    id: 3,
    title: "HEALING FOR THE BROKEN HEARTED",
    speaker: "PASTOR MICHAEL BROWN",
    date: "FEB 04, 2024",
    duration: "52:10",
    category: "HEALING",
    thumbnail: PlaceHolderImages?.find(i => i.id === "sermon-3")?.imageUrl || "https://picsum.photos/seed/sermon3/800/600"
  },
  {
    id: 4,
    title: "FINANCIAL STEWARDSHIP IN 2024",
    speaker: "ELDER SARAH WILSON",
    date: "JAN 28, 2024",
    duration: "41:30",
    category: "STEWARDSHIP",
    thumbnail: PlaceHolderImages?.find(i => i.id === "sermon-4")?.imageUrl || "https://picsum.photos/seed/sermon4/800/600"
  }
];

export default function SermonsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSermon, setActiveSermon] = useState(SERMONS[0]);

  const filteredSermons = SERMONS.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.speaker.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-20 pt-20">
      <section className="bg-card text-card-foreground pt-12 pb-24 px-6 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black italic uppercase text-primary whitespace-nowrap">
            REVELATION
          </div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-2">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-black group border border-white/10">
                <Image 
                  src={activeSermon.thumbnail} 
                  alt={activeSermon.title} 
                  fill 
                  className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="h-20 w-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95">
                    <Play className="h-8 w-8 ml-1" />
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <Badge className="bg-primary/20 text-primary border-primary/20 text-[9px] font-black tracking-widest px-3 py-1 uppercase rounded-sm">
                {activeSermon.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-black italic mb-6 leading-[1.1] uppercase tracking-tighter">{activeSermon.title}</h1>
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary italic">{activeSermon.speaker}</p>
                <div className="flex gap-6 text-[8px] font-black uppercase tracking-widest text-card-foreground/50">
                  <div className="flex items-center gap-2"><Calendar className="h-3 w-3" /> {activeSermon.date}</div>
                  <div className="flex items-center gap-2"><Clock className="h-3 w-3" /> {activeSermon.duration}</div>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <Button className="bg-primary text-primary-foreground flex-1 h-12 rounded-md font-black uppercase tracking-[0.2em] text-[10px] shadow-lg hover:opacity-90">
                  PLAY NOW
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-md border-white/10 text-white hover:bg-white/10"><Share2 className="h-4 w-4" /></Button>
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-md border-white/10 text-white hover:bg-white/10"><Download className="h-4 w-4" /></Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-border pb-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-black italic uppercase tracking-tighter">MEDIA ARCHIVE</h2>
              <p className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.3em]">EQUIPPING THE UNIQUE PROPHETIC GENERATION</p>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="SEARCH BY TITLE..." 
                className="pl-10 h-11 bg-secondary/5 border-border rounded-md text-[9px] font-black tracking-widest uppercase"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {filteredSermons.map(sermon => (
              <div 
                key={sermon.id} 
                className="group cursor-pointer space-y-4"
                onClick={() => {
                  setActiveSermon(sermon);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden shadow-xl border border-border transition-all duration-500 hover:border-primary/50">
                  <Image 
                    src={sermon.thumbnail} 
                    alt={sermon.title} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-[8px] font-black text-white tracking-widest backdrop-blur-sm">
                    {sermon.duration}
                  </div>
                </div>
                <div className="space-y-1 px-1">
                  <h3 className="font-black italic text-xs mb-1 group-hover:text-primary transition-colors uppercase leading-tight line-clamp-1 tracking-tight">{sermon.title}</h3>
                  <p className="text-[9px] font-black text-primary uppercase tracking-widest opacity-80">{sermon.speaker}</p>
                  <p className="text-[8px] font-black text-muted-foreground/60 uppercase tracking-widest">{sermon.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
